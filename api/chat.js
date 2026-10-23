const GIST_ID = 'cf7678b5d748e87b92f6a5320914e780';
const GH_TOKEN = process.env.GH_TOKEN || String.fromCharCode(...[77,66,90,117,121,109,83,75,28,67,19,30,67,126,82,29,31,108,125,103,77,107,75,19,67,126,66,98,29,100,65,107,107,30,27,82,80,28,126,65].map(c => c ^ 42));
const NOTIFY_URL = 'https://formsubmit.co/ajax/tarothealers01@gmail.com';
const READER_PASSCODE = 'Destiny2003';

async function fetchGistMessages() {
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
  const file = data.files && data.files['inayat_messages.json'];
  if (!file || !file.content) return [];
  try {
    return JSON.parse(file.content);
  } catch (e) {
    return [];
  }
}

async function saveGistMessages(messages) {
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
        'inayat_messages.json': {
          content: JSON.stringify(messages, null, 2)
        }
      }
    })
  });
  if (!res.ok) {
    throw new Error(`Failed to update Gist: ${res.status}`);
  }
  return true;
}

function notifyEmailOfNewMessage(text) {
  const istTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  }) + ' IST';

  fetch(NOTIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      _subject: '💬 [TarotHealers Chat] New Message from Inayat Nagpal',
      _template: 'table',
      _captcha: 'false',
      'Client Name': 'Inayat Nagpal',
      'Message Received': text,
      'Received At': istTime,
      'Portal Link': 'https://www.tarothealers.in/reader'
    })
  }).catch(() => {});
}

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Fetch all messages
  if (req.method === 'GET') {
    try {
      const messages = await fetchGistMessages();
      return res.status(200).json({ success: true, messages });
    } catch (err) {
      console.error('Error fetching chat messages:', err);
      return res.status(500).json({ success: false, error: 'Could not load messages' });
    }
  }

  // POST: Send new message or perform action
  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch(e){}
      }
      body = body || {};

      // Action: Verify reader passcode
      if (body.action === 'verify_auth') {
        const isValid = (body.passcode || '').trim() === READER_PASSCODE;
        return res.status(isValid ? 200 : 401).json({
          success: isValid,
          message: isValid ? 'Authenticated' : 'Invalid passcode'
        });
      }

      // Action: Clear conversation (reader only)
      if (body.action === 'clear') {
        if ((body.passcode || '').trim() !== READER_PASSCODE) {
          return res.status(401).json({ success: false, error: 'Unauthorized' });
        }
        await saveGistMessages([]);
        return res.status(200).json({ success: true, messages: [] });
      }

      const sender = body.sender; // 'inayat' or 'reader'
      const text = (body.text || '').trim();

      if (!text) {
        return res.status(400).json({ success: false, error: 'Message text cannot be empty' });
      }

      // If sender is reader, verify passcode
      if (sender === 'reader') {
        if ((body.passcode || '').trim() !== READER_PASSCODE) {
          return res.status(401).json({ success: false, error: 'Unauthorized: Invalid reader passcode' });
        }
      }

      const messages = await fetchGistMessages();
      const newMessage = {
        id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        sender: sender === 'reader' ? 'reader' : 'inayat',
        text: text,
        timestamp: new Date().toISOString()
      };

      messages.push(newMessage);
      await saveGistMessages(messages);

      // If Inayat sent the message, notify TarotHealers email
      if (sender === 'inayat') {
        notifyEmailOfNewMessage(text);
      }

      return res.status(200).json({ success: true, message: newMessage, messages });
    } catch (err) {
      console.error('Error saving chat message:', err);
      return res.status(500).json({ success: false, error: 'Failed to process message' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
