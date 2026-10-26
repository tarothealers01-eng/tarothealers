const NOTIFY_URL = 'https://formsubmit.co/ajax/tarothealers01@gmail.com';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }
    body = body || {};

    const rawIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
    const clientIp = body.ip || rawIp.split(',')[0].trim() || 'Direct Visitor';
    const userAgent = body.userAgent || req.headers['user-agent'] || 'Mozilla/5.0';
    const referer = body.referrer || req.headers['referer'] || req.headers['referrer'] || 'Direct Link / In-App Browser';

    const istTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' IST';

    const payload = {
      _subject: '👀 [Visitor Alert] Someone opened tarothealers.in/reviews',
      _template: 'table',
      _captcha: 'false',
      'Page Visited': body.page || 'https://www.tarothealers.in/reviews',
      'Visit Time (IST)': istTime,
      'Approx Location': body.location || 'Detecting...',
      'Network / ISP': body.isp || 'Standard Network',
      'Visitor IP': clientIp,
      'Device / OS': body.device || 'Unknown Device',
      'Browser': body.browser || 'Unknown Browser',
      'Screen Size': body.screen || 'Unknown Screen',
      'Traffic Source / Referrer': referer,
      'Notification Trigger': 'Reviews Page Live Arrival'
    };

    // Forward to FormSubmit with explicit Origin & Referer headers
    const formRes = await fetch(NOTIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://www.tarothealers.in',
        'Referer': 'https://www.tarothealers.in/reviews',
        'User-Agent': userAgent
      },
      body: JSON.stringify(payload)
    });

    const formJson = await formRes.json().catch(() => ({}));
    if (formJson.success === 'false' || formJson.success === false) {
      console.error('FormSubmit error response:', formJson);
      return res.status(502).json({ success: false, error: formJson.message || 'FormSubmit failed' });
    }

    return res.status(200).json({ success: true, message: 'Visit alert delivered to FormSubmit' });
  } catch (err) {
    console.error('Visit alert error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
