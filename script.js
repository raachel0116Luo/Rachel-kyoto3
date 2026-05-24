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

// ==============================
// Kyoto Heritage Sites
// ==============================

var sites = [

{
    name: "Kiyomizu-dera",
    coords: [34.9948, 135.7850],
    emoji: "⛩️",
    description: "Famous wooden temple with panoramic Kyoto views.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kiyomizu.jpg",
    link: "https://www.kiyomizudera.or.jp/"
},

{
    name: "Kinkaku-ji",
    coords: [35.0394, 135.7292],
    emoji: "✨",
    description: "The Golden Pavilion covered in gold leaf.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG",
    link: "https://www.shokoku-ji.jp/kinkakuji/"
},

{
    name: "Ginkaku-ji",
    coords: [35.0271, 135.7982],
    emoji: "🌙",
    description: "Elegant Zen temple known as the Silver Pavilion.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Ginkakuji_Kyoto.jpg",
    link: "https://www.shokoku-ji.jp/ginkakuji/"
},

{
    name: "Nijo Castle",
    coords: [35.0142, 135.7482],
    emoji: "🏯",
    description: "Historic castle of the Tokugawa shogunate.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Nijo_Castle_Ninomaru_Palace.jpg",
    link: "https://nijo-jocastle.city.kyoto.lg.jp/"
},

{
    name: "Ryoan-ji",
    coords: [35.0345, 135.7182],
    emoji: "🪨",
    description: "Famous Zen rock garden temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ryoanji_Temple_Kyoto.jpg",
    link: "https://www.ryoanji.jp/"
},

{
    name: "Tenryu-ji",
    coords: [35.0159, 135.6736],
    emoji: "🌿",
    description: "UNESCO Zen temple in Arashiyama.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tenryu-ji_Kyoto.jpg",
    link: "https://www.tenryuji.com/"
},

{
    name: "To-ji",
    coords: [34.9808, 135.7470],
    emoji: "🗼",
    description: "Temple with Kyoto’s iconic five-story pagoda.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Toji-temple-kyoto.jpg",
    link: "https://toji.or.jp/"
},

{
    name: "Byodo-in",
    coords: [34.8890, 135.8074],
    emoji: "🪽",
    description: "Phoenix Hall featured on the 10 yen coin.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Byodo-in_Temple_Uji.jpg",
    link: "https://www.byodoin.or.jp/"
},

{
    name: "Ujigami Shrine",
    coords: [34.8894, 135.8098],
    emoji: "🦊",
    description: "Japan’s oldest existing Shinto shrine.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Ujigami_Shrine.jpg",
    link: "https://www.ujigami-jinja.com/"
},

{
    name: "Daigo-ji",
    coords: [34.9517, 135.8196],
    emoji: "🌸",
    description: "Temple famous for cherry blossoms.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Daigoji_Kyoto.jpg",
    link: "https://www.daigoji.or.jp/"
},

{
    name: "Ninna-ji",
    coords: [35.0319, 135.7138],
    emoji: "🏮",
    description: "Historic temple founded in 888.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Ninna-ji_Kyoto.jpg",
    link: "https://ninnaji.jp/"
},

{
    name: "Saiho-ji",
    coords: [34.9915, 135.6668],
    emoji: "🍃",
    description: "The famous Moss Temple.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Saihoji_Kokedera.jpg",
    link: "https://saihoji-kokedera.com/"
},

{
    name: "Shimogamo Shrine",
    coords: [35.0389, 135.7720],
    emoji: "🌲",
    description: "Ancient shrine surrounded by forest.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Shimogamo-jinja.jpg",
    link: "https://www.shimogamo-jinja.or.jp/"
},

{
    name: "Kamigamo Shrine",
    coords: [35.0601, 135.7527],
    emoji: "🛕",
    description: "One of Kyoto’s oldest shrines.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kamigamo-jinja.jpg",
    link: "https://www.kamigamojinja.jp/"
},

{
    name: "Kozan-ji",
    coords: [35.0608, 135.6707],
    emoji: "📜",
    description: "Mountain temple known for ancient scrolls.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kozanji_Kyoto.jpg",
    link: "https://kosanji.com/"
},

{
    name: "Nishi Hongan-ji",
    coords: [34.9921, 135.7517],
    emoji: "🪔",
    description: "Important Buddhist temple in central Kyoto.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nishi_Honganji.jpg",
    link: "https://www.hongwanji.kyoto/"
},

{
    name: "Togetsukyo Bridge",
    coords: [35.0094, 135.6671],
    emoji: "🌉",
    description: "Scenic bridge in Arashiyama.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Togetsukyo_Bridge.jpg",
    link: "https://www.japan-guide.com/e/e3922.html"
}

];