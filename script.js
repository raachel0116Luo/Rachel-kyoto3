// =======================
// Create Map
// =======================

var map = L.map('map').setView([35.0116, 135.7681], 11);

// =======================
// Tile Layer
// =======================

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap contributors'
  }
).addTo(map);

// =======================
// Emoji Icon Function
// =======================

function createEmojiIcon(emoji) {
  return L.divIcon({
    html: `<div class="emoji-icon">${emoji}</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });
}

// =======================
// Kyoto UNESCO Sites
// =======================

var sites = [

{
  name: "Kiyomizu-dera",
  coords: [34.9949, 135.7850],
  emoji: "⛩️",
  description: "Historic temple with panoramic Kyoto views.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kiyomizu.jpg",
  link: "https://www.kiyomizudera.or.jp/"
},

{
  name: "Kinkaku-ji",
  coords: [35.0394, 135.7292],
  emoji: "🏯",
  description: "The famous Golden Pavilion.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kinkaku-ji_the_Golden_Pavilion_in_Kyoto_overlooking_the_lake_-_high_rez.JPG",
  link: "https://www.shokoku-ji.jp/kinkakuji/"
},

{
  name: "Ginkaku-ji",
  coords: [35.0272, 135.7982],
  emoji: "🏯",
  description: "Zen temple known as the Silver Pavilion.",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ginkakuji_Kyoto.jpg",
  link: "https://www.shokoku-ji.jp/ginkakuji/"
},

{
  name: "Ryoan-ji",
  coords: [35.0345, 135.7182],
  emoji: "🪨",
  description: "Famous Zen rock garden temple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ryoanji.jpg",
  link: "https://www.ryoanji.jp/"
},

{
  name: "Tenryu-ji",
  coords: [35.0159, 135.6736],
  emoji: "🌿",
  description: "UNESCO Zen temple in Arashiyama.",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tenryu-ji.jpg",
  link: "https://www.tenryuji.com/"
},

{
  name: "Nijo Castle",
  coords: [35.0142, 135.7482],
  emoji: "🏰",
  description: "Historic Tokugawa shogunate castle.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Nijo_Castle.jpg",
  link: "https://nijo-jocastle.city.kyoto.lg.jp/"
},

{
  name: "To-ji",
  coords: [34.9808, 135.7470],
  emoji: "🏯",

  image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Toji.jpg",
  link: "https://toji.or.jp/"
},

{
  name: "Byodo-in",
  coords: [34.8890, 135.8074],
  emoji: "🏛️",
  description: "Phoenix Hall featured on the 10 yen coin.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Byodo-in.jpg",
  link: "https://www.byodoin.or.jp/"
},

{
  name: "Ujigami Shrine",
  coords: [34.8895, 135.8095],
  emoji: "⛩️",
  description: "Japan’s oldest existing Shinto shrine.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ujigami_Shrine.jpg",
  link: "https://www.ujikamijinja.com/"
},

{
  name: "Kamigamo Shrine",
  coords: [35.0606, 135.7528],
  emoji: "⛩️",
  description: "Ancient shrine dedicated to Kyoto protection.",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Kamigamo-jinja.jpg",
  link: "https://www.kamigamojinja.jp/"
},

{
  name: "Shimogamo Shrine",
  coords: [35.0391, 135.7720],
  emoji: "⛩️",
  description: "Historic shrine surrounded by forest.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Shimogamo_Shrine.jpg",
  link: "https://www.shimogamo-jinja.or.jp/"
},

{
  name: "Daigo-ji",
  coords: [34.9519, 135.8196],
  emoji: "🌸",
  description: "Temple famous for cherry blossoms.",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Daigoji.jpg",
  link: "https://www.daigoji.or.jp/"
},

{
  name: "Kozan-ji",
  coords: [35.0614, 135.6665],
  emoji: "🍃",
  description: "Mountain temple with historic scrolls.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Kozanji.jpg",
  link: "https://kosanji.com/"
},

{
  name: "Saiho-ji",
  coords: [34.9945, 135.6668],
  emoji: "🌱",
  description: "The famous Moss Temple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Saihoji.jpg",
  link: "http://www.saihoji-kokedera.com/"
},

{
  name: "Nishi Hongan-ji",
  coords: [34.9874, 135.7542],
  emoji: "🏯",
  description: "Important Buddhist temple complex.",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Nishi_Honganji.jpg",
  link: "https://www.hongwanji.kyoto/"
},

{
  name: "Kennin-ji",
  coords: [35.0006, 135.7751],
  emoji: "🐉",
  description: "Kyoto’s oldest Zen temple.",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kenninji.jpg",
  link: "https://www.kenninji.jp/"
},

{
  name: "Ninna-ji",
  coords: [35.0311, 135.7138],
  emoji: "🌸",
  description: "Temple famous for late-blooming cherry blossoms.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Ninnaji.jpg",
  link: "https://ninnaji.jp/"
}

];

// =======================
// Generate Markers
// =======================

sites.forEach(site => {

  L.marker(site.coords, {
    icon: createEmojiIcon(site.emoji)
  })
  .addTo(map)
  .bindPopup(`
    <div class="popup-card">
      <img src="${site.image}" class="popup-image">
      <h2>${site.name}</h2>
      <p>${site.description}</p>

      <a href="${site.link}" target="_blank">
        Official Website
      </a>
    </div>
  `);

});