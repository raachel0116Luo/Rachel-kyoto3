{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // =====================================\
// 1. Initialize Map\
// =====================================\
\
var map = L.map('map').setView([35.0116, 135.7681], 12);\
\
// =====================================\
// 2. Tile Layer\
// =====================================\
\
L.tileLayer(\
  'https://\{s\}.tile.openstreetmap.org/\{z\}/\{x\}/\{y\}.png',\
  \{\
    attribution: '&copy; OpenStreetMap contributors'\
  \}\
).addTo(map);\
\
// =====================================\
// 3. Emoji Icons\
// =====================================\
\
function createEmojiIcon(emoji) \{\
    return L.divIcon(\{\
        html: `<div class="emoji-icon">$\{emoji\}</div>`,\
        className: "",\
        iconSize: [32, 32],\
        iconAnchor: [16, 16],\
        popupAnchor: [0, -16]\
    \});\
\}\
\
var templeIcon = createEmojiIcon("\uc0\u55356 \u57327 ");\
var shrineIcon = createEmojiIcon("\uc0\u9961 \u65039 ");\
var castleIcon = createEmojiIcon("\uc0\u55356 \u57328 ");\
\
// =====================================\
// 4. Kyoto UNESCO Heritage Sites\
// =====================================\
\
var heritageSites = [\
\
    \{\
        name: "Kiyomizu-dera Temple",\
        coords: [34.9949, 135.7850],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Featured in Kyoto mystery atmosphere scenes",\
        description: "One of Kyoto's most famous wooden temples."\
    \},\
\
    \{\
        name: "Kinkaku-ji Temple",\
        coords: [35.0394, 135.7292],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Referenced in classic Kyoto travel scenes",\
        description: "The Golden Pavilion covered in gold leaf."\
    \},\
\
    \{\
        name: "Ginkaku-ji Temple",\
        coords: [35.0272, 135.7982],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Traditional eastern Kyoto setting",\
        description: "Known as the Silver Pavilion."\
    \},\
\
    \{\
        name: "Ryoan-ji Temple",\
        coords: [35.0345, 135.7182],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Zen-style Kyoto atmosphere",\
        description: "Famous for its Zen rock garden."\
    \},\
\
    \{\
        name: "Ninna-ji Temple",\
        coords: [35.0310, 135.7138],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Historic temple district scenes",\
        description: "Head temple of the Omuro school."\
    \},\
\
    \{\
        name: "Tenryu-ji Temple",\
        coords: [35.0159, 135.6736],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Arashiyama-inspired background",\
        description: "Major Zen temple in Arashiyama."\
    \},\
\
    \{\
        name: "Saiho-ji Temple (Kokedera)",\
        coords: [34.9964, 135.6668],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Quiet Kyoto garden inspiration",\
        description: "Famous for its moss garden."\
    \},\
\
    \{\
        name: "To-ji Temple",\
        coords: [34.9805, 135.7478],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Traditional Kyoto skyline scenes",\
        description: "Known for Japan\'92s tallest pagoda."\
    \},\
\
    \{\
        name: "Byodo-in Temple",\
        coords: [34.8890, 135.8074],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Referenced in Uji cultural settings",\
        description: "Historic Phoenix Hall in Uji."\
    \},\
\
    \{\
        name: "Kozan-ji Temple",\
        coords: [35.0600, 135.6625],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Mountain temple atmosphere",\
        description: "Hidden temple in northwest Kyoto."\
    \},\
\
    \{\
        name: "Enryaku-ji Temple",\
        coords: [35.0704, 135.8406],\
        icon: templeIcon,\
        type: "Temple",\
        conan: "Mysterious mountain setting",\
        description: "Historic temple complex on Mt. Hiei."\
    \},\
\
    \{\
        name: "Kamigamo Shrine",\
        coords: [35.0603, 135.7525],\
        icon: shrineIcon,\
        type: "Shrine",\
        conan: "Traditional shrine festival scenes",\
        description: "One of Kyoto\'92s oldest Shinto shrines."\
    \},\
\
    \{\
        name: "Shimogamo Shrine",\
        coords: [35.0390, 135.7721],\
        icon: shrineIcon,\
        type: "Shrine",\
        conan: "Classic Kyoto shrine atmosphere",\
        description: "Ancient shrine surrounded by forest."\
    \},\
\
    \{\
        name: "Nijo Castle",\
        coords: [35.0142, 135.7482],\
        icon: castleIcon,\
        type: "Castle",\
        conan: "Historical Kyoto political setting",\
        description: "Tokugawa shogunate residence."\
    \}\
\
];\
\
// =====================================\
// 5. Add Markers\
// =====================================\
\
heritageSites.forEach(function(site) \{\
\
    var popupContent = `\
        <div class="popup-title">$\{site.name\}</div>\
\
        <div class="popup-subtitle">\
            UNESCO World Heritage Site \'95 $\{site.type\}\
        </div>\
\
        <div>\
            $\{site.description\}\
        </div>\
\
        <br>\
\
        <div class="popup-conan">\
            Detective Conan Connection:\
            $\{site.conan\}\
        </div>\
    `;\
\
    L.marker(site.coords, \{\
        icon: site.icon\
    \})\
    .addTo(map)\
    .bindPopup(popupContent);\
\
\});}