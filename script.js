// =========================
// Create Map
// =========================

var map = L.map('map').setView([35.0116, 135.7681], 12);

// =========================
// Tile Layer
// =========================

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap contributors'
  }
).addTo(map);

// =========================
// Emoji Icon Function
// =========================

function createEmojiIcon(emoji) {

  return L.divIcon({

    html: `<div class="emoji-icon">${emoji}</div>`,

    className: '',

    iconSize: [32, 32],

    iconAnchor: [16, 16]

  });

}

// =========================
// Kyoto UNESCO Sites
// =========================

var sites = [

  {
    name: "Kiyomizu-dera",
    coords: [34.9949, 135.7850],
    emoji: "🏯",
    description:
      "One of Kyoto’s most famous temples and a UNESCO World Heritage Site.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Kiyomizu.jpg",
    link:
      "https://www.kiyomizudera.or.jp/en/"
  },

  {
    name: "Fushimi Inari Taisha",
    coords: [34.9671, 135.7727],
    emoji: "⛩️",
    description:
      "Famous for its thousands of red torii gates.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Fushimi_Inari_Taisha.jpg",
    link:
      "https://inari.jp/en/"
  },

  {
    name: "Kinkaku-ji",
    coords: [35.0394, 135.7292],
    emoji: "🏯",
    description:
      "The Golden Pavilion, one of Kyoto’s most iconic landmarks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Kinkaku-ji.jpg",
    link:
      "https://www.shokoku-ji.jp/kinkakuji/"
  },

  {
    name: "Ginkaku-ji",
    coords: [35.0272, 135.7982],
    emoji: "🏯",
    description:
      "Known as the Silver Pavilion and famous for Zen aesthetics.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Ginkakuji.jpg",
    link:
      "https://www.shokoku-ji.jp/ginkakuji/"
  },

  {
    name: "Nijo Castle",
    coords: [35.0142, 135.7482],
    emoji: "🏰",
    description:
      "Historic castle of the Tokugawa shogunate.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Nijo_Castle.jpg",
    link:
      "https://nijo-jocastle.city.kyoto.lg.jp/"
  }

];

// =========================
// Generate Markers
// =========================

sites.forEach(site => {

  L.marker(site.coords, {

    icon: createEmojiIcon(site.emoji)

  })

  .addTo(map)

  .bindPopup(`

    <div class="popup-card">

      <img src="${site.image}">

      <h2>${site.name}</h2>

      <p>${site.description}</p>

      <a href="${site.link}" target="_blank">
        Official Website
      </a>

    </div>

  `);

});