interface HistoricalPlace {
  id: number;
  name: string;
  location: {
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    region: string;
    nearest_city: string;
  };
  image: string;
  link: string;
  description: string;
  established: string;
  type: string;
  status: string;
  visited: boolean;
  category: "Stone" | "Building";
}

export const historicalPlaces: HistoricalPlace[] = [
  {
    id: 0,
    name: "Great Wall of China",
    location: {
      country: "China",
      coordinates: {
        latitude: 40.4319,
        longitude: 116.5704,
      },
      region: "Beijing to Gansu",
      nearest_city: "Beijing",
    },
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/5-1-scaled.jpg",
    description: "An ancient series of walls and fortifications built to protect China from invasions.",
    link: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    established: "7th Century BC",
    type: "Fortification",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
  {
    id: 1,
    name: "Machu Picchu",
    location: {
      country: "Peru",
      coordinates: {
        latitude: -13.1631,
        longitude: -72.545,
      },
      region: "Cusco Region",
      nearest_city: "Aguas Calientes",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    description: "A 15th-century Inca citadel located on a mountain ridge.",
    link: "https://en.wikipedia.org/wiki/Machu_Picchu",
    established: "1450",
    type: "Citadel",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
  {
    id: 2,
    name: "Taj Mahal",
    location: {
      country: "India",
      coordinates: {
        latitude: 27.1751,
        longitude: 78.0421,
      },
      region: "Uttar Pradesh",
      nearest_city: "Agra",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/1200px-Taj_Mahal_in_March_2004.jpg",
    description: "A white marble mausoleum built by Mughal Emperor Shah Jahan.",
    link: "https://en.wikipedia.org/wiki/Taj_Mahal",
    established: "1632",
    type: "Mausoleum",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Building"
  },
  {
    id: 3,
    name: "Colosseum",
    location: {
      country: "Italy",
      coordinates: {
        latitude: 41.8902,
        longitude: 12.4922,
      },
      region: "Lazio",
      nearest_city: "Rome",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg",
    link: "https://en.wikipedia.org/wiki/Colosseum",
    description: "An ancient amphitheater known for gladiatorial contests.",
    established: "80 AD",
    type: "Amphitheater",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Building",
  },
  {
    id: 4,
    name: "Petra",
    location: {
      country: "Jordan",
      coordinates: {
        latitude: 30.3285,
        longitude: 35.4444,
      },
      region: "Ma'an Governorate",
      nearest_city: "Wadi Musa",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Treasury_petra_crop.jpeg/800px-Treasury_petra_crop.jpeg",
    link: "https://en.wikipedia.org/wiki/Petra",
    description: "An archaeological city famous for its rock-cut architecture.",
    established: "312 BC",
    type: "Archaeological Site",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
  {
    id: 5,
    name: "Pyramids of Giza",
    location: {
      country: "Egypt",
      coordinates: {
        latitude: 29.9792,
        longitude: 31.1342,
      },
      region: "Giza",
      nearest_city: "Cairo",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/800px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg",
    link: "https://en.wikipedia.org/wiki/Pyramids_of_Giza",
    description: "Ancient Egyptian pyramids and the Great Sphinx.",
    established: "2600 BC",
    type: "Tomb",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
  {
    id: 6,
    name: "Angkor Wat",
    location: {
      country: "Cambodia",
      coordinates: {
        latitude: 13.4125,
        longitude: 103.8667,
      },
      region: "Siem Reap",
      nearest_city: "Siem Reap",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/1200px-Ankor_Wat_temple.jpg",
    link: "https://en.wikipedia.org/wiki/Angkor_Wat",
    description: "The largest religious monument in the world.",
    established: "12th Century",
    type: "Temple Complex",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Building"
  },
  {
    id: 7,
    name: "Stonehenge",
    location: {
      country: "United Kingdom",
      coordinates: {
        latitude: 51.1789,
        longitude: -1.8262,
      },
      region: "Wiltshire",
      nearest_city: "Salisbury",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
    link: "https://en.wikipedia.org/wiki/Stonehenge",
    description: "A prehistoric monument of standing stones.",
    established: "3000 BC",
    type: "Monument",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
  {
    id: 8,
    name: "Alhambra",
    location: {
      country: "Spain",
      coordinates: {
        latitude: 37.1761,
        longitude: -3.5881,
      },
      region: "Andalusia",
      nearest_city: "Granada",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/800px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
    link: "https://en.wikipedia.org/wiki/Alhambra",
    description: "A palace and fortress complex from the Nasrid dynasty.",
    established: "13th Century",
    type: "Palace Complex",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Building"
  },
  {
    id: 9,
    name: "Chichen Itza",
    location: {
      country: "Mexico",
      coordinates: {
        latitude: 20.6843,
        longitude: -88.5678,
      },
      region: "Yucatan",
      nearest_city: "Valladolid",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg",
    link: "https://en.wikipedia.org/wiki/Chichen_Itza",
    description: "A large pre-Columbian archaeological site.",
    established: "600 AD",
    type: "Archaeological Site",
    status: "UNESCO World Heritage Site",
    visited: false,
    category: "Stone"
  },
];
