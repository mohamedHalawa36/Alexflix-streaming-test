let allMovies = [
  {
    _id: {
      $oid: "6480d1e36dac30a126565b34",
    },
    name: "3 Idiots",
    type: "movie",
    category: ["comedy", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    description:
      'Rascal. Joker. Dreamer. Genius... You\'ve never met a college student quite like "Rancho." From the moment he arrives at India\'s most prestigious university, Rancho\'s outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for "Virus," the school’s uptight and heartless dean. But when Rancho catches the eye of the dean\'s sexy daughter, Virus sets his sights on flunking out the "3 idiots" once and for all.',
    cover_image:
      "https://image.tmdb.org/t/p/w500/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg",
    production_year: 2009,
    trailer: "https://www.youtube.com/embed/K0eDlFX9GMc",
    rate: 8.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b17",
    },
    name: "Harry Potter and the Philosopher's Stone",
    type: "movie",
    category: ["fantasy", "fiction", "novel", "family", "adventure"],
    products: [
      "647922f992b54525a6b21e5c",
      "6479232092b54525a6b21e5e",
      "6479232692b54525a6b21e60",
      "6479236592b54525a6b21e62",
      "6479249c92b54525a6b21e64",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    description:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    production_year: 2001,
    trailer: "https://www.youtube.com/embed/VyHV0BRtdxo",
    rate: 8.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3b",
    },
    name: "Bad Boys for Life",
    type: "movie",
    category: ["action", "crime", "comedy"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
    description:
      "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/4J1Vu6oGzt60fakP4delEPDqEhI.jpg",
    production_year: 2020,
    trailer: "https://www.youtube.com/embed/jKCj3XuPG8M",
    rate: 7.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1c",
    },
    name: "John Wick: Chapter 4",
    type: "movie",
    category: ["action", "thriller", "crime"],
    products: [
      "647925db92b54525a6b21e70",
      "647925fe92b54525a6b21e72",
      "6479265d92b54525a6b21e76",
      "6479266a92b54525a6b21e78",
      "6479271f92b54525a6b21e7a",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    description:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    production_year: 2023,
    trailer: "https://www.youtube.com/embed/qEVUtrk8_B4",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b19",
    },
    name: "Thor",
    type: "movie",
    category: [
      "action",
      "super hero",
      "science fiction",
      "fiction",
      "adventure",
      "fantasy",
    ],
    products: [
      "64793b7192b54525a6b21eba",
      "64793b9a92b54525a6b21ebc",
      "64793bae92b54525a6b21ebe",
      "64793bb992b54525a6b21ec0",
      "64793bc492b54525a6b21ec2",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    description:
      "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/1wOu8rdvPxU1ObHi20VcRhfNpbo.jpg",
    production_year: 2011,
    trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
    rate: 7,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2b",
    },
    name: "Braveheart",
    type: "movie",
    category: ["action", "biography", "drama", "history", "war"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
    description:
      "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/vXhTr0cN54R0TbSD9iG5cuAEWcT.jpg",
    production_year: 1995,
    trailer: "https://www.youtube.com/embed/1NJO0jxBtMo",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b23",
    },
    name: "Fast X",
    type: "movie",
    category: ["action", "crime", "thriller", "adventure", "mystrey", "road"],
    products: [
      "6479221092b54525a6b21e52",
      "6479223192b54525a6b21e54",
      "6479224a92b54525a6b21e56",
      "6479225c92b54525a6b21e58",
      "6479227d92b54525a6b21e5a",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    description:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
    production_year: 2023,
    trailer: "https://www.youtube.com/embed/eoOaKN4qCKw",
    rate: 7.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1a",
    },
    name: "Joker",
    type: "movie",
    category: ["action", "drama", "thriller", "mystrey", "crime", "fantasy"],
    products: [
      "6479277e92b54525a6b21e7c",
      "6479279d92b54525a6b21e7e",
      "647927a692b54525a6b21e80",
      "647927b392b54525a6b21e82",
      "647927ca92b54525a6b21e84",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
    production_year: "2019-10-01",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b22",
    },
    name: "Black Panther: Wakanda Forever",
    type: "movie",
    category: [
      "action",
      "super hero",
      "science fiction",
      "adventure",
      "thriller",
      "fantasy",
      "drama",
    ],
    products: [
      "64791a64208d8de09703f46c",
      "64791a93208d8de09703f46e",
      "64791ae3208d8de09703f470",
      "64791b66208d8de09703f472",
      "64791ba5208d8de09703f474",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    description:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    production_year: 2022,
    trailer: "https://www.youtube.com/embed/_Z3QKkl1WyM",
    rate: 7.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b27",
    },
    name: "Deadpool",
    type: "movie",
    category: [
      "comedy",
      "action",
      "romance",
      "super hero",
      "science fiction",
      "adventure",
    ],
    products: [
      "64791c45208d8de09703f476",
      "64791c87208d8de09703f478",
      "64791cb8208d8de09703f47a",
      "6479210192b54525a6b21e4e",
      "647921a192b54525a6b21e50",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    description:
      "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/en971MEXui9diirXlogOrPKmsEn.jpg",
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/Xithigfg7dA",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b21",
    },
    name: "Pirates of the Caribbean: On Stranger Tides",
    type: "movie",
    category: ["action", "adventure", "fantasy"],
    products: [
      "6479397a92b54525a6b21ea6",
      "647939bc92b54525a6b21ea8",
      "647939c492b54525a6b21eaa",
      "647939d292b54525a6b21eac",
      "647939f892b54525a6b21eae",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    description:
      "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
    production_year: 2011,
    trailer: "https://www.youtube.com/embed/0BXCVe8Yww4",
    rate: 7,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b31",
    },
    name: "Whiplash",
    type: "movie",
    category: ["drama", "music"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    description:
      "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/5h8VtV4oh2qkO8Iqz7gypIYJPAr.jpg",
    production_year: 2014,
    trailer: "https://www.youtube.com/embed/oAhvG3wIE_g",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2e",
    },
    name: "The Greatest Showman",
    type: "movie",
    category: ["biography", "drama", "music"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
    description:
      "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/lrNKm3HNvGdZoAfiBKu7b04FLHN.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/AXCTMGYUg9A",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b24",
    },
    name: "Avatar: The Way of Water",
    type: "movie",
    category: [],
    products: [
      "647910a1208d8de09703f458",
      "647910ec208d8de09703f45a",
      "64791211208d8de09703f45c",
      "647912d7208d8de09703f45e",
      "64791330208d8de09703f460",
      "64791835208d8de09703f462",
      "647918a1208d8de09703f464",
      "647918f3208d8de09703f466",
      "6479198e208d8de09703f468",
      "647919a2208d8de09703f46a",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    description:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/suw8eyL3YwE4wfzPQ0cLR02k0Gh.jpg",
    production_year: "2022-12-14",
    trailer: "https://www.youtube.com/embed/d9MyW72ELq0",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2c",
    },
    name: "The Dark Knight",
    type: "movie",
    category: ["action", "crime", "drama", "thriller"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    production_year: 2008,
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    rate: 9.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3e",
    },
    name: "Scent of a Woman",
    type: "movie",
    category: ["drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/j4fDIiv0N78Sfp9Wn0BaYzbIj1B.jpg",
    description:
      "Charlie Simms is a student at a private preparatory school who comes from a poor family. To earn the money for his flight home to Gresham, Oregon for Christmas, Charlie takes a job over Thanksgiving looking after retired U.S. Army officer Lieutenant Colonel Frank Slade, a cantankerous middle-aged man who lives with his niece and her family.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/fa03pD2qYmms4ZMgAv7PMqfFiGO.jpg",
    production_year: 1992,
    trailer: "https://www.youtube.com/embed/EaDz45LF9MM",
    rate: 8.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b40",
    },
    name: "Apocalypto",
    type: "movie",
    category: ["action", "adventure", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/cBFQsU1LDBEOl0Ik0cygeB6wCLE.jpg",
    description:
      "Set in the Mayan civilization, when a man's idyllic presence is brutally disrupted by a violent invading force, he is taken on a perilous journey to a world ruled by fear and oppression where a harrowing end awaits him. Through a twist of fate and spurred by the power of his love for his woman and his family, he will make a desperate break to return home and to ultimately save his way of life.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/s8yphXScZsnvTFbSFE8rIG334vK.jpg",
    production_year: 2006,
    trailer: "https://www.youtube.com/embed/ngWBddVNVZs",
    rate: 8.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b29",
    },
    name: "Inception",
    type: "movie",
    category: [],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    production_year: 2010,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    rate: 8.7,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b33",
    },
    name: "Hacksaw Ridge",
    type: "movie",
    category: ["biography", "drama", "history"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/jhWbYeUNOA5zAb6ufK6pXQFXqTX.jpg",
    description:
      "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/rshlQ6LfPRSWFhpGL4s5ZkIPR51.jpg",
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/r8Tr2KLGzb4",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2f",
    },
    name: "1917",
    type: "movie",
    category: ["drama", "war"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    description:
      "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/2lBOQK06tltt8SQaswgb8d657Mv.jpg",
    production_year: 2019,
    trailer: "https://www.youtube.com/embed/YqNYrYUiMfg",
    rate: 8.6,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2a",
    },
    name: "Interstellar",
    type: "movie",
    category: ["science fiction", "adventure", "mystrey", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    production_year: 2014,
    trailer: "https://www.youtube.com/embed/2LqzF5WauAw",
    rate: 8.8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b30",
    },
    name: "The Father",
    type: "movie",
    category: ["drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/pr3bEQ517uMb5loLvjFQi8uLAsp.jpg",
    description:
      "A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/h3weAFgg06GqchI2xDfufBgSFTj.jpg",
    production_year: 2020,
    trailer: "https://www.youtube.com/embed/4TZb7YfK-JI",
    rate: 8.2,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3f",
    },
    name: "Aladdin",
    type: "movie",
    category: ["adventure", "animation", "comedy"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/fhyun1mja3WwQsYr1a3x1x9BttP.jpg",
    description:
      "Disney’s animated take on the classic Arabian tale, featuring Oscar-winning music and Robin Williams as a wise-cracking blue genie. Young 'street rat' Aladdin has dreams of being something nobler than a small marketplace thief. He discovers a bond with Princess Jasmine during a chance encounter, but is arrested for thievery by the palace guards soon after. In custody, Aladdin learns of a magical lamp that will grant him any wish he desires. Escaping from prison, he heads for the promised land in search of the mythical treasure, completely unaware that he is being manipulated by the Sultan’s sinister Grand Vizier, Jafar.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
    production_year: 1992,
    trailer: "https://www.youtube.com/embed/eGLSPyGszjo",
    rate: 8.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b18",
    },
    name: "Avengers: Endgame",
    type: "movie",
    category: [
      "action",
      "super hero",
      "science fiction",
      "fiction",
      "adventure",
      "fantasy",
    ],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    production_year: 2019,
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    rate: 8.3,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b2d",
    },
    name: "The Dark Knight Rises",
    type: "movie",
    category: ["action", "thriller"],
    products: [
      "64793a6c92b54525a6b21eb0",
      "64793a8f92b54525a6b21eb2",
      "64793ab692b54525a6b21eb4",
      "64793ac992b54525a6b21eb6",
      "64793ae692b54525a6b21eb8",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/85cWkCVftiVs0BVey6pxX8uNmLt.jpg",
    description:
      "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/Yrpb32j3eMpMVX7ND3TnOkHnbl.jpg",
    production_year: 2012,
    trailer: "https://www.youtube.com/embed/g8evyE9TuYk",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1b",
    },
    name: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    category: [
      "crime",
      "thriller",
      "action",
      "super hero",
      "comedy",
      "adventure",
      "fantasy",
    ],
    products: [
      "64790b87208d8de09703f44d",
      "64790e9a208d8de09703f450",
      "64790f58208d8de09703f452",
      "64790f9e208d8de09703f454",
      "64790fb0208d8de09703f456",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    description:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/e59QkHTueqRelzq0thn5deCEKIG.jpg",
    production_year: 2023,
    trailer: "https://www.youtube.com/embed/cqGjhVJWtEg",
    rate: 9.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1e",
    },
    name: "Logan",
    type: "movie",
    category: [
      "action",
      "super hero",
      "fantasy",
      "fiction",
      "science fiction",
      "drama",
      "thriller",
    ],
    products: [
      "6479344192b54525a6b21e90",
      "6479346e92b54525a6b21e92",
      "647934a592b54525a6b21e94",
      "647934b792b54525a6b21e96",
      "647934f592b54525a6b21e98",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    description:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/Div0iP65aZo",
    rate: 8.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b28",
    },
    name: "Wonder Woman",
    type: "movie",
    category: ["action", "super hero", "war", "adventure", "science fiction"],
    products: [
      "64793cdf92b54525a6b21ece",
      "64793d6f92b54525a6b21ed0",
      "64793da592b54525a6b21ed2",
      "64793db492b54525a6b21ed4",
      "6479415892b54525a6b21ed8",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    description:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/AaABt75ZzfMGrscUR2seabz4PEX.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    rate: 7.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b35",
    },
    name: "Wonder",
    type: "movie",
    category: ["drama", "family"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
    description:
      "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/7vsnnWXuYvUesLuoysnfVZC6nxa.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/Ob7fPOzbmzE",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b37",
    },
    name: "Troy",
    type: "movie",
    category: ["action", "drama", "history"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
    description:
      "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/qZitv5zrSXfJafGThxmvbvTsuu5.jpg",
    production_year: 2004,
    trailer: "https://www.youtube.com/embed/znTLzRJimeY",
    rate: 7.4,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b32",
    },
    name: "The Invisible Guest",
    type: "movie",
    category: ["crime", "mystery", "thriller"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
    description:
      "Barcelona, Spain. Adrián Doria, a young and successful businessman accused of murder, meets one night with Virginia Goodman, an expert interrogation lawyer, in order to devise a defense strategy.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/1ZSWFzAP4AZuFCigZZoib2RdcUO.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/epCg2RbyF80",
    rate: 8.1,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3d",
    },
    name: "Dangal",
    type: "movie",
    category: ["biography", "drama", "sport"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg",
    description:
      "Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat. The film traces the inspirational journey of a father who trains his daughters to become world-class wrestlers.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/5qjbu7po6eqLNd4kUPAyIpFRwQK.jpg",
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/jMfvlh0tjyo",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b36",
    },
    name: "Gladiator",
    type: "movie",
    category: ["action", "adventure", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/3ZVEtQxVPpEp5LNpAULDcxadTU3.jpg",
    production_year: 2000,
    trailer: "https://www.youtube.com/embed/NBE-uBgtINg",
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3a",
    },
    name: "The Conjuring",
    type: "movie",
    category: ["horror"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. Forced to confront a powerful entity, the Warrens find themselves caught in the most terrifying case of their lives.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/ecKQlAEG95k62SMGhvX83oEqANK.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/k10ETZ41q5o",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b3c",
    },
    name: "Glory Road",
    type: "movie",
    category: ["drama", "sport"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/bGRSV5tStxDNPRLCewnOeeiZzrY.jpg",
    description:
      "In 1966, Texas Western coach Don Haskins led the first all-black starting lineup for a college basketball team to the NCAA national championship.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/bWN6ZBr6nJNEuHigL9fQWhZ78hd.jpg",
    production_year: 2006,
    trailer: "https://www.youtube.com/embed/uEd69QSBI0s",
    rate: 7.6,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1d",
    },
    name: "Justice League",
    type: "movie",
    category: ["action", "adventure", "fantasy", "super hero"],
    products: [
      "647928ae92b54525a6b21e86",
      "647928ce92b54525a6b21e88",
      "647928ee92b54525a6b21e8a",
      "647928f492b54525a6b21e8c",
      "6479290892b54525a6b21e8e",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    description:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/2nyaeISu2xIxIgZYNpX4UayY8PN.jpg",
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/3cxixDgHUYw",
    rate: 6,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b1f",
    },
    name: "Venom",
    type: "movie",
    category: ["super hero", "thriller", "science fiction", "horror", "action"],
    products: [
      "64793c3e92b54525a6b21ec4",
      "64793c6292b54525a6b21ec6",
      "64793c6a92b54525a6b21ec8",
      "64793c7692b54525a6b21eca",
      "64793c8e92b54525a6b21ecc",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    description:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    production_year: 2018,
    trailer: "https://www.youtube.com/embed/-FmWuCgJmxo",
    rate: 7.3,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b20",
    },
    name: "The Batman",
    type: "movie",
    category: ["action", "super hero", "adventure", "mystrey", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    production_year: 2022,
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b25",
    },
    name: "Mad Max",
    type: "movie",
    category: [
      "action",
      "science fiction",
      "adventure",
      "fantasy",
      "drama",
      "road",
    ],
    products: [
      "647936c092b54525a6b21e9c",
      "647936f592b54525a6b21e9e",
      "6479375792b54525a6b21ea0",
      "6479375f92b54525a6b21ea2",
      "6479376692b54525a6b21ea4",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/5LrI4GiCSrChgkdskVZiwv643Kg.jpg",
    description:
      "In the ravaged near future, a savage motorcycle gang rules the road. Terrorizing innocent civilians while tearing up the streets, the ruthless gang laughs in the face of a police force hell-bent on stopping them. But they underestimate one officer: Max Rockatansky. And when the bikers brutalize Max's best friend and family, they send him into a mad frenzy that leaves him with only one thing left in the world to live for – revenge!",
    cover_image:
      "https://image.tmdb.org/t/p/w500/pcSaAUI0H2iMzHoT2jH71Zp71qV.jpg",
    production_year: 1979,
    trailer: "https://www.youtube.com/embed/caHnaRq8Qlg",
    rate: 7,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b39",
    },
    name: "Captain Phillips",
    type: "movie",
    category: ["biography", "drama", "thriller"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/vjsEi2JytAT76qrtUHPIhXExZAm.jpg",
    description:
      "The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the US-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/fLrGQzvfhTwn9m7AqlJh65FMFfG.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/GEyM01dAxp8",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b26",
    },
    name: "The Hunger Games: Catching Fire",
    type: "movie",
    category: ["action", "science fiction", "adventure", "thriller"],
    products: [
      "6479252b92b54525a6b21e66",
      "6479254e92b54525a6b21e68",
      "6479256d92b54525a6b21e6a",
      "6479257e92b54525a6b21e6c",
      "6479258892b54525a6b21e6e",
    ],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    description:
      'Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a "Victor\'s Tour" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.',
    cover_image:
      "https://image.tmdb.org/t/p/w500/dIi0De3LzEVSQHEUlh0Q2zUpmeW.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/EAzGXqJSDJ8",
    rate: 7.2,
  },
  {
    _id: {
      $oid: "6480d1e36dac30a126565b38",
    },
    name: "Life of Pi",
    type: "movie",
    category: ["adventure", "drama", "fantasy"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/mYDKm9HxImm8PRru3KbkHAe1cmk.jpg",
    description:
      "The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/7H01zprUY67n7bdcFg6VMvrkNjs.jpg",
    production_year: 2012,
    trailer: "https://www.youtube.com/embed/3mMN693-F3U",
    rate: 7,
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b44",
    },
    type: "anime",
    name: "One Punch Man",
    rate: 8,
    description:
      "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\n\n(Source: MAL Rewrite)",
    category: ["action", "comedy", "parody", "sci-fi", "superhero"],
    products: [],
    production_year: 2015,
    trailer: "https://www.youtube.com/embed/Poo5lqoWSGw",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/10740/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/10740/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b55",
    },
    type: "anime",
    name: "Darker than Black",
    rate: 8,
    description:
      "It has been 10 years since Heaven's Gate appeared in South America and Hell's Gate appeared in Japan, veiling the once familiar night sky with an oppressive skyscape. Their purposes unknown, these Gates are spaces in which the very laws of physics are ignored. With the appearance of the Gates emerged Contractors, who, in exchange for their humanity, are granted supernatural abilities.\nIn the Japanese city surrounding Hell’s Gate, Section 4 Chief Misaki Kirihara finds herself at odds with an infamous Contractor codenamed Hei. Called \"Black Reaper\" in the underground world, Hei, like his associates, undertakes missions for the mysterious and ruthless Syndicate while slowly peeling back the dark layers covering a nefarious plot that threatens the very existence of Contractors.\nFrom the mind of Tensai Okamura comes a sci-fi thriller taking the form of a subtle exposé on a war in which political positions and justice have no sway—a war waged exclusively in the shadows.\n[Written by MAL Rewrite]",
    category: [],
    products: [],
    production_year: "2007-04-06",
    trailer: "https://www.youtube.com/embed/goYEIQT5m8U",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/1824/original.png",
    cover_image: "https://media.kitsu.io/anime/cover_images/1824/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b41",
    },
    type: "anime",
    name: "Attack on Titan",
    rate: 8,
    description:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.\n\nAfter witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.\n\n(Source: MAL Rewrite)",
    category: [
      "action",
      "drama",
      "fantasy",
      "horror",
      "mystery",
      "post-apocalyptic",
    ],
    products: [
      "647ac08ec01d27e82a7ecdc4",
      "647ac10fc01d27e82a7ecdc6",
      "647ac3eac01d27e82a7ecdc8",
      "647ac446c01d27e82a7ecdca",
      "647ac466c01d27e82a7ecdcc",
    ],
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/bT9csxkth8g",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/7442/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/7442/original.png",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4c",
    },
    type: "anime",
    name: "One Piece",
    rate: 8,
    description:
      'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n[Written by MAL Rewrite]',
    category: ["action", "adventure", "comedy", "fantasy"],
    products: [
      "647ad143c01d27e82a7ece0a",
      "647ad154c01d27e82a7ece0c",
      "647ad194c01d27e82a7ece0e",
      "647ad1ffc01d27e82a7ece10",
      "647ad22cc01d27e82a7ece12",
    ],
    production_year: 1999,
    trailer: "https://www.youtube.com/embed/S8_YwFLCh4U",
    poster_image: "https://media.kitsu.io/anime/poster_images/12/original.png",
    cover_image:
      "https://media.kitsu.io/anime/12/cover_image/21ecb556255bd46b95aea4779d19789f.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b48",
    },
    type: "anime",
    name: "Hunter x Hunter (2011)",
    rate: 8,
    description:
      "Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son. However, Gon soon realizes the path to achieving his goals is far more challenging than he could have ever imagined.\n\nAlong the way to becoming an official Hunter, Gon befriends the lively doctor-in-training Leorio, vengeful Kurapika, and rebellious ex-assassin Killua. To attain their own goals and desires, together the four of them take the Hunter Exam, notorious for its low success rate and high probability of death. Throughout their journey, Gon and his friends embark on an adventure that puts them through many hardships and struggles. They will meet a plethora of monsters, creatures, and characters—all while learning what being a Hunter truly means.\n\n(Source: MAL Rewrite)",
    category: ["action", "adventure", "fantasy"],
    products: [
      "647ac96cc01d27e82a7ecdea",
      "647ac992c01d27e82a7ecdec",
      "647aca7ac01d27e82a7ecdf0",
      "647aca84c01d27e82a7ecdf2",
      "647acaadc01d27e82a7ecdf4",
    ],
    production_year: 2011,
    trailer: "https://www.youtube.com/embed/DbylrrZ6C_k",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/6448/original.png",
    cover_image: "https://media.kitsu.io/anime/cover_images/6448/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b50",
    },
    type: "anime",
    name: "Nanatsu no Taizai: Imashime no Fukkatsu",
    rate: 8,
    description:
      "Melodias, Hawk, and Elizabeth retook the Kingdom of Leones from the Holy knights. The festival went off without a hitch and the crew enjoyed their well-earned peace. And yet, another threat looms on the horizon. The Ten Commandments, a group of elite demon clan warriors, have their sights set on the kingdom.\n\n(Source: Anime News Network)",
    category: [
      "action",
      "adventure",
      "fantasy",
      "knights",
      "magic",
      "betrayal",
    ],
    products: [],
    production_year: 2018,
    trailer: "https://www.youtube.com/embed/yLAPg8ZYyVI",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/12633/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/12633/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b53",
    },
    type: "anime",
    name: "Dragon Ball Z",
    rate: 8,
    description:
      "Five years after winning the World martial arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.\nWith his failed attempt at forcibly recruiting Gokuu as an ally, Raditz warns Gokuu's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z.\n[Written by MAL Rewrite]",
    category: [
      "action",
      "adventure",
      "fighting",
      "superpowers",
      "martial arts",
      "extraterrestrial",
    ],
    products: [
      "647ac8bcc01d27e82a7ecde0",
      "647ac8d0c01d27e82a7ecde4",
      "647ac91ec01d27e82a7ecde6",
      "647ac936c01d27e82a7ecde8",
    ],
    production_year: 1989,
    trailer: "https://www.youtube.com/embed/sxufB6DxXk0",
    poster_image:
      "https://media.kitsu.io/anime/720/poster_image/905a5906c43d2123fa3ec081be85ebba.png",
    cover_image: "https://media.kitsu.io/anime/cover_images/720/original.png",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b42",
    },
    type: "anime",
    name: "Dragon Ball GT",
    rate: 6,
    description:
      "Dragon Ball GT takes place five years after Gokuu left to train his apprentice Uub, whose training is now complete. During the final stages of Uub's training, Gokuu's old foe Emperor Pilaf infiltrates the Lookout to make a wish on the Black Star Dragon Balls. Due to a slip of the tongue, Pilaf is once again denied world domination and Gokuu is instead turned back into a child. Who could have imagined the dangers that would soon follow this lighthearted event?\nMaking a wish on the Black Star Dragon Balls causes the planet they are used on to explode exactly one year after the wish has been granted. And the Black Star Dragon Balls do not simply scatter across the Earth, they scatter across the entire galaxy. It is up to Gokuu, Trunks, and Pan to retrieve the Balls and save the Earth, but they will find many enemies who are a far greater threat than Emperor Pilaf on their journey throughout the galaxy.",
    category: ["action", "adventure", "fantasy", "martial arts", "sci-fi"],
    products: [],
    production_year: 1996,
    trailer: "https://www.youtube.com/embed/rhULMJlSZ9M",
    poster_image: "https://media.kitsu.io/anime/poster_images/200/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/200/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4d",
    },
    type: "anime",
    name: "Spirited Away",
    rate: 8,
    description:
      "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.\nVivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.\n[Written by MAL Rewrite]",
    category: ["adventure", "drama", "fantasy"],
    products: [],
    production_year: 2001,
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk",
    poster_image: "https://media.kitsu.io/anime/poster_images/176/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/176/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4f",
    },
    type: "anime",
    name: "Haikyuu!!",
    rate: 8,
    description:
      'Inspired after watching a volleyball ace nicknamed "Little Giant" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the "King of the Court," Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School\'s volleyball team—only to find that his sworn rival, Kageyama, is now his teammate.\n\nThanks to his short height, Hinata struggles to find his role on the team, even with his superior jumping power. Surprisingly, Kageyama has his own problems that only Hinata can help with, and learning to work together appears to be the only way for the team to be successful. Based on Haruichi Furudate\'s popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order to make their high school volleyball team the best in Japan.\n\n(Source: MAL)',
    category: [
      "sports",
      "high school",
      "volleyball",
      "teamwork",
      "friendship",
      "determination",
    ],
    products: [],
    production_year: 2014,
    trailer: "https://www.youtube.com/embed/T5nHTuDT88g",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/8133/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/8133/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b49",
    },
    type: "anime",
    name: "Kimetsu no Yaiba",
    rate: 9,
    description:
      "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.\n\n(Source: Crunchyroll)",
    category: ["action", "demon", "historical", "supernatural"],
    products: [
      "647ac6edc01d27e82a7ecdd6",
      "647ac70ac01d27e82a7ecdd8",
      "647ac72fc01d27e82a7ecdda",
      "647ac7f9c01d27e82a7ecddc",
      "647ac81fc01d27e82a7ecdde",
    ],
    production_year: 2019,
    trailer: "https://www.youtube.com/embed/VQGCKyvzIM4",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/41370/original.jpg",
    cover_image:
      "https://media.kitsu.io/anime/41370/cover_image/7958f9c01b57c980636386d124553791.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4a",
    },
    type: "anime",
    name: "Nanatsu no Taizai",
    rate: 8,
    description:
      'In a world similar to the European Middle Ages, the feared yet revered Holy knights of Britannia use immensely powerful magic to protect the region of Britannia and its kingdoms. However, a small subset of the knights supposedly betrayed their homeland and turned their blades against their comrades in an attempt to overthrow the ruler of Liones. They were defeated by the Holy knights, but rumors continued to persist that these legendary knights, called the "Seven Deadly Sins," were still alive. Ten years later, the Holy knights themselves staged a coup d’état, and thus became the new, tyrannical rulers of the Kingdom of Liones.\n\nBased on the best-selling manga series of the same name, Nanatsu no Taizai follows the adventures of Elizabeth, the third princess of the Kingdom of Liones, and her search for the Seven Deadly Sins. With their help, she endeavors to not only take back her kingdom from the Holy knights, but to also seek justice in an unjust world.\n\n(Source: MAL Rewrite)',
    category: ["action", "adventure", "fantasy"],
    products: [],
    production_year: 2014,
    trailer:
      "https://www.youtube.com/embed/wxcvbL6o55M&pp=ygUibmFuYXRzdSBubyB0YWl6YWkgdHJhaWxlciBzZWFzb24gMQ%3D%3D",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/8699/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/8699/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4b",
    },
    type: "anime",
    name: "Koe no Katachi",
    rate: 8,
    description:
      "Shoya is a bully. When Shoko, a girl who can't hear, enters his elementary school class, she becomes their favorite target, and Shoya and his friends goad each other into devising new tortures for her. But the children's cruelty goes too far. Shoko is forced to leave the school, and Shoya ends up shouldering all the blame. Six years later, the two meet again. Can Shoya make up for his past mistakes, or is it too late?\n\n(Source: Kodansha Comics)",
    category: ["drama", "school", "slice of life"],
    products: [],
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/nfK6UgLra7g",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/10028/original.jpeg",
    cover_image: "https://media.kitsu.io/anime/cover_images/10028/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b54",
    },
    type: "anime",
    name: "Black Lagoon",
    rate: 8.3,
    description:
      "Within Thailand is Roanapur, a depraved, crime-ridden city where not even the authorities or churches are untouched by the claws of corruption. A haven for convicts and degenerates alike, the city is notorious for being the center of illegal activities and operations, often fueled by local crime syndicates.\nEnter Rokurou Okajima, an average Japanese businessman who has been living a dull and monotonous life, when he finally gets his chance for a change of pace with a delivery trip to Southeast Asia. His business trip swiftly goes downhill as Rokurou is captured by a mercenary group operating in Roanapur, called Black Lagoon. The group plans to use him as a bargaining chip in negotiations which ultimately failed. Now abandoned and betrayed by his former employer, Rokurou decides to join Black Lagoon. In order to survive, he must quickly adapt to his new environment and prepare himself for the bloodshed and tribulation to come.\nA non-stop, high-octane thriller, Black Lagoon delves into the depths of human morality and virtue. Witness Rokurou struggling to keep his values and philosophies intact as he slowly transforms from businessman to ruthless mercenary.\n[Written by MAL Rewrite]",
    category: [],
    products: [],
    production_year: "2006-04-09",
    trailer: "https://www.youtube.com/embed/JsL9vhMfyrs",
    poster_image: "https://media.kitsu.io/anime/poster_images/789/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/789/original.jpeg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b45",
    },
    type: "anime",
    name: "Death Note",
    rate: 8,
    description:
      "A shinigami, as a god of death, can kill any person—provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifestyle and interested in seeing how a human would use a Death Note, drops one into the human realm.\n\nHigh school student and prodigy Light Yagami stumbles upon the Death Note and—since he deplores the state of the world—tests the deadly notebook by writing a criminal's name in it. When the criminal dies immediately following his experiment with the Death Note, Light is greatly surprised and quickly recognizes how devastating the power that has fallen into his hands could be.\n\nWith this divine capability, Light decides to extinguish all criminals in order to build a new world where crime does not exist and people worship him as a god. Police, however, quickly discover that a serial killer is targeting criminals and, consequently, try to apprehend the culprit. To do this, the Japanese investigators count on the assistance of the best detective in the world: a young and eccentric man known only by the name of L.\n\n(Source: MAL Rewrite)",
    category: [
      "crime",
      "drama",
      "mystery",
      "psychological",
      "supernatural",
      "thriller",
    ],
    products: [
      "647ac52ac01d27e82a7ecdce",
      "647ac53fc01d27e82a7ecdd0",
      "647ac627c01d27e82a7ecdd2",
      "647ac666c01d27e82a7ecdd4",
    ],
    production_year: 2006,
    trailer:
      "https://www.youtube.com/embed/NlJZ-YgAt-c&pp=ygUTZGVhdGggbm90ZSB0cmFpbGVyIA%3D%3D",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/1376/original.png",
    cover_image: "https://media.kitsu.io/anime/cover_images/1376/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b4e",
    },
    type: "anime",
    name: "Ansatsu Kyoushitsu",
    rate: 8.4,
    description:
      "The students return as school is back in session for the second semester. Following their exploits on the island during summer vacation, Class 3-E continues to sharpen their blades with their sights set on their teacher, the slippery Koro-sensei. They have more to worry about than just their teacher, however, as enemy assassins, both old and new, are out for the increased bounty on the octopus' head.\n\nMoreover, their rivals in Class A, as well as Kunugigaoka Junior High's fearsome principal, stand to block Class E from achieving academic excellence. With all of these obstacles opposing them, the group must continue to work together in order to overcome their foes and accomplish their goal of successfully assassinating their teacher.\n\n(Source: MAL Rewrite)",
    category: ["action", "comedy", "school", "shounen", "supernatural"],
    products: [],
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/Qfn-E3dZXL8",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/10877/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/10877/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b43",
    },
    type: "anime",
    name: "Boku no Hero Academia",
    rate: 8.1,
    description:
      "Taking off right after the last episode of the first season. The school is temporarily closed due to security. When U.A. restarts, it is announced that the highly anticipated School Sports Festival will soon be taking place. All classes: Hero, Support, General and Business will be participating. Tournaments all around will decide who is the top Hero in training.\n\n(Source: Anime News Network)",
    category: ["action", "comedy", "school", "shounen", "superhero"],
    products: [],
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/ZclBluzAZVE",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/12268/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/12268/original.png",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b47",
    },
    type: "anime",
    name: "Kimi no Na wa.",
    rate: 8.6,
    description:
      "From director Makoto Shinkai, the innovative mind behind Voices of a Distant Star and 5 Centimeters Per Second, comes a beautiful masterpiece about time, the thread of fate, and the hearts of two young souls.\n\nThe day the stars fell, two lives changed forever. High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other. Yet, somehow, it works. They build a connection and communicate by leaving notes, messages, and more importantly, an imprint.\n\nWhen a dazzling comet lights up the night’s sky, it dawns on them. They want something more from this connection—a chance to meet, an opportunity to truly know each other. Tugging at the string of fate, they try to find a way to each other. But distance isn’t the only thing keeping them apart. Is their bond strong enough to face the cruel irony of time? Or is their meeting nothing more than a wish upon the stars?\n\n(Source: FUNimation Films)",
    category: ["drama", "fantasy", "romance"],
    products: [],
    production_year: 2016,
    trailer: "https://www.youtube.com/embed/NooIc3dMncc",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/11614/original.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/11614/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b46",
    },
    type: "anime",
    name: "Fullmetal Alchemist: Brotherhood",
    rate: 8.1,
    description:
      "\"In order for something to be obtained, something of equal value must be lost.\"\n\nAlchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n\nThree years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n\n(Source: MAL Rewrite)",
    category: [
      "action",
      "adventure",
      "drama",
      "fantasy",
      "magic",
      "military",
      "shounen",
    ],
    products: [],
    production_year: 2009,
    trailer: "https://www.youtube.com/embed/-GoNo0DGroU",
    poster_image:
      "https://media.kitsu.io/anime/poster_images/3936/original.png",
    cover_image: "https://media.kitsu.io/anime/cover_images/3936/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b51",
    },
    type: "anime",
    name: "Naruto",
    rate: 8.7,
    description:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.\n[Written by MAL Rewrite]",
    category: [
      "action",
      "adventure",
      "ninja",
      "friendship",
      "coming of age",
      "fighting",
    ],
    products: [
      "647ad005c01d27e82a7ece00",
      "647ad025c01d27e82a7ece02",
      "647ad04dc01d27e82a7ece04",
      "647ad11cc01d27e82a7ece06",
      "647ad129c01d27e82a7ece08",
    ],
    production_year: 2002,
    trailer: "https://www.youtube.com/embed/QczGoCmX-pI",
    poster_image:
      "https://media.kitsu.io/anime/11/poster_image/4512d403727b2a19a6eb7e7a959be0c3.jpg",
    cover_image: "https://media.kitsu.io/anime/cover_images/11/original.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1ea6dac30a126565b52",
    },
    type: "anime",
    name: "Jujutsu Kaisen",
    rate: 9,
    description:
      "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.\n\n(Source: Crunchyroll)",
    category: [
      "action",
      "supernatural",
      "horror",
      "demons",
      "sorcery",
      "coming of age",
    ],
    products: [
      "647acaefc01d27e82a7ecdf6",
      "647acaf8c01d27e82a7ecdf8",
      "647acb14c01d27e82a7ecdfa",
      "647acb4fc01d27e82a7ecdfc",
      "647acb6dc01d27e82a7ecdfe",
    ],
    production_year: 2020,
    trailer: "https://www.youtube.com/embed/O6qVieflwqs",
    poster_image:
      "https://media.kitsu.io/anime/42765/poster_image/5f099d83883544fc6200be91706d70e0.jpg",
    cover_image:
      "https://media.kitsu.io/anime/cover_images/42765/original.jpeg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6a",
    },
    name: "The Last Kingdom",
    type: "series",
    category: ["historical", "action", "drama"],
    products: [],
    trailer: "https://www.youtube.com/embed/WxPApTGWwas",
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
    description:
      "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/uCqXSfHymdbDMsFx8t0u0OPSuve.jpg",
    production_year: 2015,
    rate: 8.5,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b76",
    },
    name: "Sons of Anarchy",
    type: "series",
    category: ["crime", "drama", "thriller"],
    products: [],
    poster_image:
      "https://image.tmdb.org/t/p/w500/kiy8BHtIHAslh81rvFcZ4wbNGdY.jpg",
    description:
      "An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club’s (MC) desire to protect its livelihood while ensuring that their simple, sheltered town of Charming, California remains exactly that, charming. The MC must confront threats from drug dealers, corporate developers, and overzealous law officers. Behind the MC’s familial lifestyle and legally thriving automotive shop is a ruthless and illegal arms business driven by the seduction of money, power, and blood.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/sAX6JOWZWJGhkvFRctSZIL556mp.jpg",
    production_year: 2008,
    trailer: "https://www.youtube.com/embed/paBZJJXUEtg",
    rate: 8,
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b7a",
    },
    name: "La Casa de Papel",
    description:
      "o carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
    rate: 8.262,
    type: "series",
    category: ["crime", "drama", "thriller"],
    products: [
      "647b2dccedfd6286c94198b1",
      "647b2dccedfd6286c94198b2",
      "647b2dccedfd6286c94198b3",
      "647b2dccedfd6286c94198b4",
      "647b2dccedfd6286c94198b5",
    ],
    production_year: 2017,
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4",
    cover_image:
      "https://image.tmdb.org/t/p/w500/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5b",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    production_year: 2019,
    name: "The Witcher",
    rate: 8.3,
    type: "series",
    category: ["fantasy", "action", "drama"],
    products: [
      "647b2dccedfd6286c94198d4",
      "647b2dccedfd6286c94198d5",
      "647b2dccedfd6286c94198d6",
    ],
    trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b60",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/scx72FpTF929jYXea0MphyE24Wa.jpg",
    description:
      "An American anthology police detective series utilizing multiple timelines in which investigations seem to unearth personal and professional secrets of those involved, both within or outside the law.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/aowr4xpLP5sRCL50TkuADomJ98T.jpg",
    production_year: 2014,
    name: "True Detective",
    rate: 8.5,
    type: "series",
    category: ["crime", "drama", "mystery"],
    products: [],
    trailer: "https://www.youtube.com/embed/fVQUcaO4AvE",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5e",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/hmLTIRtVyTHShJl2Wb8LHmvUgJm.jpg",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    production_year: 2010,
    name: "Sherlock",
    rate: 9.1,
    type: "series",
    category: ["crime", "drama", "mystery"],
    products: [],
    trailer: "https://www.youtube.com/embed/IrBKwzL3K7s",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5c",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    description:
      "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    production_year: 2022,
    name: "Wednesday",
    rate: 9,
    type: "series",
    category: ["horror", "mystery", "drama"],
    products: [
      "647b2dccedfd6286c94198d7",
      "647b2dccedfd6286c94198d8",
      "647b2dccedfd6286c94198d9",
    ],
    trailer: "https://www.youtube.com/embed/Di310WS8zLk",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5a",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
    description:
      "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
    production_year: 2013,
    name: "Rick and Morty",
    rate: 9.1,
    type: "series",
    category: ["animation", "science Fiction", "comedy", "adventure"],
    products: [
      "647b2dccedfd6286c94198c0",
      "647b2dccedfd6286c94198c1",
      "647b2dccedfd6286c94198c2",
    ],
    trailer: "https://www.youtube.com/embed/hl1U0bxTHbY",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b67",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/t2rAdgjSh0WYbXzdOB5zTDqzdCI.jpg",
    production_year: 2011,
    name: "Faltu",
    description:
      "What's in a name? Amidst the arid landscape of Rajasthan, a young woman with dreamy eyes struggles to prove her worth.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
    rate: 5,
    type: "series",
    category: ["comedy", "drama", "musical"],
    products: [],
    trailer: "https://www.youtube.com/embed/m6XZ27u7nr8",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b61",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/89BPrKS6BoktBPTfWcHMQrFNo8s.jpg",
    description:
      "Mickey and his friends Minnie, Donald, Pluto, Daisy, Goofy, Pete, Clarabelle and more go on fun and educational adventures.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/gHtEhlAZHxMawOiPq7JoKwkmETQ.jpg",
    production_year: 2006,
    name: "Mickey Mouse Clubhouse",
    rate: 7.1,
    type: "series",
    category: ["children", "animation", "educational"],
    products: [],
    trailer: "https://www.youtube.com/embed/3fy4W7TDo-k",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6b",
    },
    name: "Dark",
    type: "series",
    category: ["thriller", "mystery", "science fiction"],
    products: [],
    trailer: "https://www.youtube.com/embed/ESEUoa-mz2c",
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    description:
      "A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/nOpary3p4f9cazyj1bCGkBNoaIS.jpg",
    production_year: 2017,
    rate: 8.6,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b72",
    },
    name: "The Flash",
    type: "series",
    category: ["superhero", "action", "adventure"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/rg8N7x27Ef6PvlIiioLStf9ZaIO.jpg",
    description:
      'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
    cover_image:
      "https://image.tmdb.org/t/p/w500/gNPWlhUXhyWiHv9qxr57tvT0WwS.jpg",
    production_year: 2014,
    trailer: "https://www.youtube.com/embed/hebWYacbdvc",
    rate: 8.1,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b74",
    },
    name: "Suits",
    type: "series",
    category: ["legal", "drama", "comedy"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
    description:
      "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/or0E36KfzJYZwqXeiCfm1JgepKF.jpg",
    production_year: 2011,
    trailer: "https://www.youtube.com/embed/85z53bAebsI",
    rate: 8.6,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b7c",
    },
    name: "Squid Game",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
    rate: 7.834,
    type: "series",
    category: ["horrror", "drama", "thriller", "action", "survival"],
    products: [
      "647b2dccedfd6286c94198c6",
      "647b2dccedfd6286c94198c7",
      "647b2dccedfd6286c94198c8",
      "647b2dccedfd6286c94198c9",
      "647b2dccedfd6286c94198ca",
    ],
    production_year: 2021,
    trailer: "https://www.youtube.com/embed/oqxAJKy0ii4",
    cover_image:
      "https://image.tmdb.org/t/p/w500/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5d",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/bY2J2Jq8rSrKm5xCFtzYzqFh44o.jpg",
    description:
      "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/dg9e5fPRRId8PoBE0F6jl5y85Eu.jpg",
    production_year: 2005,
    name: "The Office",
    rate: 9.2,
    type: "series",
    category: ["comedy", "mockumentary"],
    products: [],
    trailer: "https://www.youtube.com/embed/cRpbuYnHWQY",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b62",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/xXRsKNJHTOGrs5wfYAxkbM2RiyT.jpg",
    description:
      "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
    production_year: 2017,
    name: "The Good Doctor",
    rate: 9.3,
    type: "series",
    category: ["drama", "medical", "emotional", "inspiring"],
    products: [],
    trailer: "https://www.youtube.com/embed/lnY9FWUTY84",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b64",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/lY2DhbA7Hy44fAKddr06UrXWWaQ.jpg",
    description:
      "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    production_year: 2023,
    name: "The Last of Us",
    rate: 9,
    type: "series",
    category: ["post-Apocalyptic", "drama", "action", "adventure"],
    products: [],
    trailer: "https://www.youtube.com/embed/uLtkt8BonwM",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6c",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/peqIR6V2zZdzp3MEZBCwtqw1Bf2.jpg",
    production_year: 2022,
    name: "Pyaar Ke Saat Vachan - Dharam Patni",
    description:
      "What will happen when Ravi Randhawa, a business tycoon, meets Pratiksha Parekh, a simple school teacher? Will sparks fly? Or is there no happy-ever-after for the opposite personalities?",
    poster_image:
      "https://image.tmdb.org/t/p/w500/fMR23wg4yNsTEhqyYIfvzDAOEae.jpg",
    rate: 6.4,
    type: "series",
    category: ["drama", "romance"],
    products: [],
    trailer: "https://www.youtube.com/embed/9UxWHffUE0o",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b79",
    },
    name: "Game of Thrones",
    description:
      "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    rate: 8.9,
    type: "series",
    category: [
      "crime",
      "drama",
      "serial",
      "drama",
      "thriller",
      "black comedy",
      "tragedy",
    ],
    products: [
      "647b2dccedfd6286c94198ac",
      "647b2dccedfd6286c94198ad",
      "647b2dccedfd6286c94198ae",
      "647b2dccedfd6286c94198af",
      "647b2dccedfd6286c94198b0",
    ],
    production_year: 2008,
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY&t=1s",
    cover_image:
      "https://image.tmdb.org/t/p/w500/6LWy0jvMpmjoS9fojNgHIKoWL05.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b66",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/xkiv3e1daoqil5MRJitCJcwUgk2.jpg",
    production_year: 2021,
    name: "Judy Justice",
    description:
      "The Honorable Judy Sheindlin, retired Judge of the Manhattan family Court, brings her signature blend of sharp wit and wisdom, hilarious candor and unwavering honesty that has made her America’s favorite judge for over 25 years, as she presides over real cases, arbitrates binding decisions and delivers what only she can: “Judy Justice.”",
    poster_image:
      "https://image.tmdb.org/t/p/w500/4E8Rb9vPbixxC0ZdzSkvE5fpeQa.jpg",
    rate: 4,
    type: "series",
    category: ["drama", "legal", "crime", "mystery"],
    products: [],
    trailer: "https://www.youtube.com/embed/35HKBVJpAGg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b70",
    },
    name: "Vikings",
    type: "series",
    category: ["historical", "action", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    description:
      "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/9GgxinPwAGc",
    rate: 8.7,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b71",
    },
    name: "Hannibal",
    type: "series",
    category: ["thriller", "crime", "psychological"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/imzvb941su6uhQ158GGurk7vF28.jpg",
    description:
      "Both a gift and a curse, Graham has the extraordinary ability to think like his prey—he sees what they see, feels what they feel. But while Graham is pursuing an especially troubling, cannibalistic murderer, Special Agent Jack Crawford teams him with a highly respected psychiatrist – a man with a taste for the criminal minded – Dr. Hannibal Lecter.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/eW1UcrCDbOid6t2xauxapaocAzE.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/Es3B24z8fdA",
    rate: 8.4,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b73",
    },
    name: "The Blacklist",
    type: "series",
    category: ["crime", "thriller", "mystery"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/7WCNaek6zGlhum99TA63QmVPhox.jpg",
    description:
      'Raymond "Red" Reddington, one of the FBI\'s most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he\'s made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.',
    cover_image:
      "https://image.tmdb.org/t/p/w500/sMni8wbgaTCwZlGFYKgAJD4YHcg.jpg",
    production_year: 2013,
    trailer:
      "https://www.youtube.com/embed/-WYdUaK54fU&pp=ygUedGhlIGJsYWNrbGlzdCB0cmFpbGVyIHNlYXNvbiAx",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b77",
    },
    name: "Breaking Bad",
    description:
      "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    rate: 8.9,
    type: "series",
    category: [
      "crime",
      "drama",
      "serial",
      "drama",
      "thriller",
      "black comedy",
      "tragedy",
    ],
    products: [
      "647b2dccedfd6286c94198a4",
      "647b2dccedfd6286c94198a5",
      "647b2dccedfd6286c94198a6",
      "647b2dccedfd6286c94198a7",
    ],
    production_year: 2008,
    trailer: "https://www.youtube.com/embed/HhesaQXLuRY&t=1s",
    cover_image:
      "https://image.tmdb.org/t/p/w500/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b58",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    production_year: 2016,
    name: "Stranger Things",
    rate: 9.4,
    type: "series",
    category: ["science Fiction", "horror", "drama"],
    products: [
      "647b2dccedfd6286c94198cb",
      "647b2dccedfd6286c94198cc",
      "647b2dccedfd6286c94198cd",
      "647b2dccedfd6286c94198ce",
    ],
    trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6e",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/aqJPC5GXuiVbedajRmdOVMCb7mC.jpg",
    production_year: 2022,
    name: "Katha Ankahee",
    description:
      "Katha, a single parent, is in need of funds for her son's medical treatment. She comes across Viaan, who offers help but his conditions put her in an awkward situation.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/uhXU0SMPMlemKGHmwbldM60qqmW.jpg",
    rate: 8.8,
    type: "series",
    category: ["drama", "romance"],
    products: [],
    trailer: "https://www.youtube.com/embed/hC4zyJlKWI0",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b78",
    },
    name: "Friends",
    description:
      "Six young people from New York City, on their own and struggling to survive in the real world, find the companionship, comfort and support they get from each other to be the perfect antidote to the pressures of life.",
    rate: 8.449,
    type: "series",
    category: ["comedy"],
    products: [
      "647b2dccedfd6286c94198a8",
      "647b2dccedfd6286c94198a9",
      "647b2dccedfd6286c94198aa",
      "647b2dccedfd6286c94198ab",
    ],
    production_year: 1994,
    trailer: "https://www.youtube.com/embed/sLisEEwYZvw",
    cover_image:
      "https://image.tmdb.org/t/p/w500/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/bRJOwllemPbE4JTQ0TtcVu9efff.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b7b",
    },
    name: "Peaky Blinders",
    description:
      "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
    rate: 8.547,
    type: "series",
    category: ["historical", "fiction", "crime", "drama", "thriller"],
    products: [
      "647b2dccedfd6286c94198ba",
      "647b2dccedfd6286c94198bb",
      "647b2dccedfd6286c94198bc",
      "647b2dccedfd6286c94198da",
    ],
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
    cover_image:
      "https://image.tmdb.org/t/p/w500/kfUWupX3phYp7AleZA2U1dmVcjX.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b56",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/uNyEVSPeAtJgUBehuQJ8WEFwatN.jpg",
    description:
      "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/zI3E2a3WYma5w8emI35mgq5Iurx.jpg",
    production_year: 1989,
    name: "The Simpsons",
    rate: 8.6,
    type: "series",
    category: ["animation", "comedy"],
    products: [
      "647b2dccedfd6286c94198c3",
      "647b2dccedfd6286c94198c4",
      "647b2dccedfd6286c94198c5",
    ],
    trailer: "https://www.youtube.com/embed/HRV6tMR-SSs",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b59",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/bT7pArYmcE91iCTec5H7pjrVbSu.jpg",
    description:
      "A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    production_year: 2015,
    name: "Narcos",
    rate: 8.7,
    type: "series",
    category: ["crime", "drama", "thriller"],
    products: [
      "647b2dccedfd6286c94198b6",
      "647b2dccedfd6286c94198b7",
      "647b2dccedfd6286c94198b8",
      "647b2dccedfd6286c94198b9",
    ],
    trailer: "https://www.youtube.com/embed/xl8zdCY-abw",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b63",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/90j5n0K8vxf5l3ACrKaWYBgQpst.jpg",
    description:
      "Dexter Morgan, a blood spatter pattern analyst for the Miami Metro Police also leads a secret life as a serial killer, hunting down criminals who have slipped through the cracks of justice.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/q8dWfc4JwQuv3HayIZeO84jAXED.jpg",
    production_year: 2006,
    name: "Dexter",
    rate: 8.4,
    type: "series",
    category: ["crime", "drama", "thriller", "suspenseful"],
    products: [],
    trailer: "https://www.youtube.com/embed/YQeUmSD1c3g",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6d",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/lcSvkJ2Rob3ICIOCUJahw3kgSYZ.jpg",
    production_year: 2023,
    name: "Woman in a Veil",
    description:
      "Jung Gyul Wool loses her vision and ability to walk because of her materialistic husband and his mistress. Despite her shortcomings, she hatches a plot to seek revenge.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/5ERr09UrnVm0hdXBeefNVtQMxI.jpg",
    rate: 5.4,
    type: "series",
    category: ["drama", "romance"],
    products: [],
    trailer: "https://www.youtube.com/embed/9BB4JCIU6D0",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b6f",
    },
    name: "The Umbrella Academy",
    type: "series",
    category: ["superhero", "comedy", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg",
    description:
      "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/7sqFEDDmK1hG5m92upolcfQxy7R.jpg",
    production_year: 2019,
    trailer: "https://www.youtube.com/embed/0DAmWHxeoKw",
    rate: 9.1,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b57",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/7w165QdHmJuTHSQwEyJDBDpuDT7.jpg",
    description:
      "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside out.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/ux7OfhhrXO4FzJtuew18ShiBLq7.jpg",
    production_year: 2005,
    name: "Prison Break",
    rate: 8.8,
    type: "series",
    category: ["drama", "action", "thriller", "crime"],
    products: [
      "647b2dccedfd6286c94198bd",
      "647b2dccedfd6286c94198be",
      "647b2dccedfd6286c94198bf",
    ],
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b5f",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/thLAoL6VeZGmCyDpCOeoxLvA8yS.jpg",
    description:
      "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/ut4PhX7OP2l2oJhrIUYWnt9pnQU.jpg",
    production_year: 2019,
    name: "The Boys",
    rate: 8.3,
    type: "series",
    category: ["superhero", "action", "drama", "black Comedy"],
    products: [],
    trailer: "https://www.youtube.com/embed/M1bhOaLV4FU",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b65",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
    production_year: 2023,
    name: "Terra e Paixão",
    description: "",
    poster_image:
      "https://image.tmdb.org/t/p/w500/voaKRrYExZNkf1E4FZExU7fTd8w.jpg",
    rate: 7,
    type: "series",
    category: ["drama", "romance", "historical"],
    products: [],
    trailer: "https://www.youtube.com/embed/OnGJA1s9yFA",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b69",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
    production_year: 2023,
    name: "Teri Meri Doriyaan",
    description:
      "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg",
    rate: 5,
    type: "series",
    category: ["romance", "drama", "musical"],
    products: [],
    trailer: "https://www.youtube.com/embed/1_T5LzlYDEI",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b75",
    },
    name: "House of Cards",
    type: "series",
    category: ["political", "drama"],
    products: [],
    videos: "test",
    poster_image:
      "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
    description:
      "Set in present day Washington, D.C., House of Cards is the story of Frank Underwood, a ruthless and cunning politician, and his wife Claire who will stop at nothing to conquer everything. This wicked political drama penetrates the shadowy world of greed, sex and corruption in modern D.C.",
    cover_image:
      "https://image.tmdb.org/t/p/w500/ex4kvQb0Ski5KL2fsnKQU2hV3oo.jpg",
    production_year: 2013,
    trailer: "https://www.youtube.com/embed/8QnMmpfKWvo",
    rate: 8,
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b68",
    },
    cover_image:
      "https://image.tmdb.org/t/p/w500/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg",
    production_year: 2023,
    name: "Batang Quiapo",
    description:
      "A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.",
    poster_image:
      "https://image.tmdb.org/t/p/w500/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg",
    rate: 6.2,
    type: "series",
    category: ["drama", "crime", "thriller"],
    products: [],
    trailer: "https://www.youtube.com/embed/A1ibTNJoUqk",
    videos: "test",
  },
  {
    _id: {
      $oid: "6480d1f16dac30a126565b7d",
    },
    name: "The Walking Dead",
    description:
      "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
    rate: 8.116,
    type: "series",
    category: ["horror ", "drama", "zombie ", "apocalypse"],
    products: [
      "647b2dccedfd6286c94198cf",
      "647b2dccedfd6286c94198d0",
      "647b2dccedfd6286c94198d1",
      "647b2dccedfd6286c94198d2",
      "647b2dccedfd6286c94198d3",
    ],
    production_year: 2010,
    trailer: "https://www.youtube.com/embed/sfAc2U20uyg",
    cover_image:
      "https://image.tmdb.org/t/p/w500/r7zUXadc1saFFSWz8lbUx7q9bkG.jpg",
    poster_image:
      "https://image.tmdb.org/t/p/w500/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg",
    videos: "test",
  },
];

let series = allMovies.filter((movie) => movie.type === "movie");
let seriesText = JSON.stringify(series);

let videos = [
  {
    season: 1,
    episodes: [
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689334343/videos/xpwhsdpciu2xacq1sxbh.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689256646/videos/meqcjhbzi8eb6ocgel3h.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689334343/videos/xpwhsdpciu2xacq1sxbh.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689256646/videos/meqcjhbzi8eb6ocgel3h.mp4",
    ],
  },
  {
    "season": 2,
    "episodes": [
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689334343/videos/xpwhsdpciu2xacq1sxbh.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689256646/videos/meqcjhbzi8eb6ocgel3h.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689334343/videos/xpwhsdpciu2xacq1sxbh.mp4",
      "https://res.cloudinary.com/djfej0qrv/video/upload/v1689256646/videos/meqcjhbzi8eb6ocgel3h.mp4",
    ],
  },
];

let movieVideos = [
    {
        season:1,
        episodes:["https://res.cloudinary.com/djfej0qrv/video/upload/v1689334343/videos/xpwhsdpciu2xacq1sxbh.mp4"]
    }
]

let vidText = JSON.stringify(movieVideos);
// console.log(vidText)
console.log(vidText)
