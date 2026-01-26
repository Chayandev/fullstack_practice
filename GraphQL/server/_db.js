// _db.js

const games = [
  {
    id: "1",
    title: "God of War Ragnarök",
    platform: ["PS5", "PS4"],
  },
  {
    id: "2",
    title: "Cyberpunk 2077",
    platform: ["PC", "PS5", "Xbox Series X"],
  },
  {
    id: "3",
    title: "Elden Ring",
    platform: ["PC", "PS5", "Xbox Series X"],
  },
  {
    id: "4",
    title: "Hades",
    platform: ["PC", "Switch", "PS5"],
  },
];

const authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Alex Turner",
    verified: true,
  },
];

const reviews = [
  {
    id: "1",
    rating: 9,
    content: "An epic continuation of Kratos’ journey.",
    game_id: "1",
    author_id: "1",
  },
  {
    id: "2",
    rating: 8,
    content: "Great visuals, but launch bugs were painful.",
    game_id: "2",
    author_id: "2",
  },
  {
    id: "3",
    rating: 10,
    content: "A masterpiece. Challenging but deeply rewarding.",
    game_id: "3",
    author_id: "3",
  },
  {
    id: "4",
    rating: 9,
    content: "Incredible world design and lore.",
    game_id: "3",
    author_id: "1",
  },
  {
    id: "5",
    rating: 9,
    content: "Fast-paced combat and beautiful art style.",
    game_id: "4",
    author_id: "2",
  },
];


export default {games,authors,reviews}