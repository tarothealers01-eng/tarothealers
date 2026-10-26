const SHIPMYFORM_URL = 'https://shipmyform.com/to/tarothealers01@gmail.com';
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/tarothealers01@gmail.com';

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
    const pageUrl = body.page || 'https://www.tarothealers.in/reviews';

    const istTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' IST';

    const pageName = pageUrl.includes('reviews') ? 'Reviews Page' : 'TarotHealers Home';

    const payload = {
      _subject: `👀 [Visitor Alert] Someone opened ${pageName} (${pageUrl})`,
      _template: 'table',
      _captcha: 'false',
      'Page Visited': pageUrl,
      'Visit Time (IST)': istTime,
      'Approx Location': body.location || 'Detecting...',
      'Network / ISP': body.isp || 'Standard Network',
      'Visitor IP': clientIp,
      'Device / OS': body.device || 'Unknown Device',
      'Browser': body.browser || 'Unknown Browser',
      'Screen Size': body.screen || 'Unknown Screen',
      'Traffic Source / Referrer': referer,
      'Notification Trigger': `${pageName} Live Arrival`
    };

    const commonHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'https://www.tarothealers.in',
      'Referer': pageUrl,
      'User-Agent': userAgent
    };

    // Dispatch to ShipMyForm & FormSubmit concurrently
    const [shipRes, formRes] = await Promise.allSettled([
      fetch(SHIPMYFORM_URL, {
        method: 'POST',
        headers: commonHeaders,
        body: JSON.stringify(payload)
      }).then(r => r.json().catch(() => ({}))),
      fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: commonHeaders,
        body: JSON.stringify(payload)
      }).then(r => r.json().catch(() => ({})))
    ]);

    const shipSuccess = shipRes.status === 'fulfilled' && (shipRes.value?.ok === true || shipRes.value?.success === true);
    const formSuccess = formRes.status === 'fulfilled' && (formRes.value?.success === 'true' || formRes.value?.success === true);

    return res.status(200).json({
      success: true,
      message: 'Visitor notification processed',
      delivery: {
        shipmyform: shipSuccess ? 'delivered' : 'pending',
        formsubmit: formSuccess ? 'delivered' : 'pending'
      }
    });
  } catch (err) {
    console.error('Visit alert error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
};
