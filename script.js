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
  },
  {
  name: "Ryoan-ji",
  coords: [35.0345, 135.7182],
  emoji: "🏯",
  description:
    "Famous Zen rock garden temple and UNESCO site.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Ryoanji_Temple_Kyoto.jpg",
  link:
    "https://www.ryoanji.jp/"
},

{
  name: "Tenryu-ji",
  coords: [35.0159, 135.6736],
  emoji: "🏯",
  description:
    "Historic Zen temple in Arashiyama.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Tenryuji.jpg",
  link:
    "https://www.tenryuji.com/"
},

{
  name: "To-ji",
  coords: [34.9809, 135.7478],
  emoji: " pagoda",
  description:
    "Known for Japan’s tallest wooden pagoda.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/TojiTemple.jpg",
  link:
    "https://toji.or.jp/"
},

{
  name: "Saiho-ji",
  coords: [34.9919, 135.6668],
  emoji: "🌿",
  description:
    "The famous moss temple of Kyoto.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Saihoji.jpg",
  link:
    "http://www.saihoji-kokedera.com/"
},

{
  name: "Ninna-ji",
  coords: [35.0311, 135.7138],
  emoji: "🏯",
  description:
    "Historic temple famous for late-blooming cherry blossoms.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ninnaji.jpg",
  link:
    "https://ninnaji.jp/"
},

{
  name: "Daigo-ji",
  coords: [34.9518, 135.8191],
  emoji: "🏯",
  description:
    "UNESCO temple complex known for cherry blossoms.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f0/Daigoji.jpg",
  link:
    "https://www.daigoji.or.jp/"
},

{
  name: "Byodo-in",
  coords: [34.8890, 135.8074],
  emoji: "🏯",
  description:
    "Famous Phoenix Hall temple in Uji.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Byodoin.jpg",
  link:
    "https://www.byodoin.or.jp/en/"
},

{
  name: "Ujigami Shrine",
  coords: [34.8903, 135.8094],
  emoji: "⛩️",
  description:
    "One of Japan’s oldest Shinto shrines.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Ujigami_Shrine.jpg",
  link:
    "https://www.pref.kyoto.jp/isan/ujigami.html"
},

{
  name: "Shimogamo Shrine",
  coords: [35.0389, 135.7720],
  emoji: "⛩️",
  description:
    "Ancient shrine surrounded by forest.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Shimogamo-jinja.jpg",
  link:
    "https://www.shimogamo-jinja.or.jp/"
},

{
  name: "Kamigamo Shrine",
  coords: [35.0606, 135.7528],
  emoji: "⛩️",
  description:
    "One of Kyoto’s oldest Shinto shrines.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Kamigamo-jinja.jpg",
  link:
    "https://www.kamigamojinja.jp/"
},

{
  name: "Kozan-ji",
  coords: [35.0600, 135.6761],
  emoji: "🏯",
  description:
    "Mountain temple famous for ancient scrolls.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Kozanji.jpg",
  link:
    "https://kosanji.com/"
},

{
  name: "Nishi Hongan-ji",
  coords: [34.9914, 135.7512],
  emoji: "🏯",
  description:
    "Major Buddhist temple with massive wooden halls.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nishi_Honganji.jpg",
  link:
    "https://www.hongwanji.kyoto/"
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