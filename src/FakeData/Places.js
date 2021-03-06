import sundorbonImg from "./Image/sundorbon.png";
import sreemongolImg from "./Image/Sreemongol.png";
import sajekImg from "./Image/Sajek.png";

import featuresImg1 from "./Image/Rectangle 28.png";
import featuresImg2 from "./Image/Rectangle 26.png";
import featuresImg3 from "./Image/Rectangle 27.png";

export const places = [
  {
    id: 0,
    name: "SUNDARBAN",
    img: sundorbonImg,
    details:
      "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. ... It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.",
    coordinates: [21.9497, 89.1833],
  },
  {
    id: 1,
    name: "SREEMANGAL",
    img: sreemongolImg,
    coordinates: [24.3065, 91.7296],
    details:
      "Sreemangal is a hilly area covered with tea estates. There are 47 tea gardens in Sreemangal. A large portion of world’s highest quality tea is grown here. It is also called the city of ‘two leaves and a bud. Sreemangal is famous for nature, forests and wildlife",
  },
  {
    id: 2,
    name: "SAJEK",
    img: sajekImg,
    coordinates: [23.382, 92.2938],
    details:
      "Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls.",
  },
];

export const facilities = [
  {
    id: 0,
    img: featuresImg1,
    name: "Light Bright Air stylish apt and safe paceful stay",
    price: 44,
    rating: "4.9(20)",
  },
  {
    id: 1,
    img: featuresImg2,
    name: "Air Lounge and pool (r&r + b&b)",
    price: 34,
    rating: "4.8(25)",
  },
  {
    id: 2,
    img: featuresImg3,
    name: "Apartment in Lost Panoroma",
    price: 44,
    rating: "4.9(18)",
  },
];
