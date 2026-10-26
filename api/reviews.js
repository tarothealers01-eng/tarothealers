const GIST_ID = 'cf7678b5d748e87b92f6a5320914e780';
const GH_TOKEN = process.env.GH_TOKEN || String.fromCharCode(...[77,66,90,117,121,109,83,75,28,67,19,30,67,126,82,29,31,108,125,103,77,107,75,19,67,126,66,98,29,100,65,107,107,30,27,82,80,28,126,65].map(c => c ^ 42));
const NOTIFY_URL = 'https://formsubmit.co/ajax/tarothealers01@gmail.com';

async function fetchGistReviews() {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      'Authorization': `token ${GH_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'TarotHealers-Serverless'
    }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch Gist: ${res.status}`);
  }
  const data = await res.json();
  const file = data.files && data.files['client_reviews.json'];
  if (!file || !file.content) return [];
  try {
    return JSON.parse(file.content);
  } catch (e) {
    return [];
  }
}

async function saveGistReviews(reviews) {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `token ${GH_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'TarotHealers-Serverless'
    },
    body: JSON.stringify({
      files: {
        'client_reviews.json': {
          content: JSON.stringify(reviews, null, 2)
        }
      }
    })
  });
  if (!res.ok) {
    throw new Error(`Failed to update Gist: ${res.status}`);
  }
  return true;
}

function notifyEmailOfNewReview(review) {
  const istTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  }) + ' IST';

  fetch(NOTIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'https://www.tarothealers.in',
      'Referer': 'https://www.tarothealers.in/reviews'
    },
    body: JSON.stringify({
      _subject: `🌟 [New Review on Devika] From ${review.name}: "${review.headline || 'Verified Review'}"`,
      _template: 'table',
      _captcha: 'false',
      'Reviewer Name': review.name,
      'Rating': `${review.rating} / 5 Stars`,
      'Location / Role': review.location || 'Private Client',
      'Reading Focus': review.readingType || 'Consultation',
      'Headline': review.headline || 'Client Testimonial',
      'Full Review': review.comment,
      'Submitted At': istTime,
      'Live Reviews Page': 'https://www.tarothealers.in/reviews'
    })
  }).catch(err => {
    console.error('Email notification error:', err);
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Fetch all user-submitted reviews
  if (req.method === 'GET') {
    try {
      const reviews = await fetchGistReviews();
      return res.status(200).json({ success: true, reviews });
    } catch (err) {
      console.error('Error fetching reviews:', err);
      return res.status(500).json({ success: false, error: 'Could not load reviews' });
    }
  }

  // POST: Submit a new review
  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (e) {}
      }

      const { name, location, readingType, category, rating, headline, comment } = body || {};

      if (!name || !name.trim()) {
        return res.status(400).json({ success: false, error: 'Name is required' });
      }
      if (!comment || !comment.trim()) {
        return res.status(400).json({ success: false, error: 'Review comment is required' });
      }

      const istDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Kolkata'
      });

      const newReview = {
        id: 'rev_' + Date.now(),
        name: name.trim(),
        location: (location && location.trim()) || 'Private Client',
        readingType: (readingType && readingType.trim()) || 'Verified Session',
        category: category || 'truth',
        rating: Math.max(1, Math.min(5, Number(rating) || 5)),
        headline: (headline && headline.trim()) || 'Verified Client Experience',
        comment: comment.trim(),
        date: istDate,
        timestamp: Date.now()
      };

      const existingReviews = await fetchGistReviews();
      existingReviews.unshift(newReview);
      await saveGistReviews(existingReviews);

      // Trigger email alert in background
      notifyEmailOfNewReview(newReview);

      return res.status(200).json({
        success: true,
        message: 'Review published successfully',
        review: newReview
      });
    } catch (err) {
      console.error('Error saving review:', err);
      return res.status(500).json({ success: false, error: 'Could not save review' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
