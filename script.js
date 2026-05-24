// ============================
// Create Map
// ============================

var map = L.map('map').setView([35.0116, 135.7681], 12);

// ============================
// Tile Layer
// ============================

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap contributors'
  }
).addTo(map);

// ============================
// Emoji Icon Function
// ============================

function createEmojiIcon(emoji) {

  return L.divIcon({

    html: `<div class="emoji-icon">${emoji}</div>`,

    className: '',

    iconSize: [32, 32],

    iconAnchor: [16, 16]

  });

}

// ============================
// Kyoto UNESCO Sites
// ============================

var sites = [

{
  name: "Kiyomizu-dera",
  coords: [34.9948, 135.7850],
  emoji: "🏯",
  description: "Famous wooden temple with panoramic Kyoto views.",
  link: "https://www.kiyomizudera.or.jp/en/"
},

{
  name: "Kinkaku-ji",
  coords: [35.0394, 135.7292],
  emoji: "✨",
  description: "The Golden Pavilion covered in gold leaf.",
  link: "https://www.shokoku-ji.jp/kinkakuji/"
},

{
  name: "Ginkaku-ji",
  coords: [35.0272, 135.7982],
  emoji: "🏯",
  description: "Elegant Zen temple known as the Silver Pavilion.",
  link: "https://www.shokoku-ji.jp/ginkakuji/"
},

{
  name: "Ryoan-ji",
  coords: [35.0345, 135.7182],
  emoji: "🪨",
  description: "Famous Zen rock garden temple.",
  link: "https://www.ryoanji.jp/"
},

{
  name: "Nijo Castle",
  coords: [35.0142, 135.7482],
  emoji: "🏰",
  description: "Historic castle of the Tokugawa shogunate.",
  link: "https://nijo-jocastle.city.kyoto.lg.jp/"
},

{
  name: "Tenryu-ji",
  coords: [35.0159, 135.6736],
  emoji: "🍃",
  description: "UNESCO Zen temple in Arashiyama.",
  link: "https://www.tenryuji.com/"
},

{
  name: "To-ji",
  coords: [34.9808, 135.7470],
  emoji: "🌸",
  description: "Temple with Kyoto’s iconic five-story pagoda.",
  link: "https://toji.or.jp/"
},

{
  name: "Byodo-in",
  coords: [34.8890, 135.8074],
  emoji: "🪷",
  description: "Phoenix Hall featured on the 10 yen coin.",
  link: "https://www.byodoin.or.jp/"
},

{
  name: "Ujigami Shrine",
  coords: [34.8904, 135.8091],
  emoji: "⛩️",
  description: "One of Japan’s oldest surviving shrines.",
  link: "https://www.ujigamijinja.com/"
},

{
  name: "Daigo-ji",
  coords: [34.9517, 135.8195],
  emoji: "🌸",
  description: "Temple famous for cherry blossoms.",
  link: "https://www.daigoji.or.jp/"
},

{
  name: "Ninna-ji",
  coords: [35.0311, 135.7138],
  emoji: "🌸",
  description: "Historic temple famous for Omuro cherry blossoms.",
  link: "https://ninnaji.jp/"
},

{
  name: "Kozan-ji",
  coords: [35.0615, 135.6717],
  emoji: "🍁",
  description: "Mountain temple famous for autumn leaves.",
  link: "https://kosanji.com/"
},

{
  name: "Saiho-ji",
  coords: [34.9918, 135.6668],
  emoji: "🌿",
  description: "The famous moss temple.",
  link: "https://saihoji-kokedera.com/"
},

{
  name: "Shimogamo Shrine",
  coords: [35.0390, 135.7721],
  emoji: "⛩️",
  description: "Ancient shrine surrounded by forest.",
  link: "https://www.shimogamo-jinja.or.jp/"
},

{
  name: "Kamigamo Shrine",
  coords: [35.0603, 135.7528],
  emoji: "⛩️",
  description: "Historic shrine in northern Kyoto.",
  link: "https://www.kamigamojinja.jp/"
},

{
  name: "Enryaku-ji",
  coords: [35.0704, 135.8405],
  emoji: "⛰️",
  description: "Sacred temple complex on Mount Hiei.",
  link: "https://www.hieizan.or.jp/"
},

{
  name: "Nishi Hongan-ji",
  coords: [34.9913, 135.7517],
  emoji: "🔔",
  description: "Important Buddhist temple in central Kyoto.",
  link: "https://www.hongwanji.kyoto/"
}

];

// ============================
// Generate Markers
// ============================

sites.forEach(site => {

  L.marker(site.coords, {
    icon: createEmojiIcon(site.emoji)
  })

  .addTo(map)

  .bindPopup(`

    <div class="popup-card">

      <h2>${site.name}</h2>

      <p>${site.description}</p>

      <a href="${site.link}" target="_blank">
        Official Website
      </a>

      <br><br>

      <a href="https://www.google.com/maps/dir/?api=1&destination=${site.coords[0]},${site.coords[1]}" target="_blank">
        🚆 Transportation
      </a>

      <br><br>

      <a href="https://www.google.com/maps/search/restaurant/@${site.coords[0]},${site.coords[1]},15z" target="_blank">
        🍜 Nearby Food
      </a>

    </div>

  `);

});