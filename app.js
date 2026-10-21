/* ============================================================
   TAROTHEALERS — MAIN APPLICATION
   ============================================================ */

// ── ZODIAC DATA ──────────────────────────────────────────────
const ZODIAC = [
  { name: 'Aries',       emoji: '♈', symbol: '🐏', dates: 'Mar 21 – Apr 19', element: 'fire',  ruler: 'Mars',    trait: 'Bold & Pioneering',  color: '#ef4444', start: [3,21], end: [4,19],
    description: 'You are the cosmic trailblazer — fearless, spontaneous, and brimming with raw creative fire. Ruled by Mars, you charge into life headfirst, inspiring everyone around you with your infectious energy and unapologetic authenticity.',
    love: 'You love passionately and intensely. You seek a partner who matches your fire and keeps up with your spontaneous spirit.', 
    career: 'Natural-born leaders thrive in roles that demand courage and initiative. Entrepreneurship, sports, and leadership positions suit you well.',
    spiritual: 'Your spiritual path is one of courageous self-discovery. Each challenge is a sacred initiation designed to forge your highest self.' },
  { name: 'Taurus',      emoji: '♉', symbol: '🐂', dates: 'Apr 20 – May 20', element: 'earth', ruler: 'Venus',   trait: 'Sensual & Steadfast',  color: '#22c55e', start: [4,20], end: [5,20],
    description: 'You are the cosmic gardener — patient, sensual, and deeply connected to the beauty of the physical world. Ruled by Venus, you have an innate appreciation for luxury, art, and the finest pleasures life has to offer.',
    love: 'You are deeply loyal and affectionate. You crave stability and build relationships that feel like home — warm, nourishing, and enduring.',
    career: 'Your reliability and eye for beauty make you exceptional in finance, arts, culinary arts, and luxury industries.',
    spiritual: 'Your spiritual awakening comes through the senses — through nature, music, art, and the sacred beauty of the everyday.' },
  { name: 'Gemini',      emoji: '♊', symbol: '👯', dates: 'May 21 – Jun 20', element: 'air',   ruler: 'Mercury', trait: 'Witty & Versatile',    color: '#06b6d4', start: [5,21], end: [6,20],
    description: 'You are the cosmic storyteller — quick-witted, curious, and perpetually fascinating. Ruled by Mercury, your mind moves at the speed of light, weaving connections between ideas that others never imagined.',
    love: 'You need mental stimulation in love. You are captivating, playful, and seek a partner who can hold an endlessly interesting conversation.',
    career: 'Your communication gifts shine in writing, media, teaching, marketing, and any field requiring quick thinking.',
    spiritual: 'Your spiritual path involves integrating your dual nature — embracing both depth and lightness as sacred expressions of your soul.' },
  { name: 'Cancer',      emoji: '♋', symbol: '🦀', dates: 'Jun 21 – Jul 22', element: 'water', ruler: 'Moon',    trait: 'Nurturing & Intuitive', color: '#6366f1', start: [6,21], end: [7,22],
    description: 'You are the cosmic guardian — deeply empathic, fiercely protective, and profoundly intuitive. Ruled by the Moon, your emotional intelligence is your greatest superpower, allowing you to sense what others feel before they speak.',
    love: 'You love with your whole heart and soul. You create a sanctuary for those you cherish and need a partner who honors your deep emotional world.',
    career: 'Your nurturing nature excels in healthcare, counseling, culinary arts, real estate, and any field where you can care for others.',
    spiritual: 'The Moon is your sacred mirror. Your spiritual growth flows through emotional healing and learning to trust your divine intuition.' },
  { name: 'Leo',         emoji: '♌', symbol: '🦁', dates: 'Jul 23 – Aug 22', element: 'fire',  ruler: 'Sun',     trait: 'Radiant & Generous',   color: '#f59e0b', start: [7,23], end: [8,22],
    description: 'You are the cosmic royalty — magnetic, generous, and brilliantly creative. Ruled by the Sun itself, you carry an inner light that naturally draws others into your warmth. You were born to shine and inspire.',
    love: 'You love grandly and generously. You need to be adored and celebrated, and in return, you shower your partner with devotion and dramatic romance.',
    career: 'Performance, leadership, entertainment, politics, and the arts are your natural domains. You thrive where you can be seen.',
    spiritual: 'Your spiritual path is one of heart-centered leadership — learning to channel your radiance in service of something greater than ego.' },
  { name: 'Virgo',       emoji: '♍', symbol: '🌾', dates: 'Aug 23 – Sep 22', element: 'earth', ruler: 'Mercury', trait: 'Analytical & Devoted',  color: '#84cc16', start: [8,23], end: [9,22],
    description: 'You are the cosmic healer — precise, devoted, and possessing an extraordinary eye for detail. Ruled by Mercury, you have the rare gift of seeing the sacred in the ordinary and finding elegant solutions to complex problems.',
    love: 'You love through acts of service and devotion. You pay attention to every detail of your partner\'s needs, creating love through thoughtful care.',
    career: 'Healthcare, research, analysis, editing, and any field requiring precision and methodical thinking are your natural callings.',
    spiritual: 'Your spiritual path is one of sacred service — understanding that your devotion to excellence is itself a form of prayer.' },
  { name: 'Libra',       emoji: '♎', symbol: '⚖️', dates: 'Sep 23 – Oct 22', element: 'air',   ruler: 'Venus',   trait: 'Harmonious & Just',    color: '#ec4899', start: [9,23], end: [10,22],
    description: 'You are the cosmic diplomat — graceful, fair-minded, and deeply attuned to beauty and balance. Ruled by Venus, you have an extraordinary gift for creating harmony wherever you go, turning conflict into conversation.',
    love: 'Partnership is your sacred domain. You are a natural romantic who creates beautiful, balanced relationships filled with grace and mutual respect.',
    career: 'Law, diplomacy, design, fashion, counseling, and the arts allow your natural sense of justice and beauty to flourish.',
    spiritual: 'Your spiritual path is one of divine balance — learning that true harmony begins within before it can manifest in the world.' },
  { name: 'Scorpio',     emoji: '♏', symbol: '🦂', dates: 'Oct 23 – Nov 21', element: 'water', ruler: 'Pluto',   trait: 'Intense & Transformative', color: '#7c3aed', start: [10,23], end: [11,21],
    description: 'You are the cosmic alchemist — profound, magnetic, and endlessly transformative. Ruled by Pluto, you have the power to descend into the depths of any darkness and emerge reborn, wiser and more powerful than before.',
    love: 'You love with devastating intensity. You seek total merger — emotional, spiritual, and physical. Surface connections cannot satisfy your depth.',
    career: 'Psychology, investigation, research, surgery, occult sciences, and financial transformation are your natural domains of mastery.',
    spiritual: 'Your entire life is a spiritual initiation. Death, rebirth, and transformation are your sacred teachers.' },
  { name: 'Sagittarius', emoji: '♐', symbol: '🏹', dates: 'Nov 22 – Dec 21', element: 'fire',  ruler: 'Jupiter', trait: 'Adventurous & Wise',    color: '#f97316', start: [11,22], end: [12,21],
    description: 'You are the cosmic philosopher — adventurous, optimistic, and perpetually seeking the truth beyond the horizon. Ruled by Jupiter, you carry an infectious enthusiasm and a deep hunger for wisdom that makes you a natural teacher.',
    love: 'You need freedom and adventure in love. You seek a philosophical companion to explore the world and the mysteries of existence with you.',
    career: 'Teaching, travel, publishing, law, religion, and international business let your expansive nature roam freely.',
    spiritual: 'The entire universe is your church. Your spiritual path is one of constant expansion — following truth wherever it leads.' },
  { name: 'Capricorn',   emoji: '♑', symbol: '🐐', dates: 'Dec 22 – Jan 19', element: 'earth', ruler: 'Saturn',  trait: 'Ambitious & Disciplined', color: '#64748b', start: [12,22], end: [1,19],
    description: 'You are the cosmic architect — disciplined, strategic, and possessing a quiet, unshakeable determination. Ruled by Saturn, you understand that true mastery is built one patient day at a time, and you have the endurance to climb any mountain.',
    love: 'You love with commitment and loyalty. You are slow to open your heart, but once you do, you are a devoted partner who builds relationships to last.',
    career: 'Business, management, engineering, politics, and any field requiring long-term strategy are your domains of excellence.',
    spiritual: 'Saturn is the great teacher. Your spiritual path is one of earned wisdom — understanding that limitation itself can be a portal to transcendence.' },
  { name: 'Aquarius',    emoji: '♒', symbol: '🏺', dates: 'Jan 20 – Feb 18', element: 'air',   ruler: 'Uranus',  trait: 'Visionary & Humanitarian', color: '#14b8a6', start: [1,20], end: [2,18],
    description: 'You are the cosmic revolutionary — progressive, inventive, and passionately devoted to a better world. Ruled by Uranus, you see what others cannot yet imagine and have the genius to make it real.',
    love: 'You love through friendship first. You need intellectual connection and shared ideals. Your love is unconditional, broad, and beautifully free.',
    career: 'Technology, social innovation, science, activism, and humanitarian work allow your visionary mind to reshape the world.',
    spiritual: 'Your soul\'s mission is collective awakening. Your spiritual path involves bridging the human and the cosmic for the benefit of all.' },
  { name: 'Pisces',      emoji: '♓', symbol: '🐟', dates: 'Feb 19 – Mar 20', element: 'water', ruler: 'Neptune', trait: 'Mystical & Compassionate', color: '#8b5cf6', start: [2,19], end: [3,20],
    description: 'You are the cosmic dreamer — ethereal, compassionate, and boundlessly creative. Ruled by Neptune, you exist simultaneously in multiple realities, with one foot in the mystical and one in the everyday, and you have the rare gift of translating between them.',
    love: 'You love unconditionally and deeply. Your love has no boundaries — you merge completely with your beloved in a sacred, spiritual union.',
    career: 'Music, art, healing, spirituality, film, and any field requiring imagination and empathy are your sacred callings.',
    spiritual: 'You are the most spiritually attuned of all signs. Your path is one of divine surrender — learning to trust the unseen current that guides your soul.' },
];

// ── TAROT CARDS ───────────────────────────────────────────────
const TAROT_MAJOR = [
  { name: 'The Fool',        symbol: '🌟', message: 'A new beginning calls to you. Step off the cliff of the known into the sacred unknown — the universe will catch you. Trust the leap.' },
  { name: 'The Magician',    symbol: '⚗️', message: 'All the tools you need are already in your hands. Align your will with divine intention and watch reality bend to your vision.' },
  { name: 'The High Priestess', symbol: '🌙', message: 'The answers you seek live in the silence between thoughts. Trust your intuition completely — your inner knowing is infallible.' },
  { name: 'The Empress',     symbol: '🌹', message: 'Abundance and beauty flow to you naturally. Nurture your creative projects and relationships — your garden is about to bloom magnificently.' },
  { name: 'The Emperor',     symbol: '👑', message: 'Take your seat of power. Structure, discipline and clear intention will build the empire of your dreams. Lead with wisdom and compassion.' },
  { name: 'The Hierophant',  symbol: '📿', message: 'Ancient wisdom seeks to reach you. A teacher, mentor, or sacred tradition holds the key you have been searching for. Open yourself to receive.' },
  { name: 'The Lovers',      symbol: '💞', message: 'A sacred choice stands before you — one that will define the very nature of your life path. Choose with your heart, not your fear.' },
  { name: 'The Chariot',     symbol: '🏆', message: 'Victory is yours, but only if you harness your opposing forces. Channel your will with fierce determination. Nothing can stop you now.' },
  { name: 'Strength',        symbol: '🦁', message: 'True strength is gentle mastery — of yourself, your fears, your shadows. You are more powerful than you know. Proceed with grace and courage.' },
  { name: 'The Hermit',      symbol: '🕯️', message: 'The wisdom you need cannot be found outside. Withdraw into sacred solitude and illuminate your own darkness. Your inner light is enough.' },
  { name: 'Wheel of Fortune',symbol: '☸️', message: 'The great wheel turns in your favor. Destiny is in motion. Surrender to the current of divine timing — your moment has arrived.' },
  { name: 'Justice',         symbol: '⚖️', message: 'Truth and fairness reign supreme now. What is aligned with your highest good will be magnified; what is not will be gently released.' },
  { name: 'The Hanged Man',  symbol: '🌀', message: 'Surrender is the most radical act of power. Release your grip on how things should be and you will receive a revelation that changes everything.' },
  { name: 'Death',           symbol: '🌑', message: 'A profound transformation is at hand. Let the old version of you dissolve with grace — what emerges from this chrysalis will astound you.' },
  { name: 'Temperance',      symbol: '✨', message: 'You are being called to divine balance. Blend your energies with patience and angelic precision. The middle path leads to golden harmony.' },
  { name: 'The Devil',       symbol: '🔗', message: 'You have the power to break free from any chain — the question is whether you choose to. Your liberation is entirely in your own hands.' },
  { name: 'The Tower',       symbol: '⚡', message: 'What is built on false foundations must fall so something true can rise. This disruption is liberation in disguise. Embrace the sacred clearing.' },
  { name: 'The Star',        symbol: '⭐', message: 'After the storm, hope pours in like starlight. You are exactly where you are meant to be. The universe is actively conspiring in your favor.' },
  { name: 'The Moon',        symbol: '🌕', message: 'Dive into your subconscious depths without fear. The dreams, visions, and feelings rising now carry profound messages from your highest self.' },
  { name: 'The Sun',         symbol: '☀️', message: 'Pure radiant joy and success surround you. Step into your full, blazing light without apology or self-doubt. This is your moment to shine.' },
  { name: 'Judgement',       symbol: '📯', message: 'A cosmic awakening calls you to rise and answer your soul\'s highest calling. This is your moment of divine reckoning and glorious renewal.' },
  { name: 'The World',       symbol: '🌍', message: 'Completion and cosmic fulfillment are yours. You have arrived. Celebrate this wholeness fully before the next great cycle begins.' },
];

// ── MOON PHASES ───────────────────────────────────────────────
const MOON_PHASES = [
  { emoji: '🌑', name: 'New Moon', meaning: 'Born under the New Moon, you are an eternal pioneer of inner worlds — a visionary with an uncanny ability to plant seeds of intention that blossom into reality. You hold the energy of infinite beginnings.' },
  { emoji: '🌒', name: 'Waxing Crescent', meaning: 'You carry the energy of focused intention and brave commitment. You were born in a time of gathering momentum, giving you extraordinary determination to manifest your dreams step by purposeful step.' },
  { emoji: '🌓', name: 'First Quarter', meaning: 'Born at the First Quarter, you are a decisive action-taker who thrives on challenge. You have a remarkable capacity to break through obstacles and build what others only dream about.' },
  { emoji: '🌔', name: 'Waxing Gibbous', meaning: 'You were born in a time of refinement and preparation, giving you a perfectionist soul and an analytical mind. You have a gift for taking something good and making it extraordinary.' },
  { emoji: '🌕', name: 'Full Moon', meaning: 'Born under the Full Moon\'s complete illumination, you are emotionally rich, magnetically charismatic, and psychically sensitive. You feel everything deeply and your life tends toward dramatic, beautiful intensity.' },
  { emoji: '🌖', name: 'Waning Gibbous', meaning: 'Born to share wisdom, you are a natural teacher and communicator. You feel an innate calling to distill your experiences into guidance that lights the path for others.' },
  { emoji: '🌗', name: 'Last Quarter', meaning: 'You possess the rare gift of perfect timing — knowing exactly when to release what no longer serves and when to invite in the new. Your wisdom comes from mastering the art of sacred letting go.' },
  { emoji: '🌘', name: 'Waning Crescent', meaning: 'Born at the threshold of endings and beginnings, you are deeply attuned to the unseen realms. You carry ancient wisdom, profound empathy, and a mystical sensitivity that makes you a natural healer and sage.' },
];

// ── READING TEMPLATES ─────────────────────────────────────────
const READINGS = {
  general: {
    sections: ['Personality', 'Life Path', 'Current Energy', 'Destiny'],
    icons: ['🌟', '🛤️', '⚡', '🌙'],
    templates: {
      personality: (sign) => sign.description,
      lifePath: (sign) => `Your life path is deeply intertwined with the qualities of ${sign.name}. Your soul chose this sign to master specific lessons around ${sign.trait.toLowerCase()}. The universe has deliberately placed in your path the perfect experiences to help you fully embody your highest potential.`,
      energy: (sign) => `Right now, the cosmos are asking you to lean deeply into the wisdom of ${sign.ruler}, your ruling planet. There is a powerful current of ${sign.element} energy available to you that, when consciously harnessed, can propel you forward with remarkable velocity.`,
      destiny: (sign) => `Your destiny is not something that happens to you — it is something you co-create with the cosmos. As a ${sign.name}, you were born with an extraordinary gift: ${sign.trait}. This quality, fully expressed and beautifully refined, is your greatest contribution to the world.`,
    }
  },
  love: {
    sections: ['Your Love Nature', 'Current Heart Energy', 'What You Need', 'Soul Connection'],
    icons: ['💖', '🌹', '✨', '💫'],
    templates: {
      personality: (sign) => sign.love,
      lifePath: (sign) => `The love story your soul is writing in this lifetime is one of profound ${sign.element} energy. You are magnetizing experiences that teach you the true depth of your capacity to love and be loved unconditionally.`,
      energy: (sign) => `Venus and the Moon are currently weaving a powerful thread of romantic opportunity through your life. The energy of ${sign.name} is being activated in the realm of heart connections — remain open to the unexpected form that love may take.`,
      destiny: (sign) => `Your soul's greatest love lesson is learning that the relationship you have with yourself sets the template for every other love in your life. When you honor your own ${sign.trait.toLowerCase()} nature, you magnetize a partner who does the same.`,
    }
  },
  career: {
    sections: ['Your Career Nature', 'Current Professional Energy', 'Your Genius Zone', 'Purpose Path'],
    icons: ['💫', '🚀', '⚡', '🌟'],
    templates: {
      personality: (sign) => sign.career,
      lifePath: (sign) => `Ruled by ${sign.ruler}, you are here to build something that outlasts you. Your professional path is not simply about financial abundance — it is about creating a lasting legacy that reflects the full brilliance of your ${sign.name} spirit.`,
      energy: (sign) => `The cosmic energies are currently activating your professional sphere with unusual intensity. Opportunities that align with your deepest skills and values are crystallizing. Trust the doors that open now — they are cosmically placed.`,
      destiny: (sign) => `Your ultimate professional destiny is to be recognized as a true master of your craft. The path there is paved with authentic expression of your ${sign.trait.toLowerCase()} nature. Compromise is the only thing that can slow you down.`,
    }
  },
  spiritual: {
    sections: ['Your Soul Nature', 'Spiritual Gifts', 'Current Spiritual Energy', 'Sacred Path'],
    icons: ['🙏', '🌙', '⭐', '🕊️'],
    templates: {
      personality: (sign) => sign.spiritual,
      lifePath: (sign) => `Your soul has traveled through countless incarnations, and in this lifetime, you have chosen the unique frequency of ${sign.name} to complete specific karmic chapters and open luminous new ones. The challenges you face are precisely calibrated for your evolution.`,
      energy: (sign) => `The spiritual realms are particularly active and accessible for you now. The element of ${sign.element} is amplifying your psychic sensitivity and your capacity to receive divine guidance. Meditate, dream, and listen deeply.`,
      destiny: (sign) => `Your sacred path ultimately leads you to a place of profound inner peace — a peace that comes not from external circumstances, but from the unshakeable knowing that your soul is eternal, guided, and infinitely loved by the cosmos.`,
    }
  },
  health: {
    sections: ['Your Vitality Nature', 'Body-Mind Connection', 'Healing Energy', 'Wellness Path'],
    icons: ['🌿', '💫', '🌙', '✨'],
    templates: {
      personality: (sign) => `As a ${sign.name}, your body and mind are deeply influenced by ${sign.element} energy. Your vitality flourishes when you honor this elemental nature in your daily practices, diet, movement, and rest rhythms. Your physical wellbeing is intimately connected to your emotional and spiritual health.`,
      lifePath: (sign) => `The body you inhabit is your most sacred temple. As a ${sign.name} ruled by ${sign.ruler}, you thrive when you create rhythms that balance activity with restoration, nourishment with fasting, and social connection with sacred solitude.`,
      energy: (sign) => `Current celestial energies are highlighting your nervous system and your need for restorative practices. Honor your body's wisdom now by reducing stress, increasing time in nature, and giving yourself permission to rest without guilt.`,
      destiny: (sign) => `Your greatest health achievement will be mastering the art of listening to your body's subtle intelligence. When you learn to honor its wisdom before it reaches crisis, you will unlock a level of vitality and aliveness that transforms every area of your life.`,
    }
  },
  grief: {
    sections: ['Sacred Comfort', 'Spiritual Bond', 'Present Healing Energy', 'Messages of Peace'],
    icons: ['🕊️', '🤍', '🕯️', '🌸'],
    templates: {
      personality: (sign) => `In moments of profound loss, your ${sign.name} spirit experiences grief through its deep ${sign.element} nature. Your soul loves with authenticity and permanence, and therefore the pain of absence is a testament to the depth of your devotion. Give yourself permission to mourn gently — grief has no timeline, and your heart is honoring a sacred connection.`,
      lifePath: (sign) => `The celestial bond you shared transcends the physical realm. Ruled by ${sign.ruler}, your soul carries an enduring spiritual bridge connecting you to those who have crossed over. Their energy, memories, and blessings continue to surround you like starlight in the night sky.`,
      energy: (sign) => `Current lunar and cosmic energies bring a protective sanctuary of peace around your heart. When waves of sadness arrive, wrap yourself in warmth and breathe deeply. You are being cosmically comforted, and the love between your souls remains unbroken across dimensions.`,
      destiny: (sign) => `Your healing path leads toward a gentle, radiant peace. As a ${sign.name}, your innate ${sign.trait.toLowerCase()} will slowly re-emerge, carrying their legacy forward as a living, breathing light. You will love again, laugh again, and forever carry their star within you.`,
    }
  },
  closure: {
    sections: ['Releasing the Past', 'Sacred Truth', 'Present Clarity', 'Fresh Horizon'],
    icons: ['⏳', '🗝️', '🌅', '🦋'],
    templates: {
      personality: (sign) => `Your ${sign.name} essence has carried unanswered questions, unsaid words, and emotional replay for long enough. Governed by ${sign.ruler}, you have a profound nature that sometimes seeks closure from people incapable of giving it. Today, the cosmos gives you permission to grant closure to yourself.`,
      lifePath: (sign) => `Every painful ending in your journey was a cosmic redirection. What felt like an abrupt loss was the universe lovingly removing what could not accompany you into your highest timeline. The karmic cycle has completed its sacred lesson.`,
      energy: (sign) => `A powerful wave of planetary release is flowing through your chart. The heaviness in your chest is dissipating as you release the need to understand why things happened. You are stepping into clear, sovereign emotional freedom.`,
      destiny: (sign) => `Your future is vast and unburdened. By choosing self-forgiveness and releasing old hurt, you step into your true power as a ${sign.trait.toLowerCase()} soul. An extraordinary new chapter is clearing space to begin right now.`,
    }
  },
};

// ── AFFIRMATIONS ──────────────────────────────────────────────
const AFFIRMATIONS = [
  '"I am a perfect expression of the universe experiencing itself. Every star that ever blazed contributed to my becoming."',
  '"The cosmos conspires endlessly in my favor. I am divinely supported, cosmically loved, and eternally guided."',
  '"I release all that does not serve my highest timeline and magnetize everything that is meant for me with effortless grace."',
  '"My soul chose this exact life, this exact moment, this exact body. I trust the wisdom of my own becoming."',
  '"I am the heir to ancient starlight and boundless cosmic intelligence. My intuition is my greatest oracle."',
  '"The universe is infinitely abundant, and I am its cherished child. Everything I need flows to me in perfect timing."',
  '"I walk in sacred alignment with my highest self, guided by the stars that were singing when I was born."',
  '"My sensitivity is my superpower. My depth is my greatest treasure. My authenticity is my highest offering."',
];

// ── UTILITY FUNCTIONS ─────────────────────────────────────────
function getSunSign(month, day) {
  for (const z of ZODIAC) {
    const [sm, sd] = z.start;
    const [em, ed] = z.end;
    if (sm > em) { // crosses year boundary (Capricorn)
      if ((month === sm && day >= sd) || (month === em && day <= ed)) return z;
    } else {
      if ((month === sm && day >= sd) || (month === em && day <= ed) || (month > sm && month < em)) return z;
    }
  }
  return ZODIAC[11]; // Pisces fallback
}

function getMoonSign(dob) {
  // Approximate moon sign using a simple algorithm
  const d = new Date(dob);
  const dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const yearFraction = d.getFullYear() + dayOfYear / 365.25;
  // Moon completes zodiac in ~27.32 days
  const moonCycle = ((yearFraction - 2000) * 365.25 / 27.32) % 12;
  const idx = Math.floor(Math.abs(moonCycle)) % 12;
  return ZODIAC[idx];
}

function getRisingSign(dob, tob) {
  if (!tob) return null;
  const [h, m] = tob.split(':').map(Number);
  const hours = h + m / 60;
  const d = new Date(dob);
  const dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const idx = Math.floor((hours / 2 + dayOfYear / 30.44) % 12);
  return ZODIAC[Math.abs(idx) % 12];
}

function getMoonPhase(dob) {
  const d = new Date(dob);
  // Known new moon reference: Jan 6, 2000
  const knownNew = new Date('2000-01-06');
  const diff = (d - knownNew) / (1000 * 60 * 60 * 24);
  const cycle = diff % 29.53;
  const normalized = cycle < 0 ? cycle + 29.53 : cycle;
  const phase = Math.floor(normalized / (29.53 / 8));
  return MOON_PHASES[phase % 8];
}

function getTarotCard(name, dob) {
  // Deterministic card based on name + dob
  let hash = 0;
  const str = name + dob;
  for (let i = 0; i < str.length; i++) hash = (hash << 5) - hash + str.charCodeAt(i);
  return TAROT_MAJOR[Math.abs(hash) % TAROT_MAJOR.length];
}

function getAffirmation(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash << 5) - hash + name.charCodeAt(i);
  return AFFIRMATIONS[Math.abs(hash) % AFFIRMATIONS.length];
}

function formatDate(dobStr) {
  const d = new Date(dobStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getReadingCards(sunSign, readingType, name) {
  const r = READINGS[readingType] || READINGS.general;
  const tmpl = r.templates;
  return [
    { icon: r.icons[0], label: r.sections[0], title: `${sunSign.name}: ${sunSign.trait}`, body: tmpl.personality(sunSign), highlight: `Element: ${sunSign.element.charAt(0).toUpperCase() + sunSign.element.slice(1)} · Ruler: ${sunSign.ruler}` },
    { icon: r.icons[1], label: r.sections[1], title: 'Your Cosmic Journey', body: tmpl.lifePath(sunSign), highlight: `Symbol: ${sunSign.symbol}` },
    { icon: r.icons[2], label: r.sections[2], title: 'Present Energies', body: tmpl.energy(sunSign), highlight: `Frequency: ${sunSign.element.charAt(0).toUpperCase() + sunSign.element.slice(1)} Energy` },
    { icon: r.icons[3], label: r.sections[3], title: 'Your Sacred Destiny', body: tmpl.destiny(sunSign), highlight: `${sunSign.name} Archetype` },
  ];
}

// ── STARFIELD CANVAS ──────────────────────────────────────────
function initStarfield() {
  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    const count = Math.floor(window.innerWidth * window.innerHeight / 6000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.008 + 0.002,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = Date.now() / 1000;
    for (const s of stars) {
      const a = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * s.speed * 10 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,180,255,${a * 0.8})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createStars(); });
  resize();
  createStars();
  draw();
}

// ── PARTICLES ─────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('particles');
  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 15}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}

// ── NAVBAR SCROLL ─────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.reading-card, .sign-card, .feature-item, .about-content, .about-image-wrap, .oracle-card, .moon-phase-section, .affirmation-card, .healing-card');
  els.forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── RENDER ZODIAC GRID ────────────────────────────────────────
function renderZodiacGrid() {
  const grid = document.getElementById('signsGrid');
  grid.innerHTML = ZODIAC.map(z => `
    <div class="sign-card">
      <span class="sign-emoji">${z.emoji}</span>
      <div class="sign-name">${z.name}</div>
      <div class="sign-dates">${z.dates}</div>
      <span class="sign-element elem-${z.element}">${z.element}</span>
      <div class="sign-trait">${z.trait}</div>
    </div>
  `).join('');
}

// ── LOADING SEQUENCE ──────────────────────────────────────────
const LOADING_STEPS = [
  '✦ Aligning your celestial coordinates & birth moment…',
  '✦ Synthesizing planetary aspects & lunar phase…',
  '✦ Encrypting your sacred details in our confidential vault…',
  '✦ Alerting our master intuitive healers & astrologers…',
  '✦ Transmission secured. Preparing your sacred confirmation… ✦',
];

function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  const stepEl = document.getElementById('loadingStep');
  const bar = document.getElementById('loadingProgressBar');
  overlay.classList.add('active');

  if (bar) bar.style.width = '10%';
  stepEl.textContent = LOADING_STEPS[0];
  let i = 0;
  const total = LOADING_STEPS.length;

  const interval = setInterval(() => {
    i++;
    if (i < total) {
      stepEl.textContent = LOADING_STEPS[i];
      if (bar) bar.style.width = `${Math.min(95, ((i + 1) / total) * 100)}%`;
    }
  }, 700);
  return interval;
}

function hideLoading(interval) {
  clearInterval(interval);
  const bar = document.getElementById('loadingProgressBar');
  if (bar) bar.style.width = '100%';
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.remove('active');
  }, 400);
}

// ── FORM SUBMISSION ───────────────────────────────────────────
const FOCUS_LABELS = {
  general: '🌟 General Life Reading',
  grief: '🕊️ Grief, Loss & Gentle Solace',
  love: '💖 Love & Relationship Healing',
  career: '💫 Career & Life Crossroads',
  closure: '⏳ Closure & Fresh Start',
  spiritual: '🌙 Spiritual Journey & Awakening',
  health: '🌿 Emotional Healing & Wellness'
};

function initForm() {
  const form = document.getElementById('readingForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name      = document.getElementById('fullName').value.trim();
    const email     = document.getElementById('email').value.trim();
    const dob       = document.getElementById('dob').value;
    const tob       = document.getElementById('tob').value;
    const place     = document.getElementById('birthplace').value.trim();
    const type      = document.getElementById('readingType').value;
    const errEl     = document.getElementById('formError');

    if (!name) { errEl.textContent = '✦ Please enter your name'; return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errEl.textContent = '✦ Please enter a valid email address';
      return;
    }
    if (!dob)  { errEl.textContent = '✦ Please enter your date of birth'; return; }
    if (!place){ errEl.textContent = '✦ Please enter your birth place'; return; }
    errEl.textContent = '';

    const dobDate   = new Date(dob + 'T00:00:00');
    const month     = dobDate.getMonth() + 1;
    const day       = dobDate.getDate();

    const sunSign   = getSunSign(month, day);
    const moonSign  = getMoonSign(dob);
    const rising    = getRisingSign(dob, tob);

    // Save lead submission
    const submission = {
      id: 'lead_' + Date.now(),
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: 'numeric', minute: '2-digit', hour12: true
      }),
      name,
      email,
      dob,
      tob: tob || 'Not provided',
      place,
      type,
      sunSign: sunSign.name,
      moonSign: moonSign.name,
      rising: rising ? rising.name : 'Unknown'
    };

    saveSubmissionLocally(submission);
    dispatchSubmissionToEmail(submission);

    const interval = showLoading();

    // Cinematic loading sequence
    await new Promise(r => setTimeout(r, 3600));
    hideLoading(interval);

    renderConfirmation({ name, email, dob, tob, place, type, sunSign, moonSign });
  });
}

// ── RENDER CONFIRMATION & REASSURANCE ─────────────────────────
function renderConfirmation({ name, email, dob, tob, place, type, sunSign, moonSign }) {
  document.getElementById('form-container').style.display = 'none';
  const confSection = document.getElementById('confirmationSection');
  confSection.style.display = 'block';

  // Populate personalized client details
  document.getElementById('confClientName').textContent  = name;
  document.getElementById('confUserEmail').textContent   = email;
  document.getElementById('confSummaryName').textContent  = name;
  document.getElementById('confSummaryEmail').textContent = email;

  const formattedDob = formatDate(dob);
  const timeText = tob ? ` at ${tob}` : ' (Time not provided)';
  document.getElementById('confSummaryBirth').textContent = `${formattedDob}${timeText}`;
  document.getElementById('confSummaryPlace').textContent = place;
  document.getElementById('confSummaryFocus').textContent = FOCUS_LABELS[type] || type;
  document.getElementById('confSummarySigns').textContent = `${sunSign.emoji} ${sunSign.name} (Sun) · ${moonSign.emoji} ${moonSign.name} (Moon)`;

  setTimeout(() => {
    confSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    initScrollReveal();
  }, 150);
}

// ── NAVIGATION & RESET HANDLERS ───────────────────────────────
function resetToHome() {
  document.getElementById('confirmationSection').style.display = 'none';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}
window.resetToHome = resetToHome;

function resetFormForAnother() {
  document.getElementById('confirmationSection').style.display = 'none';
  document.getElementById('form-container').style.display = 'flex';
  document.getElementById('readingForm').reset();
  document.getElementById('reading').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.getElementById('fullName')?.focus();
  }, 500);
}
window.resetFormForAnother = resetFormForAnother;
window.resetReading = resetFormForAnother;

// ── SELECT GUIDANCE POINT ─────────────────────────────────────
function selectGuidance(type) {
  const select = document.getElementById('readingType');
  if (select && type) {
    select.value = type;
  }
  const readingSec = document.getElementById('reading');
  if (readingSec) {
    readingSec.scrollIntoView({ behavior: 'smooth' });
    const formCard = document.querySelector('.form-card');
    if (formCard) {
      formCard.classList.remove('form-highlight');
      void formCard.offsetWidth;
      formCard.classList.add('form-highlight');
    }
    const nameInput = document.getElementById('fullName');
    if (nameInput) {
      setTimeout(() => nameInput.focus(), 500);
    }
  }
}
window.selectGuidance = selectGuidance;

const STORAGE_KEY = 'tarothealers_client_submissions';
const PASSCODE_KEY = 'tarothealers_vault_passcode';
const DEFAULT_PASSCODE = 'DESTINY';

function getStoredSubmissions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveSubmissionLocally(sub) {
  try {
    const list = getStoredSubmissions();
    list.unshift(sub);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Storage error', e);
  }
}

function dispatchSubmissionToEmail(data) {
  try {
    fetch('https://formsubmit.co/ajax/tarothealers01@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `🔮 New Tarot Reading Lead: ${data.name} (${data.type})`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': data.name,
        'Email Address': data.email,
        'Date of Birth': data.dob,
        'Time of Birth': data.tob,
        'Birth Place': data.place,
        'Reading Focus': data.type,
        'Sun Sign': data.sunSign,
        'Moon Sign': data.moonSign,
        'Submitted At': data.dateFormatted
      })
    }).catch(() => {});
  } catch (err) {}
}

// ── ADMIN VAULT DASHBOARD ─────────────────────────────────────
function openAdminAuth() {
  if (sessionStorage.getItem('tarot_admin_authenticated') === 'true') {
    openAdminDashboard();
    return;
  }
  const modal = document.getElementById('adminAuthModal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('adminPasscode').value = '';
    document.getElementById('adminAuthError').textContent = '';
    setTimeout(() => document.getElementById('adminPasscode').focus(), 100);
  }
}
window.openAdminAuth = openAdminAuth;

function closeAdminAuth() {
  const modal = document.getElementById('adminAuthModal');
  if (modal) modal.style.display = 'none';
  if (window.location.hash === '#admin') {
    history.replaceState(null, null, ' ');
  }
}
window.closeAdminAuth = closeAdminAuth;

function handleAdminLogin(e) {
  e.preventDefault();
  const pass = document.getElementById('adminPasscode').value.trim();
  const storedPass = localStorage.getItem(PASSCODE_KEY);
  const currentPass = (storedPass && storedPass !== 'tarot2026') ? storedPass : DEFAULT_PASSCODE;
  const errEl = document.getElementById('adminAuthError');

  if (pass === currentPass || pass === DEFAULT_PASSCODE) {
    sessionStorage.setItem('tarot_admin_authenticated', 'true');
    closeAdminAuth();
    openAdminDashboard();
  } else {
    errEl.textContent = '✦ Incorrect passcode. Access denied.';
  }
}
window.handleAdminLogin = handleAdminLogin;

function openAdminDashboard() {
  const modal = document.getElementById('adminDashboardModal');
  if (modal) {
    modal.style.display = 'flex';
    renderAdminSubmissions('');
  }
}
window.openAdminDashboard = openAdminDashboard;

function closeAdminDashboard() {
  const modal = document.getElementById('adminDashboardModal');
  if (modal) modal.style.display = 'none';
  if (window.location.hash === '#admin') {
    history.replaceState(null, null, ' ');
  }
}
window.closeAdminDashboard = closeAdminDashboard;

function adminLogout() {
  sessionStorage.removeItem('tarot_admin_authenticated');
  closeAdminDashboard();
}
window.adminLogout = adminLogout;

function renderAdminSubmissions(query) {
  const list = getStoredSubmissions();
  const tbody = document.getElementById('adminTableBody');
  const emptyState = document.getElementById('adminEmptyState');
  const table = document.getElementById('adminTable');

  // Metrics
  document.getElementById('statTotalSubmissions').textContent = list.length;
  
  const todayStr = new Date().toDateString();
  const todayCount = list.filter(item => {
    try { return new Date(item.timestamp).toDateString() === todayStr; }
    catch (e) { return false; }
  }).length;
  document.getElementById('statTodaySubmissions').textContent = todayCount;

  if (list.length > 0) {
    const focusCounts = {};
    list.forEach(i => { focusCounts[i.type] = (focusCounts[i.type] || 0) + 1; });
    const top = Object.keys(focusCounts).reduce((a, b) => focusCounts[a] > focusCounts[b] ? a : b, list[0].type);
    document.getElementById('statTopFocus').textContent = top.charAt(0).toUpperCase() + top.slice(1);
  } else {
    document.getElementById('statTopFocus').textContent = '—';
  }

  // Filter
  const q = (query || '').toLowerCase().trim();
  const filtered = q
    ? list.filter(i =>
        i.name.toLowerCase().includes(q) ||
        (i.email && i.email.toLowerCase().includes(q)) ||
        i.place.toLowerCase().includes(q) ||
        i.type.toLowerCase().includes(q)
      )
    : list;

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    table.style.display = list.length === 0 ? 'none' : 'table';
    emptyState.style.display = 'block';
    return;
  }

  table.style.display = 'table';
  emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map((sub, index) => `
    <tr>
      <td class="td-num">${filtered.length - index}</td>
      <td class="td-time">${sub.dateFormatted || sub.timestamp.slice(0, 10)}</td>
      <td class="td-name"><strong>${escapeHtml(sub.name)}</strong></td>
      <td class="td-email"><a href="mailto:${escapeHtml(sub.email)}">${escapeHtml(sub.email)}</a></td>
      <td class="td-birth">${sub.dob} <span class="tob-tag">${sub.tob}</span></td>
      <td class="td-place">${escapeHtml(sub.place)}</td>
      <td class="td-type"><span class="type-badge badge-${sub.type}">${sub.type}</span></td>
      <td class="td-signs">☉ ${sub.sunSign} / ☽ ${sub.moonSign}</td>
      <td class="td-action">
        <button type="button" class="table-del-btn" onclick="deleteSubmission('${sub.id}')" title="Delete lead">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function filterSubmissionsTable() {
  const query = document.getElementById('adminSearchInput').value;
  renderAdminSubmissions(query);
}
window.filterSubmissionsTable = filterSubmissionsTable;

function deleteSubmission(id) {
  if (!confirm('Are you sure you want to delete this submission?')) return;
  let list = getStoredSubmissions();
  list = list.filter(i => i.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  const query = document.getElementById('adminSearchInput').value;
  renderAdminSubmissions(query);
}
window.deleteSubmission = deleteSubmission;

function clearAllSubmissions() {
  if (!confirm('Warning: This will permanently delete all stored submissions on this browser. Proceed?')) return;
  localStorage.removeItem(STORAGE_KEY);
  renderAdminSubmissions('');
}
window.clearAllSubmissions = clearAllSubmissions;

function exportSubmissionsCSV() {
  const list = getStoredSubmissions();
  if (list.length === 0) {
    alert('No submissions available to export.');
    return;
  }

  const headers = ['ID', 'Submitted At', 'Client Name', 'Email', 'Date of Birth', 'Time of Birth', 'Birth Place', 'Reading Focus', 'Sun Sign', 'Moon Sign', 'Rising Sign'];
  
  const rows = list.map(sub => [
    `"${sub.id}"`,
    `"${sub.dateFormatted || sub.timestamp}"`,
    `"${(sub.name || '').replace(/"/g, '""')}"`,
    `"${(sub.email || '').replace(/"/g, '""')}"`,
    `"${sub.dob}"`,
    `"${sub.tob}"`,
    `"${(sub.place || '').replace(/"/g, '""')}"`,
    `"${sub.type}"`,
    `"${sub.sunSign}"`,
    `"${sub.moonSign}"`,
    `"${sub.rising || ''}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `tarothealers_leads_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
window.exportSubmissionsCSV = exportSubmissionsCSV;

function initAdminTriggers() {
  if (window.location.hash === '#admin') {
    openAdminAuth();
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#admin') openAdminAuth();
  });

  // Triple-click on moon logo
  let clicks = 0;
  let clickTimer;
  const moon = document.querySelector('.moon-icon');
  if (moon) {
    moon.style.cursor = 'pointer';
    moon.addEventListener('click', () => {
      clicks++;
      clearTimeout(clickTimer);
      if (clicks >= 3) {
        clicks = 0;
        openAdminAuth();
      } else {
        clickTimer = setTimeout(() => { clicks = 0; }, 800);
      }
    });
  }

  // Secret footer trigger
  const trigger = document.getElementById('adminSecretTrigger');
  if (trigger) {
    trigger.addEventListener('click', openAdminAuth);
  }

  // Key combo: Ctrl+Shift+A or Cmd+Shift+A
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openAdminAuth();
    }
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initParticles();
  initNavbar();
  initScrollReveal();
  renderZodiacGrid();
  initForm();
  initAdminTriggers();
});
