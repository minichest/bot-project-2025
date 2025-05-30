const storeItems = [
  {
    "id": 1,
    "name": "Astroworld Album",
    "artist": "Travis Scott",
    "price": 29854,
    "description": "Collector's edition album 'Astroworld' by Travis Scott.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 2,
    "name": "Birds in the Trap Sing McKnight Album",
    "artist": "Travis Scott",
    "price": 24613,
    "description": "Collector's edition album 'Birds in the Trap Sing McKnight' by Travis Scott.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 3,
    "name": "Rodeo Album",
    "artist": "Travis Scott",
    "price": 29736,
    "description": "Collector's edition album 'Rodeo' by Travis Scott.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 4,
    "name": "Huncho Jack, Jack Huncho Album",
    "artist": "Travis Scott",
    "price": 28096,
    "description": "Collector's edition album 'Huncho Jack, Jack Huncho' by Travis Scott.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 5,
    "name": "Days Before Rodeo Album",
    "artist": "Travis Scott",
    "price": 24159,
    "description": "Collector's edition album 'Days Before Rodeo' by Travis Scott.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 6,
    "name": "Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 31364,
    "description": "Official hoodie merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 7,
    "name": "Travis Scott T-Shirt",
    "artist": "Travis Scott",
    "price": 15345,
    "description": "Official t-shirt merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 8,
    "name": "Travis Scott Cap",
    "artist": "Travis Scott",
    "price": 9238,
    "description": "Official cap merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 9,
    "name": "Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 26944,
    "description": "Official vinyl merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 10,
    "name": "Travis Scott Poster",
    "artist": "Travis Scott",
    "price": 8496,
    "description": "Official poster merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 11,
    "name": "Travis Scott Signed Album",
    "artist": "Travis Scott",
    "price": 59900,
    "description": "Official signed album merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 12,
    "name": "Travis Scott Limited Edition Box Set",
    "artist": "Travis Scott",
    "price": 62608,
    "description": "Official limited edition box set merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 13,
    "name": "Travis Scott Sneakers",
    "artist": "Travis Scott",
    "price": 35631,
    "description": "Official sneakers merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 14,
    "name": "Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 16661,
    "description": "Official backpack merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 15,
    "name": "Travis Scott Phone Case",
    "artist": "Travis Scott",
    "price": 8438,
    "description": "Official phone case merch from Travis Scott.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 16,
    "name": "Take Care Album",
    "artist": "Drake",
    "price": 27703,
    "description": "Collector's edition album 'Take Care' by Drake.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 17,
    "name": "Nothing Was The Same Album",
    "artist": "Drake",
    "price": 36062,
    "description": "Collector's edition album 'Nothing Was The Same' by Drake.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 18,
    "name": "Scorpion Album",
    "artist": "Drake",
    "price": 25294,
    "description": "Collector's edition album 'Scorpion' by Drake.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 19,
    "name": "Certified Lover Boy Album",
    "artist": "Drake",
    "price": 23075,
    "description": "Collector's edition album 'Certified Lover Boy' by Drake.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 20,
    "name": "If You're Reading This It's Too Late Album",
    "artist": "Drake",
    "price": 32595,
    "description": "Collector's edition album 'If You're Reading This It's Too Late' by Drake.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 21,
    "name": "Drake Hoodie",
    "artist": "Drake",
    "price": 31640,
    "description": "Official hoodie merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 22,
    "name": "Drake T-Shirt",
    "artist": "Drake",
    "price": 23216,
    "description": "Official t-shirt merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 23,
    "name": "Drake Cap",
    "artist": "Drake",
    "price": 10032,
    "description": "Official cap merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 24,
    "name": "Drake Vinyl",
    "artist": "Drake",
    "price": 28403,
    "description": "Official vinyl merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 25,
    "name": "Drake Poster",
    "artist": "Drake",
    "price": 9758,
    "description": "Official poster merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 26,
    "name": "Drake Signed Album",
    "artist": "Drake",
    "price": 54121,
    "description": "Official signed album merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 27,
    "name": "Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 56791,
    "description": "Official limited edition box set merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 28,
    "name": "Drake Sneakers",
    "artist": "Drake",
    "price": 36622,
    "description": "Official sneakers merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 29,
    "name": "Drake Backpack",
    "artist": "Drake",
    "price": 27442,
    "description": "Official backpack merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 30,
    "name": "Drake Phone Case",
    "artist": "Drake",
    "price": 9957,
    "description": "Official phone case merch from Drake.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 31,
    "name": "good kid, m.A.A.d city Album",
    "artist": "Kendrick Lamar",
    "price": 29506,
    "description": "Collector's edition album 'good kid, m.A.A.d city' by Kendrick Lamar.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 32,
    "name": "To Pimp a Butterfly Album",
    "artist": "Kendrick Lamar",
    "price": 26948,
    "description": "Collector's edition album 'To Pimp a Butterfly' by Kendrick Lamar.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 33,
    "name": "DAMN. Album",
    "artist": "Kendrick Lamar",
    "price": 32048,
    "description": "Collector's edition album 'DAMN.' by Kendrick Lamar.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 34,
    "name": "Section.80 Album",
    "artist": "Kendrick Lamar",
    "price": 33328,
    "description": "Collector's edition album 'Section.80' by Kendrick Lamar.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 35,
    "name": "Mr. Morale & The Big Steppers Album",
    "artist": "Kendrick Lamar",
    "price": 36682,
    "description": "Collector's edition album 'Mr. Morale & The Big Steppers' by Kendrick Lamar.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 36,
    "name": "Kendrick Lamar Hoodie",
    "artist": "Kendrick Lamar",
    "price": 25330,
    "description": "Official hoodie merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 37,
    "name": "Kendrick Lamar T-Shirt",
    "artist": "Kendrick Lamar",
    "price": 14456,
    "description": "Official t-shirt merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 38,
    "name": "Kendrick Lamar Cap",
    "artist": "Kendrick Lamar",
    "price": 12372,
    "description": "Official cap merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 39,
    "name": "Kendrick Lamar Vinyl",
    "artist": "Kendrick Lamar",
    "price": 17427,
    "description": "Official vinyl merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 40,
    "name": "Kendrick Lamar Poster",
    "artist": "Kendrick Lamar",
    "price": 7071,
    "description": "Official poster merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 41,
    "name": "Kendrick Lamar Signed Album",
    "artist": "Kendrick Lamar",
    "price": 46392,
    "description": "Official signed album merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 42,
    "name": "Kendrick Lamar Limited Edition Box Set",
    "artist": "Kendrick Lamar",
    "price": 69134,
    "description": "Official limited edition box set merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 43,
    "name": "Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 37041,
    "description": "Official sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 44,
    "name": "Kendrick Lamar Backpack",
    "artist": "Kendrick Lamar",
    "price": 19765,
    "description": "Official backpack merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 45,
    "name": "Kendrick Lamar Phone Case",
    "artist": "Kendrick Lamar",
    "price": 10623,
    "description": "Official phone case merch from Kendrick Lamar.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 46,
    "name": "2014 Forest Hills Drive Album",
    "artist": "J. Cole",
    "price": 38360,
    "description": "Collector's edition album '2014 Forest Hills Drive' by J. Cole.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 47,
    "name": "KOD Album",
    "artist": "J. Cole",
    "price": 24731,
    "description": "Collector's edition album 'KOD' by J. Cole.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 48,
    "name": "Born Sinner Album",
    "artist": "J. Cole",
    "price": 30149,
    "description": "Collector's edition album 'Born Sinner' by J. Cole.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 49,
    "name": "The Off-Season Album",
    "artist": "J. Cole",
    "price": 30678,
    "description": "Collector's edition album 'The Off-Season' by J. Cole.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 50,
    "name": "Cole World: The Sideline Story Album",
    "artist": "J. Cole",
    "price": 30086,
    "description": "Collector's edition album 'Cole World: The Sideline Story' by J. Cole.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 51,
    "name": "J. Cole Hoodie",
    "artist": "J. Cole",
    "price": 18953,
    "description": "Official hoodie merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 52,
    "name": "J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 24783,
    "description": "Official t-shirt merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 53,
    "name": "J. Cole Cap",
    "artist": "J. Cole",
    "price": 9131,
    "description": "Official cap merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 54,
    "name": "J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 24801,
    "description": "Official vinyl merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 55,
    "name": "J. Cole Poster",
    "artist": "J. Cole",
    "price": 8507,
    "description": "Official poster merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 56,
    "name": "J. Cole Signed Album",
    "artist": "J. Cole",
    "price": 49121,
    "description": "Official signed album merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 57,
    "name": "J. Cole Limited Edition Box Set",
    "artist": "J. Cole",
    "price": 65805,
    "description": "Official limited edition box set merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 58,
    "name": "J. Cole Sneakers",
    "artist": "J. Cole",
    "price": 40255,
    "description": "Official sneakers merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 59,
    "name": "J. Cole Backpack",
    "artist": "J. Cole",
    "price": 25172,
    "description": "Official backpack merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 60,
    "name": "J. Cole Phone Case",
    "artist": "J. Cole",
    "price": 12291,
    "description": "Official phone case merch from J. Cole.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 61,
    "name": "The Eminem Show Album",
    "artist": "Eminem",
    "price": 37754,
    "description": "Collector's edition album 'The Eminem Show' by Eminem.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 62,
    "name": "Recovery Album",
    "artist": "Eminem",
    "price": 26032,
    "description": "Collector's edition album 'Recovery' by Eminem.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 63,
    "name": "Marshall Mathers LP Album",
    "artist": "Eminem",
    "price": 25102,
    "description": "Collector's edition album 'Marshall Mathers LP' by Eminem.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 64,
    "name": "Curtain Call Album",
    "artist": "Eminem",
    "price": 32582,
    "description": "Collector's edition album 'Curtain Call' by Eminem.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 65,
    "name": "Kamikaze Album",
    "artist": "Eminem",
    "price": 27334,
    "description": "Collector's edition album 'Kamikaze' by Eminem.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 66,
    "name": "Eminem Hoodie",
    "artist": "Eminem",
    "price": 26454,
    "description": "Official hoodie merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 67,
    "name": "Eminem T-Shirt",
    "artist": "Eminem",
    "price": 17098,
    "description": "Official t-shirt merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 68,
    "name": "Eminem Cap",
    "artist": "Eminem",
    "price": 15141,
    "description": "Official cap merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 69,
    "name": "Eminem Vinyl",
    "artist": "Eminem",
    "price": 25959,
    "description": "Official vinyl merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 70,
    "name": "Eminem Poster",
    "artist": "Eminem",
    "price": 8728,
    "description": "Official poster merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 71,
    "name": "Eminem Signed Album",
    "artist": "Eminem",
    "price": 51847,
    "description": "Official signed album merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 72,
    "name": "Eminem Limited Edition Box Set",
    "artist": "Eminem",
    "price": 48479,
    "description": "Official limited edition box set merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 73,
    "name": "Eminem Sneakers",
    "artist": "Eminem",
    "price": 42290,
    "description": "Official sneakers merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 74,
    "name": "Eminem Backpack",
    "artist": "Eminem",
    "price": 27883,
    "description": "Official backpack merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 75,
    "name": "Eminem Phone Case",
    "artist": "Eminem",
    "price": 7998,
    "description": "Official phone case merch from Eminem.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 76,
    "name": "The College Dropout Album",
    "artist": "Kanye West",
    "price": 29180,
    "description": "Collector's edition album 'The College Dropout' by Kanye West.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 77,
    "name": "Graduation Album",
    "artist": "Kanye West",
    "price": 36066,
    "description": "Collector's edition album 'Graduation' by Kanye West.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 78,
    "name": "Yeezus Album",
    "artist": "Kanye West",
    "price": 38201,
    "description": "Collector's edition album 'Yeezus' by Kanye West.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 79,
    "name": "My Beautiful Dark Twisted Fantasy Album",
    "artist": "Kanye West",
    "price": 37984,
    "description": "Collector's edition album 'My Beautiful Dark Twisted Fantasy' by Kanye West.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 80,
    "name": "Donda Album",
    "artist": "Kanye West",
    "price": 22750,
    "description": "Collector's edition album 'Donda' by Kanye West.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 81,
    "name": "Kanye West Hoodie",
    "artist": "Kanye West",
    "price": 20555,
    "description": "Official hoodie merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 82,
    "name": "Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 20621,
    "description": "Official t-shirt merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 83,
    "name": "Kanye West Cap",
    "artist": "Kanye West",
    "price": 17963,
    "description": "Official cap merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 84,
    "name": "Kanye West Vinyl",
    "artist": "Kanye West",
    "price": 19864,
    "description": "Official vinyl merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 85,
    "name": "Kanye West Poster",
    "artist": "Kanye West",
    "price": 9291,
    "description": "Official poster merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 86,
    "name": "Kanye West Signed Album",
    "artist": "Kanye West",
    "price": 51963,
    "description": "Official signed album merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 87,
    "name": "Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 54988,
    "description": "Official limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 88,
    "name": "Kanye West Sneakers",
    "artist": "Kanye West",
    "price": 37085,
    "description": "Official sneakers merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 89,
    "name": "Kanye West Backpack",
    "artist": "Kanye West",
    "price": 26581,
    "description": "Official backpack merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 90,
    "name": "Kanye West Phone Case",
    "artist": "Kanye West",
    "price": 8740,
    "description": "Official phone case merch from Kanye West.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 91,
    "name": "25 Album",
    "artist": "Adele",
    "price": 23516,
    "description": "Collector's edition album '25' by Adele.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 92,
    "name": "21 Album",
    "artist": "Adele",
    "price": 34041,
    "description": "Collector's edition album '21' by Adele.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 93,
    "name": "19 Album",
    "artist": "Adele",
    "price": 39740,
    "description": "Collector's edition album '19' by Adele.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 94,
    "name": "30 Album",
    "artist": "Adele",
    "price": 38532,
    "description": "Collector's edition album '30' by Adele.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 95,
    "name": "Skyfall (Single) Album",
    "artist": "Adele",
    "price": 31188,
    "description": "Collector's edition album 'Skyfall (Single)' by Adele.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 96,
    "name": "Adele Hoodie",
    "artist": "Adele",
    "price": 25508,
    "description": "Official hoodie merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 97,
    "name": "Adele T-Shirt",
    "artist": "Adele",
    "price": 21278,
    "description": "Official t-shirt merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 98,
    "name": "Adele Cap",
    "artist": "Adele",
    "price": 10245,
    "description": "Official cap merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 99,
    "name": "Adele Vinyl",
    "artist": "Adele",
    "price": 27028,
    "description": "Official vinyl merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 100,
    "name": "Adele Poster",
    "artist": "Adele",
    "price": 11659,
    "description": "Official poster merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 101,
    "name": "Adele Signed Album",
    "artist": "Adele",
    "price": 35105,
    "description": "Official signed album merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 102,
    "name": "Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 52581,
    "description": "Official limited edition box set merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 103,
    "name": "Adele Sneakers",
    "artist": "Adele",
    "price": 42193,
    "description": "Official sneakers merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 104,
    "name": "Adele Backpack",
    "artist": "Adele",
    "price": 26077,
    "description": "Official backpack merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 105,
    "name": "Adele Phone Case",
    "artist": "Adele",
    "price": 11190,
    "description": "Official phone case merch from Adele.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 106,
    "name": "Fearless Album",
    "artist": "Taylor Swift",
    "price": 25133,
    "description": "Collector's edition album 'Fearless' by Taylor Swift.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 107,
    "name": "1989 Album",
    "artist": "Taylor Swift",
    "price": 23766,
    "description": "Collector's edition album '1989' by Taylor Swift.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 108,
    "name": "Red Album",
    "artist": "Taylor Swift",
    "price": 28770,
    "description": "Collector's edition album 'Red' by Taylor Swift.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 109,
    "name": "Reputation Album",
    "artist": "Taylor Swift",
    "price": 32767,
    "description": "Collector's edition album 'Reputation' by Taylor Swift.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 110,
    "name": "Lover Album",
    "artist": "Taylor Swift",
    "price": 39382,
    "description": "Collector's edition album 'Lover' by Taylor Swift.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 111,
    "name": "Taylor Swift Hoodie",
    "artist": "Taylor Swift",
    "price": 30732,
    "description": "Official hoodie merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 112,
    "name": "Taylor Swift T-Shirt",
    "artist": "Taylor Swift",
    "price": 20624,
    "description": "Official t-shirt merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 113,
    "name": "Taylor Swift Cap",
    "artist": "Taylor Swift",
    "price": 10858,
    "description": "Official cap merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 114,
    "name": "Taylor Swift Vinyl",
    "artist": "Taylor Swift",
    "price": 15342,
    "description": "Official vinyl merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 115,
    "name": "Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 7765,
    "description": "Official poster merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 116,
    "name": "Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 54229,
    "description": "Official signed album merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 117,
    "name": "Taylor Swift Limited Edition Box Set",
    "artist": "Taylor Swift",
    "price": 65478,
    "description": "Official limited edition box set merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 118,
    "name": "Taylor Swift Sneakers",
    "artist": "Taylor Swift",
    "price": 30140,
    "description": "Official sneakers merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 119,
    "name": "Taylor Swift Backpack",
    "artist": "Taylor Swift",
    "price": 23384,
    "description": "Official backpack merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 120,
    "name": "Taylor Swift Phone Case",
    "artist": "Taylor Swift",
    "price": 7957,
    "description": "Official phone case merch from Taylor Swift.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 121,
    "name": "Lemonade Album",
    "artist": "Beyonc\u00e9",
    "price": 32250,
    "description": "Collector's edition album 'Lemonade' by Beyonc\u00e9.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 122,
    "name": "Beyonc\u00e9 Album",
    "artist": "Beyonc\u00e9",
    "price": 34788,
    "description": "Collector's edition album 'Beyonc\u00e9' by Beyonc\u00e9.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 123,
    "name": "4 Album",
    "artist": "Beyonc\u00e9",
    "price": 30778,
    "description": "Collector's edition album '4' by Beyonc\u00e9.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 124,
    "name": "I Am... Sasha Fierce Album",
    "artist": "Beyonc\u00e9",
    "price": 38883,
    "description": "Collector's edition album 'I Am... Sasha Fierce' by Beyonc\u00e9.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 125,
    "name": "Dangerously in Love Album",
    "artist": "Beyonc\u00e9",
    "price": 34244,
    "description": "Collector's edition album 'Dangerously in Love' by Beyonc\u00e9.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 126,
    "name": "Beyonc\u00e9 Hoodie",
    "artist": "Beyonc\u00e9",
    "price": 29828,
    "description": "Official hoodie merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 127,
    "name": "Beyonc\u00e9 T-Shirt",
    "artist": "Beyonc\u00e9",
    "price": 13597,
    "description": "Official t-shirt merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 128,
    "name": "Beyonc\u00e9 Cap",
    "artist": "Beyonc\u00e9",
    "price": 8971,
    "description": "Official cap merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 129,
    "name": "Beyonc\u00e9 Vinyl",
    "artist": "Beyonc\u00e9",
    "price": 27462,
    "description": "Official vinyl merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 130,
    "name": "Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 9093,
    "description": "Official poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 131,
    "name": "Beyonc\u00e9 Signed Album",
    "artist": "Beyonc\u00e9",
    "price": 46424,
    "description": "Official signed album merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 132,
    "name": "Beyonc\u00e9 Limited Edition Box Set",
    "artist": "Beyonc\u00e9",
    "price": 41478,
    "description": "Official limited edition box set merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 133,
    "name": "Beyonc\u00e9 Sneakers",
    "artist": "Beyonc\u00e9",
    "price": 26620,
    "description": "Official sneakers merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 134,
    "name": "Beyonc\u00e9 Backpack",
    "artist": "Beyonc\u00e9",
    "price": 24234,
    "description": "Official backpack merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 135,
    "name": "Beyonc\u00e9 Phone Case",
    "artist": "Beyonc\u00e9",
    "price": 11220,
    "description": "Official phone case merch from Beyonc\u00e9.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 136,
    "name": "After Hours Album",
    "artist": "The Weeknd",
    "price": 33791,
    "description": "Collector's edition album 'After Hours' by The Weeknd.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 137,
    "name": "Starboy Album",
    "artist": "The Weeknd",
    "price": 29174,
    "description": "Collector's edition album 'Starboy' by The Weeknd.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 138,
    "name": "Beauty Behind the Madness Album",
    "artist": "The Weeknd",
    "price": 28103,
    "description": "Collector's edition album 'Beauty Behind the Madness' by The Weeknd.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 139,
    "name": "Kiss Land Album",
    "artist": "The Weeknd",
    "price": 38856,
    "description": "Collector's edition album 'Kiss Land' by The Weeknd.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 140,
    "name": "Trilogy Album",
    "artist": "The Weeknd",
    "price": 33818,
    "description": "Collector's edition album 'Trilogy' by The Weeknd.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 141,
    "name": "The Weeknd Hoodie",
    "artist": "The Weeknd",
    "price": 18117,
    "description": "Official hoodie merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 142,
    "name": "The Weeknd T-Shirt",
    "artist": "The Weeknd",
    "price": 22509,
    "description": "Official t-shirt merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 143,
    "name": "The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 8192,
    "description": "Official cap merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 144,
    "name": "The Weeknd Vinyl",
    "artist": "The Weeknd",
    "price": 23597,
    "description": "Official vinyl merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 145,
    "name": "The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 7584,
    "description": "Official poster merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 146,
    "name": "The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 59765,
    "description": "Official signed album merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 147,
    "name": "The Weeknd Limited Edition Box Set",
    "artist": "The Weeknd",
    "price": 63537,
    "description": "Official limited edition box set merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 148,
    "name": "The Weeknd Sneakers",
    "artist": "The Weeknd",
    "price": 33135,
    "description": "Official sneakers merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 149,
    "name": "The Weeknd Backpack",
    "artist": "The Weeknd",
    "price": 17165,
    "description": "Official backpack merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 150,
    "name": "The Weeknd Phone Case",
    "artist": "The Weeknd",
    "price": 8542,
    "description": "Official phone case merch from The Weeknd.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 151,
    "name": "Divide Album",
    "artist": "Ed Sheeran",
    "price": 32411,
    "description": "Collector's edition album 'Divide' by Ed Sheeran.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 152,
    "name": "Multiply Album",
    "artist": "Ed Sheeran",
    "price": 22184,
    "description": "Collector's edition album 'Multiply' by Ed Sheeran.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 153,
    "name": "Plus Album",
    "artist": "Ed Sheeran",
    "price": 33904,
    "description": "Collector's edition album 'Plus' by Ed Sheeran.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 154,
    "name": "Equals Album",
    "artist": "Ed Sheeran",
    "price": 30127,
    "description": "Collector's edition album 'Equals' by Ed Sheeran.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 155,
    "name": "No.6 Collaborations Project Album",
    "artist": "Ed Sheeran",
    "price": 36947,
    "description": "Collector's edition album 'No.6 Collaborations Project' by Ed Sheeran.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 156,
    "name": "Ed Sheeran Hoodie",
    "artist": "Ed Sheeran",
    "price": 33779,
    "description": "Official hoodie merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 157,
    "name": "Ed Sheeran T-Shirt",
    "artist": "Ed Sheeran",
    "price": 23658,
    "description": "Official t-shirt merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 158,
    "name": "Ed Sheeran Cap",
    "artist": "Ed Sheeran",
    "price": 10820,
    "description": "Official cap merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 159,
    "name": "Ed Sheeran Vinyl",
    "artist": "Ed Sheeran",
    "price": 29546,
    "description": "Official vinyl merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 160,
    "name": "Ed Sheeran Poster",
    "artist": "Ed Sheeran",
    "price": 10177,
    "description": "Official poster merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 161,
    "name": "Ed Sheeran Signed Album",
    "artist": "Ed Sheeran",
    "price": 45660,
    "description": "Official signed album merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 162,
    "name": "Ed Sheeran Limited Edition Box Set",
    "artist": "Ed Sheeran",
    "price": 42008,
    "description": "Official limited edition box set merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 163,
    "name": "Ed Sheeran Sneakers",
    "artist": "Ed Sheeran",
    "price": 29890,
    "description": "Official sneakers merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 164,
    "name": "Ed Sheeran Backpack",
    "artist": "Ed Sheeran",
    "price": 18462,
    "description": "Official backpack merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 165,
    "name": "Ed Sheeran Phone Case",
    "artist": "Ed Sheeran",
    "price": 8400,
    "description": "Official phone case merch from Ed Sheeran.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 166,
    "name": "When We All Fall Asleep, Where Do We Go? Album",
    "artist": "Billie Eilish",
    "price": 25178,
    "description": "Collector's edition album 'When We All Fall Asleep, Where Do We Go?' by Billie Eilish.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 167,
    "name": "Happier Than Ever Album",
    "artist": "Billie Eilish",
    "price": 25623,
    "description": "Collector's edition album 'Happier Than Ever' by Billie Eilish.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 168,
    "name": "Don't Smile at Me Album",
    "artist": "Billie Eilish",
    "price": 31268,
    "description": "Collector's edition album 'Don't Smile at Me' by Billie Eilish.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 169,
    "name": "Ocean Eyes Album",
    "artist": "Billie Eilish",
    "price": 37304,
    "description": "Collector's edition album 'Ocean Eyes' by Billie Eilish.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 170,
    "name": "Everything I Wanted Album",
    "artist": "Billie Eilish",
    "price": 36336,
    "description": "Collector's edition album 'Everything I Wanted' by Billie Eilish.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 171,
    "name": "Billie Eilish Hoodie",
    "artist": "Billie Eilish",
    "price": 19344,
    "description": "Official hoodie merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 172,
    "name": "Billie Eilish T-Shirt",
    "artist": "Billie Eilish",
    "price": 15116,
    "description": "Official t-shirt merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 173,
    "name": "Billie Eilish Cap",
    "artist": "Billie Eilish",
    "price": 8893,
    "description": "Official cap merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 174,
    "name": "Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 18001,
    "description": "Official vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 175,
    "name": "Billie Eilish Poster",
    "artist": "Billie Eilish",
    "price": 11211,
    "description": "Official poster merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 176,
    "name": "Billie Eilish Signed Album",
    "artist": "Billie Eilish",
    "price": 54826,
    "description": "Official signed album merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 177,
    "name": "Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 64203,
    "description": "Official limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 178,
    "name": "Billie Eilish Sneakers",
    "artist": "Billie Eilish",
    "price": 28391,
    "description": "Official sneakers merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 179,
    "name": "Billie Eilish Backpack",
    "artist": "Billie Eilish",
    "price": 24996,
    "description": "Official backpack merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 180,
    "name": "Billie Eilish Phone Case",
    "artist": "Billie Eilish",
    "price": 9162,
    "description": "Official phone case merch from Billie Eilish.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 181,
    "name": "Stoney Album",
    "artist": "Post Malone",
    "price": 38421,
    "description": "Collector's edition album 'Stoney' by Post Malone.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 182,
    "name": "Beerbongs & Bentleys Album",
    "artist": "Post Malone",
    "price": 26448,
    "description": "Collector's edition album 'Beerbongs & Bentleys' by Post Malone.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 183,
    "name": "Hollywood's Bleeding Album",
    "artist": "Post Malone",
    "price": 38004,
    "description": "Collector's edition album 'Hollywood's Bleeding' by Post Malone.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 184,
    "name": "Twelve Carat Toothache Album",
    "artist": "Post Malone",
    "price": 27379,
    "description": "Collector's edition album 'Twelve Carat Toothache' by Post Malone.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 185,
    "name": "Circles Album",
    "artist": "Post Malone",
    "price": 36560,
    "description": "Collector's edition album 'Circles' by Post Malone.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 186,
    "name": "Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 21043,
    "description": "Official hoodie merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 187,
    "name": "Post Malone T-Shirt",
    "artist": "Post Malone",
    "price": 20297,
    "description": "Official t-shirt merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 188,
    "name": "Post Malone Cap",
    "artist": "Post Malone",
    "price": 12433,
    "description": "Official cap merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 189,
    "name": "Post Malone Vinyl",
    "artist": "Post Malone",
    "price": 16013,
    "description": "Official vinyl merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 190,
    "name": "Post Malone Poster",
    "artist": "Post Malone",
    "price": 11605,
    "description": "Official poster merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 191,
    "name": "Post Malone Signed Album",
    "artist": "Post Malone",
    "price": 39962,
    "description": "Official signed album merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 192,
    "name": "Post Malone Limited Edition Box Set",
    "artist": "Post Malone",
    "price": 67494,
    "description": "Official limited edition box set merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 193,
    "name": "Post Malone Sneakers",
    "artist": "Post Malone",
    "price": 40841,
    "description": "Official sneakers merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 194,
    "name": "Post Malone Backpack",
    "artist": "Post Malone",
    "price": 16174,
    "description": "Official backpack merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 195,
    "name": "Post Malone Phone Case",
    "artist": "Post Malone",
    "price": 9203,
    "description": "Official phone case merch from Post Malone.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 196,
    "name": "The Blueprint Album",
    "artist": "Jay-Z",
    "price": 31580,
    "description": "Collector's edition album 'The Blueprint' by Jay-Z.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 197,
    "name": "Reasonable Doubt Album",
    "artist": "Jay-Z",
    "price": 23952,
    "description": "Collector's edition album 'Reasonable Doubt' by Jay-Z.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 198,
    "name": "Magna Carta Holy Grail Album",
    "artist": "Jay-Z",
    "price": 29086,
    "description": "Collector's edition album 'Magna Carta Holy Grail' by Jay-Z.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 199,
    "name": "4:44 Album",
    "artist": "Jay-Z",
    "price": 23876,
    "description": "Collector's edition album '4:44' by Jay-Z.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 200,
    "name": "Kingdom Come Album",
    "artist": "Jay-Z",
    "price": 27720,
    "description": "Collector's edition album 'Kingdom Come' by Jay-Z.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 201,
    "name": "Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 23131,
    "description": "Official hoodie merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 202,
    "name": "Jay-Z T-Shirt",
    "artist": "Jay-Z",
    "price": 16613,
    "description": "Official t-shirt merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 203,
    "name": "Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 9255,
    "description": "Official cap merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 204,
    "name": "Jay-Z Vinyl",
    "artist": "Jay-Z",
    "price": 19219,
    "description": "Official vinyl merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 205,
    "name": "Jay-Z Poster",
    "artist": "Jay-Z",
    "price": 11104,
    "description": "Official poster merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 206,
    "name": "Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 51566,
    "description": "Official signed album merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 207,
    "name": "Jay-Z Limited Edition Box Set",
    "artist": "Jay-Z",
    "price": 69055,
    "description": "Official limited edition box set merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 208,
    "name": "Jay-Z Sneakers",
    "artist": "Jay-Z",
    "price": 40388,
    "description": "Official sneakers merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 209,
    "name": "Jay-Z Backpack",
    "artist": "Jay-Z",
    "price": 17075,
    "description": "Official backpack merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 210,
    "name": "Jay-Z Phone Case",
    "artist": "Jay-Z",
    "price": 11396,
    "description": "Official phone case merch from Jay-Z.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 211,
    "name": "Tha Carter III Album",
    "artist": "Lil Wayne",
    "price": 33410,
    "description": "Collector's edition album 'Tha Carter III' by Lil Wayne.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 212,
    "name": "Tha Carter IV Album",
    "artist": "Lil Wayne",
    "price": 27012,
    "description": "Collector's edition album 'Tha Carter IV' by Lil Wayne.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 213,
    "name": "I Am Not a Human Being Album",
    "artist": "Lil Wayne",
    "price": 31561,
    "description": "Collector's edition album 'I Am Not a Human Being' by Lil Wayne.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 214,
    "name": "Tha Carter V Album",
    "artist": "Lil Wayne",
    "price": 25184,
    "description": "Collector's edition album 'Tha Carter V' by Lil Wayne.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 215,
    "name": "Funeral Album",
    "artist": "Lil Wayne",
    "price": 31851,
    "description": "Collector's edition album 'Funeral' by Lil Wayne.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 216,
    "name": "Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 31242,
    "description": "Official hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 217,
    "name": "Lil Wayne T-Shirt",
    "artist": "Lil Wayne",
    "price": 14860,
    "description": "Official t-shirt merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 218,
    "name": "Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 9268,
    "description": "Official cap merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 219,
    "name": "Lil Wayne Vinyl",
    "artist": "Lil Wayne",
    "price": 25076,
    "description": "Official vinyl merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 220,
    "name": "Lil Wayne Poster",
    "artist": "Lil Wayne",
    "price": 10549,
    "description": "Official poster merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 221,
    "name": "Lil Wayne Signed Album",
    "artist": "Lil Wayne",
    "price": 40286,
    "description": "Official signed album merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 222,
    "name": "Lil Wayne Limited Edition Box Set",
    "artist": "Lil Wayne",
    "price": 55661,
    "description": "Official limited edition box set merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 223,
    "name": "Lil Wayne Sneakers",
    "artist": "Lil Wayne",
    "price": 29258,
    "description": "Official sneakers merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 224,
    "name": "Lil Wayne Backpack",
    "artist": "Lil Wayne",
    "price": 27855,
    "description": "Official backpack merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 225,
    "name": "Lil Wayne Phone Case",
    "artist": "Lil Wayne",
    "price": 12305,
    "description": "Official phone case merch from Lil Wayne.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 226,
    "name": "Pink Friday Album",
    "artist": "Nicki Minaj",
    "price": 28984,
    "description": "Collector's edition album 'Pink Friday' by Nicki Minaj.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 227,
    "name": "Roman Reloaded Album",
    "artist": "Nicki Minaj",
    "price": 23781,
    "description": "Collector's edition album 'Roman Reloaded' by Nicki Minaj.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 228,
    "name": "Queen Album",
    "artist": "Nicki Minaj",
    "price": 30450,
    "description": "Collector's edition album 'Queen' by Nicki Minaj.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 229,
    "name": "Beam Me Up Scotty Album",
    "artist": "Nicki Minaj",
    "price": 34840,
    "description": "Collector's edition album 'Beam Me Up Scotty' by Nicki Minaj.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 230,
    "name": "The Pinkprint Album",
    "artist": "Nicki Minaj",
    "price": 29922,
    "description": "Collector's edition album 'The Pinkprint' by Nicki Minaj.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 231,
    "name": "Nicki Minaj Hoodie",
    "artist": "Nicki Minaj",
    "price": 21027,
    "description": "Official hoodie merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 232,
    "name": "Nicki Minaj T-Shirt",
    "artist": "Nicki Minaj",
    "price": 18228,
    "description": "Official t-shirt merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 233,
    "name": "Nicki Minaj Cap",
    "artist": "Nicki Minaj",
    "price": 10316,
    "description": "Official cap merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 234,
    "name": "Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 15041,
    "description": "Official vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 235,
    "name": "Nicki Minaj Poster",
    "artist": "Nicki Minaj",
    "price": 8701,
    "description": "Official poster merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 236,
    "name": "Nicki Minaj Signed Album",
    "artist": "Nicki Minaj",
    "price": 55452,
    "description": "Official signed album merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 237,
    "name": "Nicki Minaj Limited Edition Box Set",
    "artist": "Nicki Minaj",
    "price": 56523,
    "description": "Official limited edition box set merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 238,
    "name": "Nicki Minaj Sneakers",
    "artist": "Nicki Minaj",
    "price": 33365,
    "description": "Official sneakers merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 239,
    "name": "Nicki Minaj Backpack",
    "artist": "Nicki Minaj",
    "price": 17986,
    "description": "Official backpack merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 240,
    "name": "Nicki Minaj Phone Case",
    "artist": "Nicki Minaj",
    "price": 8259,
    "description": "Official phone case merch from Nicki Minaj.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 241,
    "name": "2001 Album",
    "artist": "Dr. Dre",
    "price": 39340,
    "description": "Collector's edition album '2001' by Dr. Dre.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 242,
    "name": "The Chronic Album",
    "artist": "Dr. Dre",
    "price": 32541,
    "description": "Collector's edition album 'The Chronic' by Dr. Dre.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 243,
    "name": "Compton Album",
    "artist": "Dr. Dre",
    "price": 25517,
    "description": "Collector's edition album 'Compton' by Dr. Dre.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 244,
    "name": "Detox Album",
    "artist": "Dr. Dre",
    "price": 39019,
    "description": "Collector's edition album 'Detox' by Dr. Dre.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 245,
    "name": "Dr. Dre Presents The Aftermath Album",
    "artist": "Dr. Dre",
    "price": 31387,
    "description": "Collector's edition album 'Dr. Dre Presents The Aftermath' by Dr. Dre.",
    "emoji": "\ud83d\udcbf",
    "genre": "Hip-Hop"
  },
  {
    "id": 246,
    "name": "Dr. Dre Hoodie",
    "artist": "Dr. Dre",
    "price": 18400,
    "description": "Official hoodie merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 247,
    "name": "Dr. Dre T-Shirt",
    "artist": "Dr. Dre",
    "price": 19742,
    "description": "Official t-shirt merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 248,
    "name": "Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 14851,
    "description": "Official cap merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 249,
    "name": "Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 26938,
    "description": "Official vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 250,
    "name": "Dr. Dre Poster",
    "artist": "Dr. Dre",
    "price": 11205,
    "description": "Official poster merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 251,
    "name": "Dr. Dre Signed Album",
    "artist": "Dr. Dre",
    "price": 36452,
    "description": "Official signed album merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 252,
    "name": "Dr. Dre Limited Edition Box Set",
    "artist": "Dr. Dre",
    "price": 54596,
    "description": "Official limited edition box set merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 253,
    "name": "Dr. Dre Sneakers",
    "artist": "Dr. Dre",
    "price": 31012,
    "description": "Official sneakers merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 254,
    "name": "Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 26844,
    "description": "Official backpack merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 255,
    "name": "Dr. Dre Phone Case",
    "artist": "Dr. Dre",
    "price": 9448,
    "description": "Official phone case merch from Dr. Dre.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Hip-Hop"
  },
  {
    "id": 256,
    "name": "Anti Album",
    "artist": "Rihanna",
    "price": 35073,
    "description": "Collector's edition album 'Anti' by Rihanna.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 257,
    "name": "Loud Album",
    "artist": "Rihanna",
    "price": 24570,
    "description": "Collector's edition album 'Loud' by Rihanna.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 258,
    "name": "Good Girl Gone Bad Album",
    "artist": "Rihanna",
    "price": 32598,
    "description": "Collector's edition album 'Good Girl Gone Bad' by Rihanna.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 259,
    "name": "Unapologetic Album",
    "artist": "Rihanna",
    "price": 38788,
    "description": "Collector's edition album 'Unapologetic' by Rihanna.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 260,
    "name": "Rated R Album",
    "artist": "Rihanna",
    "price": 38578,
    "description": "Collector's edition album 'Rated R' by Rihanna.",
    "emoji": "\ud83d\udcbf",
    "genre": "Pop"
  },
  {
    "id": 261,
    "name": "Rihanna Hoodie",
    "artist": "Rihanna",
    "price": 27168,
    "description": "Official hoodie merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 262,
    "name": "Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 18694,
    "description": "Official t-shirt merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 263,
    "name": "Rihanna Cap",
    "artist": "Rihanna",
    "price": 10368,
    "description": "Official cap merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 264,
    "name": "Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 24509,
    "description": "Official vinyl merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 265,
    "name": "Rihanna Poster",
    "artist": "Rihanna",
    "price": 9148,
    "description": "Official poster merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 266,
    "name": "Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 58112,
    "description": "Official signed album merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 267,
    "name": "Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 49815,
    "description": "Official limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 268,
    "name": "Rihanna Sneakers",
    "artist": "Rihanna",
    "price": 38876,
    "description": "Official sneakers merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 269,
    "name": "Rihanna Backpack",
    "artist": "Rihanna",
    "price": 16803,
    "description": "Official backpack merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 270,
    "name": "Rihanna Phone Case",
    "artist": "Rihanna",
    "price": 7772,
    "description": "Official phone case merch from Rihanna.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Pop"
  },
  {
    "id": 271,
    "name": "American Teen Album",
    "artist": "Khalid",
    "price": 30407,
    "description": "Collector's edition album 'American Teen' by Khalid.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 272,
    "name": "Suncity Album",
    "artist": "Khalid",
    "price": 25505,
    "description": "Collector's edition album 'Suncity' by Khalid.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 273,
    "name": "Free Spirit Album",
    "artist": "Khalid",
    "price": 22951,
    "description": "Collector's edition album 'Free Spirit' by Khalid.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 274,
    "name": "Scenic Drive Album",
    "artist": "Khalid",
    "price": 34464,
    "description": "Collector's edition album 'Scenic Drive' by Khalid.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 275,
    "name": "Suncity Deluxe Album",
    "artist": "Khalid",
    "price": 32718,
    "description": "Collector's edition album 'Suncity Deluxe' by Khalid.",
    "emoji": "\ud83d\udcbf",
    "genre": "R&B"
  },
  {
    "id": 276,
    "name": "Khalid Hoodie",
    "artist": "Khalid",
    "price": 19868,
    "description": "Official hoodie merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 277,
    "name": "Khalid T-Shirt",
    "artist": "Khalid",
    "price": 15188,
    "description": "Official t-shirt merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 278,
    "name": "Khalid Cap",
    "artist": "Khalid",
    "price": 12049,
    "description": "Official cap merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 279,
    "name": "Khalid Vinyl",
    "artist": "Khalid",
    "price": 19436,
    "description": "Official vinyl merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 280,
    "name": "Khalid Poster",
    "artist": "Khalid",
    "price": 9175,
    "description": "Official poster merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 281,
    "name": "Khalid Signed Album",
    "artist": "Khalid",
    "price": 41830,
    "description": "Official signed album merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 282,
    "name": "Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 52717,
    "description": "Official limited edition box set merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 283,
    "name": "Khalid Sneakers",
    "artist": "Khalid",
    "price": 42047,
    "description": "Official sneakers merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 284,
    "name": "Khalid Backpack",
    "artist": "Khalid",
    "price": 22653,
    "description": "Official backpack merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 285,
    "name": "Khalid Phone Case",
    "artist": "Khalid",
    "price": 9322,
    "description": "Official phone case merch from Khalid.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "R&B"
  },
  {
    "id": 286,
    "name": "Night Visions Album",
    "artist": "Imagine Dragons",
    "price": 34253,
    "description": "Collector's edition album 'Night Visions' by Imagine Dragons.",
    "emoji": "\ud83d\udcbf",
    "genre": "Rock"
  },
  {
    "id": 287,
    "name": "Smoke + Mirrors Album",
    "artist": "Imagine Dragons",
    "price": 25172,
    "description": "Collector's edition album 'Smoke + Mirrors' by Imagine Dragons.",
    "emoji": "\ud83d\udcbf",
    "genre": "Rock"
  },
  {
    "id": 288,
    "name": "Evolve Album",
    "artist": "Imagine Dragons",
    "price": 35742,
    "description": "Collector's edition album 'Evolve' by Imagine Dragons.",
    "emoji": "\ud83d\udcbf",
    "genre": "Rock"
  },
  {
    "id": 289,
    "name": "Origins Album",
    "artist": "Imagine Dragons",
    "price": 32071,
    "description": "Collector's edition album 'Origins' by Imagine Dragons.",
    "emoji": "\ud83d\udcbf",
    "genre": "Rock"
  },
  {
    "id": 290,
    "name": "Mercury \u2013 Act 1 Album",
    "artist": "Imagine Dragons",
    "price": 23012,
    "description": "Collector's edition album 'Mercury \u2013 Act 1' by Imagine Dragons.",
    "emoji": "\ud83d\udcbf",
    "genre": "Rock"
  },
  {
    "id": 291,
    "name": "Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 28494,
    "description": "Official hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 292,
    "name": "Imagine Dragons T-Shirt",
    "artist": "Imagine Dragons",
    "price": 12098,
    "description": "Official t-shirt merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 293,
    "name": "Imagine Dragons Cap",
    "artist": "Imagine Dragons",
    "price": 10770,
    "description": "Official cap merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 294,
    "name": "Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 27293,
    "description": "Official vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 295,
    "name": "Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 7782,
    "description": "Official poster merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 296,
    "name": "Imagine Dragons Signed Album",
    "artist": "Imagine Dragons",
    "price": 44566,
    "description": "Official signed album merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 297,
    "name": "Imagine Dragons Limited Edition Box Set",
    "artist": "Imagine Dragons",
    "price": 57617,
    "description": "Official limited edition box set merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 298,
    "name": "Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 37692,
    "description": "Official sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 299,
    "name": "Imagine Dragons Backpack",
    "artist": "Imagine Dragons",
    "price": 16059,
    "description": "Official backpack merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 300,
    "name": "Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 12104,
    "description": "Official phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\udecd\ufe0f",
    "genre": "Rock"
  },
  {
    "id": 301,
    "name": "Signed Adele Sneakers",
    "artist": "Adele",
    "price": 41184,
    "description": "Signed sneakers merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 302,
    "name": "Exclusive Eminem Phone Case",
    "artist": "Eminem",
    "price": 11352,
    "description": "Exclusive phone case merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 303,
    "name": "Exclusive Adele Phone Case",
    "artist": "Adele",
    "price": 12085,
    "description": "Exclusive phone case merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 304,
    "name": "Signed Dr. Dre Poster",
    "artist": "Dr. Dre",
    "price": 11028,
    "description": "Signed poster merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 305,
    "name": "Deluxe Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 17497,
    "description": "Deluxe backpack merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 306,
    "name": "Deluxe Billie Eilish Hoodie",
    "artist": "Billie Eilish",
    "price": 20001,
    "description": "Deluxe hoodie merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 307,
    "name": "Collector's Edition Dr. Dre Sneakers",
    "artist": "Dr. Dre",
    "price": 39126,
    "description": "Collector's Edition sneakers merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 308,
    "name": "Signed Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 14310,
    "description": "Signed t-shirt merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 309,
    "name": "Deluxe Kanye West Backpack",
    "artist": "Kanye West",
    "price": 16500,
    "description": "Deluxe backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 310,
    "name": "Collector's Edition Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 6860,
    "description": "Collector's Edition poster merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 311,
    "name": "Deluxe Travis Scott Phone Case",
    "artist": "Travis Scott",
    "price": 10918,
    "description": "Deluxe phone case merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 312,
    "name": "Exclusive Khalid Phone Case",
    "artist": "Khalid",
    "price": 9447,
    "description": "Exclusive phone case merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 313,
    "name": "Limited Edition Ed Sheeran Sneakers",
    "artist": "Ed Sheeran",
    "price": 28169,
    "description": "Limited Edition sneakers merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 314,
    "name": "Deluxe Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 53553,
    "description": "Deluxe limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 315,
    "name": "Deluxe Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 26739,
    "description": "Deluxe hoodie merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 316,
    "name": "Limited Edition Beyonc\u00e9 Sneakers",
    "artist": "Beyonc\u00e9",
    "price": 34841,
    "description": "Limited Edition sneakers merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 317,
    "name": "Collector's Edition Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 36135,
    "description": "Collector's Edition signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 318,
    "name": "Deluxe Post Malone Vinyl",
    "artist": "Post Malone",
    "price": 27755,
    "description": "Deluxe vinyl merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 319,
    "name": "Limited Edition Kendrick Lamar Cap",
    "artist": "Kendrick Lamar",
    "price": 10981,
    "description": "Limited Edition cap merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 320,
    "name": "Deluxe Travis Scott Poster",
    "artist": "Travis Scott",
    "price": 9465,
    "description": "Deluxe poster merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 321,
    "name": "Exclusive Adele Sneakers",
    "artist": "Adele",
    "price": 35369,
    "description": "Exclusive sneakers merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 322,
    "name": "Deluxe Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 24640,
    "description": "Deluxe hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 323,
    "name": "Deluxe The Weeknd Phone Case",
    "artist": "The Weeknd",
    "price": 9654,
    "description": "Deluxe phone case merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 324,
    "name": "Deluxe Rihanna Backpack",
    "artist": "Rihanna",
    "price": 16248,
    "description": "Deluxe backpack merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 325,
    "name": "Exclusive Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 7306,
    "description": "Exclusive poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 326,
    "name": "Collector's Edition Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 63873,
    "description": "Collector's Edition limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 327,
    "name": "Signed Kendrick Lamar Poster",
    "artist": "Kendrick Lamar",
    "price": 7622,
    "description": "Signed poster merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 328,
    "name": "Signed Drake Poster",
    "artist": "Drake",
    "price": 8765,
    "description": "Signed poster merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 329,
    "name": "Exclusive Drake Poster",
    "artist": "Drake",
    "price": 9667,
    "description": "Exclusive poster merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 330,
    "name": "Collector's Edition Post Malone Poster",
    "artist": "Post Malone",
    "price": 6322,
    "description": "Collector's Edition poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 331,
    "name": "Signed Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 16438,
    "description": "Signed vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 332,
    "name": "Exclusive Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 38312,
    "description": "Exclusive signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 333,
    "name": "Signed Khalid Hoodie",
    "artist": "Khalid",
    "price": 27698,
    "description": "Signed hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 334,
    "name": "Collector's Edition Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 6531,
    "description": "Collector's Edition poster merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 335,
    "name": "Exclusive Nicki Minaj Limited Edition Box Set",
    "artist": "Nicki Minaj",
    "price": 50266,
    "description": "Exclusive limited edition box set merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 336,
    "name": "Collector's Edition Nicki Minaj Sneakers",
    "artist": "Nicki Minaj",
    "price": 39979,
    "description": "Collector's Edition sneakers merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 337,
    "name": "Collector's Edition Drake Signed Album",
    "artist": "Drake",
    "price": 44641,
    "description": "Collector's Edition signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 338,
    "name": "Deluxe Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 42221,
    "description": "Deluxe sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 339,
    "name": "Exclusive Taylor Swift Vinyl",
    "artist": "Taylor Swift",
    "price": 16469,
    "description": "Exclusive vinyl merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 340,
    "name": "Collector's Edition Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 12921,
    "description": "Collector's Edition cap merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 341,
    "name": "Exclusive Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 21662,
    "description": "Exclusive hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 342,
    "name": "Exclusive Kanye West Sneakers",
    "artist": "Kanye West",
    "price": 35080,
    "description": "Exclusive sneakers merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 343,
    "name": "Limited Edition Rihanna Hoodie",
    "artist": "Rihanna",
    "price": 29648,
    "description": "Limited Edition hoodie merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 344,
    "name": "Exclusive Khalid Hoodie",
    "artist": "Khalid",
    "price": 28471,
    "description": "Exclusive hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 345,
    "name": "Limited Edition Ed Sheeran Backpack",
    "artist": "Ed Sheeran",
    "price": 26457,
    "description": "Limited Edition backpack merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 346,
    "name": "Exclusive Travis Scott Phone Case",
    "artist": "Travis Scott",
    "price": 10091,
    "description": "Exclusive phone case merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 347,
    "name": "Collector's Edition Taylor Swift Vinyl",
    "artist": "Taylor Swift",
    "price": 26513,
    "description": "Collector's Edition vinyl merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 348,
    "name": "Limited Edition Khalid Hoodie",
    "artist": "Khalid",
    "price": 19703,
    "description": "Limited Edition hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 349,
    "name": "Exclusive Post Malone Cap",
    "artist": "Post Malone",
    "price": 15102,
    "description": "Exclusive cap merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 350,
    "name": "Collector's Edition Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 18739,
    "description": "Collector's Edition vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 351,
    "name": "Exclusive Taylor Swift Sneakers",
    "artist": "Taylor Swift",
    "price": 43757,
    "description": "Exclusive sneakers merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 352,
    "name": "Limited Edition Ed Sheeran Poster",
    "artist": "Ed Sheeran",
    "price": 7783,
    "description": "Limited Edition poster merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 353,
    "name": "Signed Post Malone Poster",
    "artist": "Post Malone",
    "price": 7296,
    "description": "Signed poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 354,
    "name": "Exclusive Jay-Z Phone Case",
    "artist": "Jay-Z",
    "price": 7695,
    "description": "Exclusive phone case merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 355,
    "name": "Signed Kendrick Lamar Poster",
    "artist": "Kendrick Lamar",
    "price": 6003,
    "description": "Signed poster merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 356,
    "name": "Limited Edition Kendrick Lamar T-Shirt",
    "artist": "Kendrick Lamar",
    "price": 19757,
    "description": "Limited Edition t-shirt merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 357,
    "name": "Deluxe Taylor Swift Cap",
    "artist": "Taylor Swift",
    "price": 11976,
    "description": "Deluxe cap merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 358,
    "name": "Deluxe Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 27604,
    "description": "Deluxe hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 359,
    "name": "Limited Edition Eminem Phone Case",
    "artist": "Eminem",
    "price": 9115,
    "description": "Limited Edition phone case merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 360,
    "name": "Exclusive Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 20698,
    "description": "Exclusive t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 361,
    "name": "Signed Adele Poster",
    "artist": "Adele",
    "price": 8861,
    "description": "Signed poster merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 362,
    "name": "Exclusive Ed Sheeran Vinyl",
    "artist": "Ed Sheeran",
    "price": 28266,
    "description": "Exclusive vinyl merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 363,
    "name": "Signed Khalid Signed Album",
    "artist": "Khalid",
    "price": 45709,
    "description": "Signed signed album merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 364,
    "name": "Deluxe Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 13674,
    "description": "Deluxe t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 365,
    "name": "Limited Edition Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 56017,
    "description": "Limited Edition signed album merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 366,
    "name": "Exclusive Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 8024,
    "description": "Exclusive poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 367,
    "name": "Collector's Edition Post Malone Poster",
    "artist": "Post Malone",
    "price": 6176,
    "description": "Collector's Edition poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 368,
    "name": "Limited Edition The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 7096,
    "description": "Limited Edition poster merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 369,
    "name": "Collector's Edition Nicki Minaj Hoodie",
    "artist": "Nicki Minaj",
    "price": 25347,
    "description": "Collector's Edition hoodie merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 370,
    "name": "Exclusive Drake Signed Album",
    "artist": "Drake",
    "price": 51722,
    "description": "Exclusive signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 371,
    "name": "Signed Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 26098,
    "description": "Signed sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 372,
    "name": "Deluxe Kendrick Lamar Phone Case",
    "artist": "Kendrick Lamar",
    "price": 8398,
    "description": "Deluxe phone case merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 373,
    "name": "Exclusive Khalid Backpack",
    "artist": "Khalid",
    "price": 17736,
    "description": "Exclusive backpack merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 374,
    "name": "Deluxe Imagine Dragons Backpack",
    "artist": "Imagine Dragons",
    "price": 17392,
    "description": "Deluxe backpack merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 375,
    "name": "Collector's Edition Eminem Hoodie",
    "artist": "Eminem",
    "price": 31359,
    "description": "Collector's Edition hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 376,
    "name": "Limited Edition Khalid Sneakers",
    "artist": "Khalid",
    "price": 36153,
    "description": "Limited Edition sneakers merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 377,
    "name": "Signed Dr. Dre Limited Edition Box Set",
    "artist": "Dr. Dre",
    "price": 65954,
    "description": "Signed limited edition box set merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 378,
    "name": "Signed Eminem Poster",
    "artist": "Eminem",
    "price": 11510,
    "description": "Signed poster merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 379,
    "name": "Collector's Edition Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 28662,
    "description": "Collector's Edition hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 380,
    "name": "Limited Edition The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 53281,
    "description": "Limited Edition signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 381,
    "name": "Collector's Edition Khalid Poster",
    "artist": "Khalid",
    "price": 9703,
    "description": "Collector's Edition poster merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 382,
    "name": "Exclusive Drake Phone Case",
    "artist": "Drake",
    "price": 8460,
    "description": "Exclusive phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 383,
    "name": "Deluxe Drake Backpack",
    "artist": "Drake",
    "price": 24622,
    "description": "Deluxe backpack merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 384,
    "name": "Collector's Edition Drake Poster",
    "artist": "Drake",
    "price": 9689,
    "description": "Collector's Edition poster merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 385,
    "name": "Signed Jay-Z Phone Case",
    "artist": "Jay-Z",
    "price": 11517,
    "description": "Signed phone case merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 386,
    "name": "Collector's Edition Ed Sheeran Poster",
    "artist": "Ed Sheeran",
    "price": 9310,
    "description": "Collector's Edition poster merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 387,
    "name": "Deluxe Khalid Signed Album",
    "artist": "Khalid",
    "price": 38220,
    "description": "Deluxe signed album merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 388,
    "name": "Limited Edition Travis Scott Limited Edition Box Set",
    "artist": "Travis Scott",
    "price": 46906,
    "description": "Limited Edition limited edition box set merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 389,
    "name": "Collector's Edition Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 21283,
    "description": "Collector's Edition vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 390,
    "name": "Collector's Edition Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 30509,
    "description": "Collector's Edition hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 391,
    "name": "Collector's Edition Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 23592,
    "description": "Collector's Edition backpack merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 392,
    "name": "Deluxe Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 18402,
    "description": "Deluxe hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 393,
    "name": "Exclusive Lil Wayne Poster",
    "artist": "Lil Wayne",
    "price": 6234,
    "description": "Exclusive poster merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 394,
    "name": "Signed Ed Sheeran Limited Edition Box Set",
    "artist": "Ed Sheeran",
    "price": 46135,
    "description": "Signed limited edition box set merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 395,
    "name": "Signed The Weeknd Backpack",
    "artist": "The Weeknd",
    "price": 22077,
    "description": "Signed backpack merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 396,
    "name": "Collector's Edition Billie Eilish Backpack",
    "artist": "Billie Eilish",
    "price": 23974,
    "description": "Collector's Edition backpack merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 397,
    "name": "Limited Edition Travis Scott Signed Album",
    "artist": "Travis Scott",
    "price": 53230,
    "description": "Limited Edition signed album merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 398,
    "name": "Limited Edition The Weeknd Sneakers",
    "artist": "The Weeknd",
    "price": 37335,
    "description": "Limited Edition sneakers merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 399,
    "name": "Exclusive Beyonc\u00e9 T-Shirt",
    "artist": "Beyonc\u00e9",
    "price": 17018,
    "description": "Exclusive t-shirt merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 400,
    "name": "Exclusive The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 11452,
    "description": "Exclusive poster merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 401,
    "name": "Signed Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 59037,
    "description": "Signed signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 402,
    "name": "Exclusive Drake T-Shirt",
    "artist": "Drake",
    "price": 16233,
    "description": "Exclusive t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 403,
    "name": "Collector's Edition Kanye West Signed Album",
    "artist": "Kanye West",
    "price": 54263,
    "description": "Collector's Edition signed album merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 404,
    "name": "Collector's Edition Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 29477,
    "description": "Collector's Edition hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 405,
    "name": "Signed Kendrick Lamar T-Shirt",
    "artist": "Kendrick Lamar",
    "price": 12255,
    "description": "Signed t-shirt merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 406,
    "name": "Exclusive Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 43893,
    "description": "Exclusive limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 407,
    "name": "Deluxe The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 43210,
    "description": "Deluxe signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 408,
    "name": "Signed Eminem Backpack",
    "artist": "Eminem",
    "price": 25225,
    "description": "Signed backpack merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 409,
    "name": "Exclusive Kendrick Lamar Backpack",
    "artist": "Kendrick Lamar",
    "price": 16950,
    "description": "Exclusive backpack merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 410,
    "name": "Collector's Edition Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 24027,
    "description": "Collector's Edition t-shirt merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 411,
    "name": "Collector's Edition Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 27840,
    "description": "Collector's Edition hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 412,
    "name": "Collector's Edition Nicki Minaj Signed Album",
    "artist": "Nicki Minaj",
    "price": 51856,
    "description": "Collector's Edition signed album merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 413,
    "name": "Deluxe Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 49368,
    "description": "Deluxe limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 414,
    "name": "Collector's Edition Rihanna Poster",
    "artist": "Rihanna",
    "price": 6479,
    "description": "Collector's Edition poster merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 415,
    "name": "Limited Edition Dr. Dre Phone Case",
    "artist": "Dr. Dre",
    "price": 8473,
    "description": "Limited Edition phone case merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 416,
    "name": "Collector's Edition J. Cole Poster",
    "artist": "J. Cole",
    "price": 7338,
    "description": "Collector's Edition poster merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 417,
    "name": "Collector's Edition Post Malone Signed Album",
    "artist": "Post Malone",
    "price": 59392,
    "description": "Collector's Edition signed album merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 418,
    "name": "Limited Edition Drake T-Shirt",
    "artist": "Drake",
    "price": 13901,
    "description": "Limited Edition t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 419,
    "name": "Signed Imagine Dragons Signed Album",
    "artist": "Imagine Dragons",
    "price": 56635,
    "description": "Signed signed album merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 420,
    "name": "Limited Edition Eminem Backpack",
    "artist": "Eminem",
    "price": 15839,
    "description": "Limited Edition backpack merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 421,
    "name": "Signed Taylor Swift Sneakers",
    "artist": "Taylor Swift",
    "price": 39830,
    "description": "Signed sneakers merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 422,
    "name": "Signed J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 22712,
    "description": "Signed t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 423,
    "name": "Signed Post Malone Backpack",
    "artist": "Post Malone",
    "price": 27664,
    "description": "Signed backpack merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 424,
    "name": "Exclusive Travis Scott T-Shirt",
    "artist": "Travis Scott",
    "price": 18156,
    "description": "Exclusive t-shirt merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 425,
    "name": "Deluxe Lil Wayne Vinyl",
    "artist": "Lil Wayne",
    "price": 25220,
    "description": "Deluxe vinyl merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 426,
    "name": "Collector's Edition Khalid T-Shirt",
    "artist": "Khalid",
    "price": 13327,
    "description": "Collector's Edition t-shirt merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 427,
    "name": "Collector's Edition Adele Phone Case",
    "artist": "Adele",
    "price": 8819,
    "description": "Collector's Edition phone case merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 428,
    "name": "Limited Edition Billie Eilish Cap",
    "artist": "Billie Eilish",
    "price": 11537,
    "description": "Limited Edition cap merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 429,
    "name": "Exclusive Kendrick Lamar Vinyl",
    "artist": "Kendrick Lamar",
    "price": 28827,
    "description": "Exclusive vinyl merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 430,
    "name": "Signed Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 11847,
    "description": "Signed cap merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 431,
    "name": "Collector's Edition J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 21146,
    "description": "Collector's Edition vinyl merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 432,
    "name": "Signed Post Malone Cap",
    "artist": "Post Malone",
    "price": 8920,
    "description": "Signed cap merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 433,
    "name": "Exclusive J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 23296,
    "description": "Exclusive t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 434,
    "name": "Exclusive Drake Cap",
    "artist": "Drake",
    "price": 12794,
    "description": "Exclusive cap merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 435,
    "name": "Deluxe Post Malone Poster",
    "artist": "Post Malone",
    "price": 10524,
    "description": "Deluxe poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 436,
    "name": "Signed Beyonc\u00e9 Backpack",
    "artist": "Beyonc\u00e9",
    "price": 16923,
    "description": "Signed backpack merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 437,
    "name": "Deluxe Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 25718,
    "description": "Deluxe vinyl merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 438,
    "name": "Signed Billie Eilish Signed Album",
    "artist": "Billie Eilish",
    "price": 49244,
    "description": "Signed signed album merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 439,
    "name": "Collector's Edition Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 38188,
    "description": "Collector's Edition signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 440,
    "name": "Exclusive Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 19074,
    "description": "Exclusive hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 441,
    "name": "Deluxe The Weeknd T-Shirt",
    "artist": "The Weeknd",
    "price": 20917,
    "description": "Deluxe t-shirt merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 442,
    "name": "Limited Edition Eminem Poster",
    "artist": "Eminem",
    "price": 10438,
    "description": "Limited Edition poster merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 443,
    "name": "Exclusive Khalid Poster",
    "artist": "Khalid",
    "price": 7912,
    "description": "Exclusive poster merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 444,
    "name": "Exclusive Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 27161,
    "description": "Exclusive hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 445,
    "name": "Deluxe Kendrick Lamar Cap",
    "artist": "Kendrick Lamar",
    "price": 16788,
    "description": "Deluxe cap merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 446,
    "name": "Signed Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 27412,
    "description": "Signed vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 447,
    "name": "Exclusive Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 16668,
    "description": "Exclusive vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 448,
    "name": "Limited Edition Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 54230,
    "description": "Limited Edition limited edition box set merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 449,
    "name": "Signed Ed Sheeran Phone Case",
    "artist": "Ed Sheeran",
    "price": 12573,
    "description": "Signed phone case merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 450,
    "name": "Limited Edition Taylor Swift Backpack",
    "artist": "Taylor Swift",
    "price": 16607,
    "description": "Limited Edition backpack merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 451,
    "name": "Deluxe Ed Sheeran Phone Case",
    "artist": "Ed Sheeran",
    "price": 9948,
    "description": "Deluxe phone case merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 452,
    "name": "Deluxe J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 16330,
    "description": "Deluxe t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 453,
    "name": "Collector's Edition Billie Eilish Poster",
    "artist": "Billie Eilish",
    "price": 6724,
    "description": "Collector's Edition poster merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 454,
    "name": "Limited Edition J. Cole Poster",
    "artist": "J. Cole",
    "price": 8440,
    "description": "Limited Edition poster merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 455,
    "name": "Deluxe Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 52211,
    "description": "Deluxe signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 456,
    "name": "Signed Ed Sheeran Sneakers",
    "artist": "Ed Sheeran",
    "price": 40256,
    "description": "Signed sneakers merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 457,
    "name": "Signed Eminem Vinyl",
    "artist": "Eminem",
    "price": 16572,
    "description": "Signed vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 458,
    "name": "Deluxe The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 8942,
    "description": "Deluxe cap merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 459,
    "name": "Exclusive Eminem Backpack",
    "artist": "Eminem",
    "price": 18254,
    "description": "Exclusive backpack merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 460,
    "name": "Collector's Edition Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 23809,
    "description": "Collector's Edition vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 461,
    "name": "Exclusive Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 48820,
    "description": "Exclusive signed album merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 462,
    "name": "Collector's Edition Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 55953,
    "description": "Collector's Edition signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 463,
    "name": "Deluxe The Weeknd Hoodie",
    "artist": "The Weeknd",
    "price": 22277,
    "description": "Deluxe hoodie merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 464,
    "name": "Collector's Edition Travis Scott T-Shirt",
    "artist": "Travis Scott",
    "price": 16433,
    "description": "Collector's Edition t-shirt merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 465,
    "name": "Exclusive Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 33854,
    "description": "Exclusive hoodie merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 466,
    "name": "Collector's Edition Dr. Dre T-Shirt",
    "artist": "Dr. Dre",
    "price": 16358,
    "description": "Collector's Edition t-shirt merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 467,
    "name": "Signed Kanye West Poster",
    "artist": "Kanye West",
    "price": 11156,
    "description": "Signed poster merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 468,
    "name": "Limited Edition Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 69478,
    "description": "Limited Edition limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 469,
    "name": "Signed Travis Scott Poster",
    "artist": "Travis Scott",
    "price": 9267,
    "description": "Signed poster merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 470,
    "name": "Deluxe Travis Scott Poster",
    "artist": "Travis Scott",
    "price": 10759,
    "description": "Deluxe poster merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 471,
    "name": "Collector's Edition Travis Scott Poster",
    "artist": "Travis Scott",
    "price": 11828,
    "description": "Collector's Edition poster merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 472,
    "name": "Limited Edition Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 41691,
    "description": "Limited Edition signed album merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 473,
    "name": "Limited Edition The Weeknd Vinyl",
    "artist": "The Weeknd",
    "price": 24058,
    "description": "Limited Edition vinyl merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 474,
    "name": "Exclusive Taylor Swift Cap",
    "artist": "Taylor Swift",
    "price": 13309,
    "description": "Exclusive cap merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 475,
    "name": "Collector's Edition Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 64195,
    "description": "Collector's Edition limited edition box set merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 476,
    "name": "Deluxe Billie Eilish Backpack",
    "artist": "Billie Eilish",
    "price": 23710,
    "description": "Deluxe backpack merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 477,
    "name": "Deluxe Eminem Limited Edition Box Set",
    "artist": "Eminem",
    "price": 63551,
    "description": "Deluxe limited edition box set merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 478,
    "name": "Signed Rihanna Backpack",
    "artist": "Rihanna",
    "price": 21081,
    "description": "Signed backpack merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 479,
    "name": "Collector's Edition Ed Sheeran Hoodie",
    "artist": "Ed Sheeran",
    "price": 32484,
    "description": "Collector's Edition hoodie merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 480,
    "name": "Limited Edition Khalid Hoodie",
    "artist": "Khalid",
    "price": 25514,
    "description": "Limited Edition hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 481,
    "name": "Collector's Edition Eminem Sneakers",
    "artist": "Eminem",
    "price": 29075,
    "description": "Collector's Edition sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 482,
    "name": "Exclusive J. Cole Backpack",
    "artist": "J. Cole",
    "price": 23526,
    "description": "Exclusive backpack merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 483,
    "name": "Deluxe Lil Wayne Poster",
    "artist": "Lil Wayne",
    "price": 7702,
    "description": "Deluxe poster merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 484,
    "name": "Deluxe Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 23121,
    "description": "Deluxe vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 485,
    "name": "Exclusive Beyonc\u00e9 Backpack",
    "artist": "Beyonc\u00e9",
    "price": 24887,
    "description": "Exclusive backpack merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 486,
    "name": "Limited Edition Imagine Dragons Cap",
    "artist": "Imagine Dragons",
    "price": 17119,
    "description": "Limited Edition cap merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 487,
    "name": "Exclusive Post Malone Poster",
    "artist": "Post Malone",
    "price": 9597,
    "description": "Exclusive poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 488,
    "name": "Exclusive Kendrick Lamar Signed Album",
    "artist": "Kendrick Lamar",
    "price": 52366,
    "description": "Exclusive signed album merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 489,
    "name": "Deluxe Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 29081,
    "description": "Deluxe vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 490,
    "name": "Deluxe Khalid Poster",
    "artist": "Khalid",
    "price": 11068,
    "description": "Deluxe poster merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 491,
    "name": "Signed The Weeknd Hoodie",
    "artist": "The Weeknd",
    "price": 22912,
    "description": "Signed hoodie merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 492,
    "name": "Deluxe Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 20567,
    "description": "Deluxe hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 493,
    "name": "Collector's Edition Kanye West Signed Album",
    "artist": "Kanye West",
    "price": 42046,
    "description": "Collector's Edition signed album merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 494,
    "name": "Deluxe Kanye West Hoodie",
    "artist": "Kanye West",
    "price": 32959,
    "description": "Deluxe hoodie merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 495,
    "name": "Limited Edition Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 10726,
    "description": "Limited Edition phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 496,
    "name": "Limited Edition Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 28243,
    "description": "Limited Edition hoodie merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 497,
    "name": "Collector's Edition Billie Eilish Sneakers",
    "artist": "Billie Eilish",
    "price": 39472,
    "description": "Collector's Edition sneakers merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 498,
    "name": "Deluxe Billie Eilish Cap",
    "artist": "Billie Eilish",
    "price": 13645,
    "description": "Deluxe cap merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 499,
    "name": "Exclusive Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 22411,
    "description": "Exclusive backpack merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 500,
    "name": "Exclusive Jay-Z Backpack",
    "artist": "Jay-Z",
    "price": 19057,
    "description": "Exclusive backpack merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 501,
    "name": "Collector's Edition Beyonc\u00e9 Signed Album",
    "artist": "Beyonc\u00e9",
    "price": 51841,
    "description": "Collector's Edition signed album merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 502,
    "name": "Deluxe Drake T-Shirt",
    "artist": "Drake",
    "price": 14078,
    "description": "Deluxe t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 503,
    "name": "Deluxe Imagine Dragons Limited Edition Box Set",
    "artist": "Imagine Dragons",
    "price": 57070,
    "description": "Deluxe limited edition box set merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 504,
    "name": "Exclusive Post Malone T-Shirt",
    "artist": "Post Malone",
    "price": 15785,
    "description": "Exclusive t-shirt merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 505,
    "name": "Exclusive The Weeknd Limited Edition Box Set",
    "artist": "The Weeknd",
    "price": 53996,
    "description": "Exclusive limited edition box set merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 506,
    "name": "Deluxe Jay-Z Poster",
    "artist": "Jay-Z",
    "price": 11272,
    "description": "Deluxe poster merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 507,
    "name": "Collector's Edition Dr. Dre Limited Edition Box Set",
    "artist": "Dr. Dre",
    "price": 68517,
    "description": "Collector's Edition limited edition box set merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 508,
    "name": "Deluxe Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 68008,
    "description": "Deluxe limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 509,
    "name": "Deluxe Lil Wayne Backpack",
    "artist": "Lil Wayne",
    "price": 22401,
    "description": "Deluxe backpack merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 510,
    "name": "Collector's Edition Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 28468,
    "description": "Collector's Edition sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 511,
    "name": "Limited Edition Travis Scott Phone Case",
    "artist": "Travis Scott",
    "price": 12799,
    "description": "Limited Edition phone case merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 512,
    "name": "Limited Edition Nicki Minaj Sneakers",
    "artist": "Nicki Minaj",
    "price": 29591,
    "description": "Limited Edition sneakers merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 513,
    "name": "Limited Edition The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 6789,
    "description": "Limited Edition poster merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 514,
    "name": "Limited Edition Imagine Dragons Limited Edition Box Set",
    "artist": "Imagine Dragons",
    "price": 42212,
    "description": "Limited Edition limited edition box set merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 515,
    "name": "Deluxe The Weeknd Hoodie",
    "artist": "The Weeknd",
    "price": 19452,
    "description": "Deluxe hoodie merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 516,
    "name": "Signed Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 29567,
    "description": "Signed vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 517,
    "name": "Collector's Edition Post Malone Signed Album",
    "artist": "Post Malone",
    "price": 44866,
    "description": "Collector's Edition signed album merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 518,
    "name": "Signed Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 11680,
    "description": "Signed cap merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 519,
    "name": "Limited Edition Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 6745,
    "description": "Limited Edition poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 520,
    "name": "Deluxe Nicki Minaj Poster",
    "artist": "Nicki Minaj",
    "price": 10951,
    "description": "Deluxe poster merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 521,
    "name": "Collector's Edition The Weeknd Phone Case",
    "artist": "The Weeknd",
    "price": 9339,
    "description": "Collector's Edition phone case merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 522,
    "name": "Deluxe Post Malone Vinyl",
    "artist": "Post Malone",
    "price": 20812,
    "description": "Deluxe vinyl merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 523,
    "name": "Deluxe Kendrick Lamar Limited Edition Box Set",
    "artist": "Kendrick Lamar",
    "price": 44164,
    "description": "Deluxe limited edition box set merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 524,
    "name": "Collector's Edition Jay-Z Backpack",
    "artist": "Jay-Z",
    "price": 26155,
    "description": "Collector's Edition backpack merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 525,
    "name": "Limited Edition Adele T-Shirt",
    "artist": "Adele",
    "price": 22210,
    "description": "Limited Edition t-shirt merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 526,
    "name": "Limited Edition Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 13410,
    "description": "Limited Edition cap merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 527,
    "name": "Signed Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 30526,
    "description": "Signed hoodie merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 528,
    "name": "Exclusive J. Cole Cap",
    "artist": "J. Cole",
    "price": 12932,
    "description": "Exclusive cap merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 529,
    "name": "Collector's Edition Eminem Vinyl",
    "artist": "Eminem",
    "price": 18832,
    "description": "Collector's Edition vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 530,
    "name": "Limited Edition Jay-Z Poster",
    "artist": "Jay-Z",
    "price": 9548,
    "description": "Limited Edition poster merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 531,
    "name": "Collector's Edition Adele Cap",
    "artist": "Adele",
    "price": 16247,
    "description": "Collector's Edition cap merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 532,
    "name": "Limited Edition Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 12930,
    "description": "Limited Edition cap merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 533,
    "name": "Exclusive Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 19417,
    "description": "Exclusive backpack merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 534,
    "name": "Deluxe Jay-Z Phone Case",
    "artist": "Jay-Z",
    "price": 9502,
    "description": "Deluxe phone case merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 535,
    "name": "Signed Dr. Dre Limited Edition Box Set",
    "artist": "Dr. Dre",
    "price": 69572,
    "description": "Signed limited edition box set merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 536,
    "name": "Collector's Edition Kanye West Sneakers",
    "artist": "Kanye West",
    "price": 42642,
    "description": "Collector's Edition sneakers merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 537,
    "name": "Exclusive Post Malone Limited Edition Box Set",
    "artist": "Post Malone",
    "price": 65796,
    "description": "Exclusive limited edition box set merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 538,
    "name": "Collector's Edition Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 8711,
    "description": "Collector's Edition phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 539,
    "name": "Collector's Edition Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 35657,
    "description": "Collector's Edition signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 540,
    "name": "Signed Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 17690,
    "description": "Signed backpack merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 541,
    "name": "Exclusive Kendrick Lamar Hoodie",
    "artist": "Kendrick Lamar",
    "price": 32301,
    "description": "Exclusive hoodie merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 542,
    "name": "Exclusive Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 20873,
    "description": "Exclusive t-shirt merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 543,
    "name": "Signed Adele Hoodie",
    "artist": "Adele",
    "price": 23782,
    "description": "Signed hoodie merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 544,
    "name": "Exclusive J. Cole Sneakers",
    "artist": "J. Cole",
    "price": 32940,
    "description": "Exclusive sneakers merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 545,
    "name": "Deluxe Beyonc\u00e9 Cap",
    "artist": "Beyonc\u00e9",
    "price": 16963,
    "description": "Deluxe cap merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 546,
    "name": "Exclusive J. Cole Sneakers",
    "artist": "J. Cole",
    "price": 33348,
    "description": "Exclusive sneakers merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 547,
    "name": "Collector's Edition Kanye West Hoodie",
    "artist": "Kanye West",
    "price": 26299,
    "description": "Collector's Edition hoodie merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 548,
    "name": "Limited Edition Ed Sheeran T-Shirt",
    "artist": "Ed Sheeran",
    "price": 16218,
    "description": "Limited Edition t-shirt merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 549,
    "name": "Deluxe Nicki Minaj T-Shirt",
    "artist": "Nicki Minaj",
    "price": 21309,
    "description": "Deluxe t-shirt merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 550,
    "name": "Exclusive The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 44809,
    "description": "Exclusive signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 551,
    "name": "Deluxe Lil Wayne Signed Album",
    "artist": "Lil Wayne",
    "price": 58742,
    "description": "Deluxe signed album merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 552,
    "name": "Signed Adele Cap",
    "artist": "Adele",
    "price": 11027,
    "description": "Signed cap merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 553,
    "name": "Signed Rihanna Phone Case",
    "artist": "Rihanna",
    "price": 8462,
    "description": "Signed phone case merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 554,
    "name": "Collector's Edition J. Cole Sneakers",
    "artist": "J. Cole",
    "price": 31667,
    "description": "Collector's Edition sneakers merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 555,
    "name": "Deluxe Khalid Vinyl",
    "artist": "Khalid",
    "price": 15347,
    "description": "Deluxe vinyl merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 556,
    "name": "Exclusive Eminem Hoodie",
    "artist": "Eminem",
    "price": 28320,
    "description": "Exclusive hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 557,
    "name": "Collector's Edition The Weeknd Phone Case",
    "artist": "The Weeknd",
    "price": 12441,
    "description": "Collector's Edition phone case merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 558,
    "name": "Signed Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 31189,
    "description": "Signed hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 559,
    "name": "Signed Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 25888,
    "description": "Signed vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 560,
    "name": "Limited Edition Beyonc\u00e9 Hoodie",
    "artist": "Beyonc\u00e9",
    "price": 20089,
    "description": "Limited Edition hoodie merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 561,
    "name": "Limited Edition Adele Cap",
    "artist": "Adele",
    "price": 17042,
    "description": "Limited Edition cap merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 562,
    "name": "Exclusive Lil Wayne Backpack",
    "artist": "Lil Wayne",
    "price": 20596,
    "description": "Exclusive backpack merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 563,
    "name": "Limited Edition J. Cole Cap",
    "artist": "J. Cole",
    "price": 14068,
    "description": "Limited Edition cap merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 564,
    "name": "Signed Billie Eilish Backpack",
    "artist": "Billie Eilish",
    "price": 16115,
    "description": "Signed backpack merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 565,
    "name": "Signed Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 11579,
    "description": "Signed cap merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 566,
    "name": "Signed J. Cole Phone Case",
    "artist": "J. Cole",
    "price": 8169,
    "description": "Signed phone case merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 567,
    "name": "Signed Nicki Minaj Poster",
    "artist": "Nicki Minaj",
    "price": 11013,
    "description": "Signed poster merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 568,
    "name": "Deluxe Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 55921,
    "description": "Deluxe limited edition box set merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 569,
    "name": "Deluxe Lil Wayne Sneakers",
    "artist": "Lil Wayne",
    "price": 35752,
    "description": "Deluxe sneakers merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 570,
    "name": "Collector's Edition Drake T-Shirt",
    "artist": "Drake",
    "price": 20124,
    "description": "Collector's Edition t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 571,
    "name": "Exclusive Jay-Z Limited Edition Box Set",
    "artist": "Jay-Z",
    "price": 65503,
    "description": "Exclusive limited edition box set merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 572,
    "name": "Collector's Edition Rihanna Hoodie",
    "artist": "Rihanna",
    "price": 28842,
    "description": "Collector's Edition hoodie merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 573,
    "name": "Deluxe Imagine Dragons Limited Edition Box Set",
    "artist": "Imagine Dragons",
    "price": 42336,
    "description": "Deluxe limited edition box set merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 574,
    "name": "Collector's Edition Adele Backpack",
    "artist": "Adele",
    "price": 27079,
    "description": "Collector's Edition backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 575,
    "name": "Deluxe Nicki Minaj Limited Edition Box Set",
    "artist": "Nicki Minaj",
    "price": 66704,
    "description": "Deluxe limited edition box set merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 576,
    "name": "Deluxe Drake Backpack",
    "artist": "Drake",
    "price": 22619,
    "description": "Deluxe backpack merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 577,
    "name": "Exclusive Billie Eilish T-Shirt",
    "artist": "Billie Eilish",
    "price": 20148,
    "description": "Exclusive t-shirt merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 578,
    "name": "Collector's Edition Khalid Hoodie",
    "artist": "Khalid",
    "price": 31067,
    "description": "Collector's Edition hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 579,
    "name": "Deluxe Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 8061,
    "description": "Deluxe poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 580,
    "name": "Signed Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 11508,
    "description": "Signed poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 581,
    "name": "Exclusive The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 15883,
    "description": "Exclusive cap merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 582,
    "name": "Limited Edition Eminem Sneakers",
    "artist": "Eminem",
    "price": 37648,
    "description": "Limited Edition sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 583,
    "name": "Deluxe Post Malone Cap",
    "artist": "Post Malone",
    "price": 14886,
    "description": "Deluxe cap merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 584,
    "name": "Collector's Edition Lil Wayne Sneakers",
    "artist": "Lil Wayne",
    "price": 32096,
    "description": "Collector's Edition sneakers merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 585,
    "name": "Limited Edition Imagine Dragons Signed Album",
    "artist": "Imagine Dragons",
    "price": 58823,
    "description": "Limited Edition signed album merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 586,
    "name": "Limited Edition Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 7351,
    "description": "Limited Edition phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 587,
    "name": "Limited Edition The Weeknd Backpack",
    "artist": "The Weeknd",
    "price": 17783,
    "description": "Limited Edition backpack merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 588,
    "name": "Deluxe Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 25974,
    "description": "Deluxe sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 589,
    "name": "Exclusive Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 28726,
    "description": "Exclusive vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 590,
    "name": "Limited Edition Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 15591,
    "description": "Limited Edition vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 591,
    "name": "Exclusive Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 6731,
    "description": "Exclusive poster merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 592,
    "name": "Limited Edition Kendrick Lamar Backpack",
    "artist": "Kendrick Lamar",
    "price": 20683,
    "description": "Limited Edition backpack merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 593,
    "name": "Limited Edition Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 55612,
    "description": "Limited Edition limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 594,
    "name": "Signed Post Malone T-Shirt",
    "artist": "Post Malone",
    "price": 21394,
    "description": "Signed t-shirt merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 595,
    "name": "Limited Edition Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 8115,
    "description": "Limited Edition poster merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 596,
    "name": "Signed Kendrick Lamar Poster",
    "artist": "Kendrick Lamar",
    "price": 9738,
    "description": "Signed poster merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 597,
    "name": "Signed Taylor Swift Vinyl",
    "artist": "Taylor Swift",
    "price": 22815,
    "description": "Signed vinyl merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 598,
    "name": "Deluxe Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 24112,
    "description": "Deluxe hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 599,
    "name": "Limited Edition Khalid Cap",
    "artist": "Khalid",
    "price": 11536,
    "description": "Limited Edition cap merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 600,
    "name": "Signed Post Malone T-Shirt",
    "artist": "Post Malone",
    "price": 19772,
    "description": "Signed t-shirt merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 601,
    "name": "Limited Edition Lil Wayne Vinyl",
    "artist": "Lil Wayne",
    "price": 29782,
    "description": "Limited Edition vinyl merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 602,
    "name": "Exclusive Eminem Phone Case",
    "artist": "Eminem",
    "price": 8556,
    "description": "Exclusive phone case merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 603,
    "name": "Collector's Edition Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 6587,
    "description": "Collector's Edition poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 604,
    "name": "Signed Billie Eilish Cap",
    "artist": "Billie Eilish",
    "price": 12507,
    "description": "Signed cap merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 605,
    "name": "Collector's Edition Nicki Minaj Backpack",
    "artist": "Nicki Minaj",
    "price": 15266,
    "description": "Collector's Edition backpack merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 606,
    "name": "Limited Edition Ed Sheeran T-Shirt",
    "artist": "Ed Sheeran",
    "price": 19374,
    "description": "Limited Edition t-shirt merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 607,
    "name": "Deluxe Eminem Hoodie",
    "artist": "Eminem",
    "price": 18859,
    "description": "Deluxe hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 608,
    "name": "Limited Edition Imagine Dragons Signed Album",
    "artist": "Imagine Dragons",
    "price": 43909,
    "description": "Limited Edition signed album merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 609,
    "name": "Deluxe Kendrick Lamar Signed Album",
    "artist": "Kendrick Lamar",
    "price": 46546,
    "description": "Deluxe signed album merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 610,
    "name": "Limited Edition Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 23266,
    "description": "Limited Edition hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 611,
    "name": "Signed Beyonc\u00e9 Signed Album",
    "artist": "Beyonc\u00e9",
    "price": 36585,
    "description": "Signed signed album merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 612,
    "name": "Deluxe Dr. Dre Poster",
    "artist": "Dr. Dre",
    "price": 6507,
    "description": "Deluxe poster merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 613,
    "name": "Signed Rihanna Phone Case",
    "artist": "Rihanna",
    "price": 8210,
    "description": "Signed phone case merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 614,
    "name": "Collector's Edition Kendrick Lamar Backpack",
    "artist": "Kendrick Lamar",
    "price": 23463,
    "description": "Collector's Edition backpack merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 615,
    "name": "Collector's Edition Nicki Minaj Cap",
    "artist": "Nicki Minaj",
    "price": 11432,
    "description": "Collector's Edition cap merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 616,
    "name": "Signed Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 17709,
    "description": "Signed cap merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 617,
    "name": "Limited Edition Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 45147,
    "description": "Limited Edition limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 618,
    "name": "Limited Edition Rihanna Cap",
    "artist": "Rihanna",
    "price": 8704,
    "description": "Limited Edition cap merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 619,
    "name": "Deluxe Adele Phone Case",
    "artist": "Adele",
    "price": 12607,
    "description": "Deluxe phone case merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 620,
    "name": "Signed Khalid Phone Case",
    "artist": "Khalid",
    "price": 11586,
    "description": "Signed phone case merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 621,
    "name": "Exclusive Drake Phone Case",
    "artist": "Drake",
    "price": 9632,
    "description": "Exclusive phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 622,
    "name": "Exclusive Lil Wayne Vinyl",
    "artist": "Lil Wayne",
    "price": 19643,
    "description": "Exclusive vinyl merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 623,
    "name": "Signed Beyonc\u00e9 Limited Edition Box Set",
    "artist": "Beyonc\u00e9",
    "price": 48988,
    "description": "Signed limited edition box set merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 624,
    "name": "Collector's Edition Travis Scott Signed Album",
    "artist": "Travis Scott",
    "price": 47591,
    "description": "Collector's Edition signed album merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 625,
    "name": "Collector's Edition Drake Hoodie",
    "artist": "Drake",
    "price": 25870,
    "description": "Collector's Edition hoodie merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 626,
    "name": "Deluxe Kendrick Lamar Limited Edition Box Set",
    "artist": "Kendrick Lamar",
    "price": 57013,
    "description": "Deluxe limited edition box set merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 627,
    "name": "Limited Edition Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 20279,
    "description": "Limited Edition vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 628,
    "name": "Exclusive Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 21872,
    "description": "Exclusive vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 629,
    "name": "Signed The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 51626,
    "description": "Signed signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 630,
    "name": "Exclusive Taylor Swift Limited Edition Box Set",
    "artist": "Taylor Swift",
    "price": 67639,
    "description": "Exclusive limited edition box set merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 631,
    "name": "Exclusive Beyonc\u00e9 Sneakers",
    "artist": "Beyonc\u00e9",
    "price": 30184,
    "description": "Exclusive sneakers merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 632,
    "name": "Limited Edition Eminem Hoodie",
    "artist": "Eminem",
    "price": 30127,
    "description": "Limited Edition hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 633,
    "name": "Limited Edition Khalid T-Shirt",
    "artist": "Khalid",
    "price": 16018,
    "description": "Limited Edition t-shirt merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 634,
    "name": "Exclusive The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 10335,
    "description": "Exclusive cap merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 635,
    "name": "Deluxe Kendrick Lamar Vinyl",
    "artist": "Kendrick Lamar",
    "price": 28907,
    "description": "Deluxe vinyl merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 636,
    "name": "Limited Edition The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 58478,
    "description": "Limited Edition signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 637,
    "name": "Exclusive Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 18441,
    "description": "Exclusive vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 638,
    "name": "Exclusive Billie Eilish Sneakers",
    "artist": "Billie Eilish",
    "price": 31103,
    "description": "Exclusive sneakers merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 639,
    "name": "Exclusive Dr. Dre Limited Edition Box Set",
    "artist": "Dr. Dre",
    "price": 47363,
    "description": "Exclusive limited edition box set merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 640,
    "name": "Limited Edition Kendrick Lamar Backpack",
    "artist": "Kendrick Lamar",
    "price": 16764,
    "description": "Limited Edition backpack merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 641,
    "name": "Collector's Edition Adele Hoodie",
    "artist": "Adele",
    "price": 33284,
    "description": "Collector's Edition hoodie merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 642,
    "name": "Collector's Edition Rihanna Hoodie",
    "artist": "Rihanna",
    "price": 27062,
    "description": "Collector's Edition hoodie merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 643,
    "name": "Signed The Weeknd Signed Album",
    "artist": "The Weeknd",
    "price": 59487,
    "description": "Signed signed album merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 644,
    "name": "Exclusive Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 48683,
    "description": "Exclusive signed album merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 645,
    "name": "Signed Beyonc\u00e9 Limited Edition Box Set",
    "artist": "Beyonc\u00e9",
    "price": 43691,
    "description": "Signed limited edition box set merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 646,
    "name": "Exclusive Nicki Minaj Poster",
    "artist": "Nicki Minaj",
    "price": 8876,
    "description": "Exclusive poster merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 647,
    "name": "Limited Edition Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 16373,
    "description": "Limited Edition cap merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 648,
    "name": "Exclusive Lil Wayne Phone Case",
    "artist": "Lil Wayne",
    "price": 9714,
    "description": "Exclusive phone case merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 649,
    "name": "Deluxe Post Malone Poster",
    "artist": "Post Malone",
    "price": 7201,
    "description": "Deluxe poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 650,
    "name": "Deluxe Kendrick Lamar Phone Case",
    "artist": "Kendrick Lamar",
    "price": 12633,
    "description": "Deluxe phone case merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 651,
    "name": "Collector's Edition Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 25425,
    "description": "Collector's Edition vinyl merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 652,
    "name": "Deluxe Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 29789,
    "description": "Deluxe vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 653,
    "name": "Deluxe Nicki Minaj Signed Album",
    "artist": "Nicki Minaj",
    "price": 37181,
    "description": "Deluxe signed album merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 654,
    "name": "Signed Kanye West Backpack",
    "artist": "Kanye West",
    "price": 27189,
    "description": "Signed backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 655,
    "name": "Limited Edition Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 6611,
    "description": "Limited Edition poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 656,
    "name": "Exclusive Rihanna Backpack",
    "artist": "Rihanna",
    "price": 27605,
    "description": "Exclusive backpack merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 657,
    "name": "Signed Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 63194,
    "description": "Signed limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 658,
    "name": "Deluxe Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 42235,
    "description": "Deluxe signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 659,
    "name": "Deluxe Post Malone Poster",
    "artist": "Post Malone",
    "price": 11635,
    "description": "Deluxe poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 660,
    "name": "Exclusive Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 6884,
    "description": "Exclusive poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 661,
    "name": "Exclusive Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 7376,
    "description": "Exclusive phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 662,
    "name": "Signed Khalid Hoodie",
    "artist": "Khalid",
    "price": 34029,
    "description": "Signed hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 663,
    "name": "Limited Edition Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 35194,
    "description": "Limited Edition sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 664,
    "name": "Deluxe Ed Sheeran Poster",
    "artist": "Ed Sheeran",
    "price": 6869,
    "description": "Deluxe poster merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 665,
    "name": "Collector's Edition Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 12136,
    "description": "Collector's Edition phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 666,
    "name": "Limited Edition Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 35504,
    "description": "Limited Edition signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 667,
    "name": "Collector's Edition Kendrick Lamar Hoodie",
    "artist": "Kendrick Lamar",
    "price": 29587,
    "description": "Collector's Edition hoodie merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 668,
    "name": "Deluxe Lil Wayne Limited Edition Box Set",
    "artist": "Lil Wayne",
    "price": 56400,
    "description": "Deluxe limited edition box set merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 669,
    "name": "Collector's Edition The Weeknd Limited Edition Box Set",
    "artist": "The Weeknd",
    "price": 48863,
    "description": "Collector's Edition limited edition box set merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 670,
    "name": "Collector's Edition Travis Scott Sneakers",
    "artist": "Travis Scott",
    "price": 44902,
    "description": "Collector's Edition sneakers merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 671,
    "name": "Collector's Edition Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 66996,
    "description": "Collector's Edition limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 672,
    "name": "Exclusive Drake Signed Album",
    "artist": "Drake",
    "price": 51647,
    "description": "Exclusive signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 673,
    "name": "Exclusive Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 11044,
    "description": "Exclusive cap merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 674,
    "name": "Limited Edition Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 8589,
    "description": "Limited Edition cap merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 675,
    "name": "Signed J. Cole Phone Case",
    "artist": "J. Cole",
    "price": 12042,
    "description": "Signed phone case merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 676,
    "name": "Limited Edition Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 24171,
    "description": "Limited Edition backpack merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 677,
    "name": "Limited Edition Drake Hoodie",
    "artist": "Drake",
    "price": 28843,
    "description": "Limited Edition hoodie merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 678,
    "name": "Limited Edition J. Cole Hoodie",
    "artist": "J. Cole",
    "price": 28390,
    "description": "Limited Edition hoodie merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 679,
    "name": "Deluxe Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 22195,
    "description": "Deluxe vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 680,
    "name": "Deluxe Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 17221,
    "description": "Deluxe vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 681,
    "name": "Limited Edition Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 31007,
    "description": "Limited Edition hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 682,
    "name": "Signed Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 50834,
    "description": "Signed limited edition box set merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 683,
    "name": "Limited Edition Jay-Z T-Shirt",
    "artist": "Jay-Z",
    "price": 23800,
    "description": "Limited Edition t-shirt merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 684,
    "name": "Exclusive Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 9040,
    "description": "Exclusive poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 685,
    "name": "Signed Kendrick Lamar Limited Edition Box Set",
    "artist": "Kendrick Lamar",
    "price": 67348,
    "description": "Signed limited edition box set merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 686,
    "name": "Deluxe Beyonc\u00e9 Backpack",
    "artist": "Beyonc\u00e9",
    "price": 27257,
    "description": "Deluxe backpack merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 687,
    "name": "Deluxe Kanye West Backpack",
    "artist": "Kanye West",
    "price": 21356,
    "description": "Deluxe backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 688,
    "name": "Exclusive Khalid Hoodie",
    "artist": "Khalid",
    "price": 23800,
    "description": "Exclusive hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 689,
    "name": "Exclusive Ed Sheeran Backpack",
    "artist": "Ed Sheeran",
    "price": 15019,
    "description": "Exclusive backpack merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 690,
    "name": "Limited Edition Eminem Poster",
    "artist": "Eminem",
    "price": 7900,
    "description": "Limited Edition poster merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 691,
    "name": "Deluxe The Weeknd Limited Edition Box Set",
    "artist": "The Weeknd",
    "price": 50785,
    "description": "Deluxe limited edition box set merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 692,
    "name": "Limited Edition Eminem Cap",
    "artist": "Eminem",
    "price": 15933,
    "description": "Limited Edition cap merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 693,
    "name": "Collector's Edition Adele Backpack",
    "artist": "Adele",
    "price": 16633,
    "description": "Collector's Edition backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 694,
    "name": "Collector's Edition Eminem Vinyl",
    "artist": "Eminem",
    "price": 22512,
    "description": "Collector's Edition vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 695,
    "name": "Signed Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 41517,
    "description": "Signed signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 696,
    "name": "Deluxe Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 25014,
    "description": "Deluxe hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 697,
    "name": "Collector's Edition Beyonc\u00e9 T-Shirt",
    "artist": "Beyonc\u00e9",
    "price": 15080,
    "description": "Collector's Edition t-shirt merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 698,
    "name": "Signed Adele Backpack",
    "artist": "Adele",
    "price": 20334,
    "description": "Signed backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 699,
    "name": "Exclusive Drake Signed Album",
    "artist": "Drake",
    "price": 36633,
    "description": "Exclusive signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 700,
    "name": "Collector's Edition The Weeknd Hoodie",
    "artist": "The Weeknd",
    "price": 25557,
    "description": "Collector's Edition hoodie merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 701,
    "name": "Limited Edition The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 14317,
    "description": "Limited Edition cap merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 702,
    "name": "Limited Edition Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 18016,
    "description": "Limited Edition vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 703,
    "name": "Deluxe Eminem T-Shirt",
    "artist": "Eminem",
    "price": 21657,
    "description": "Deluxe t-shirt merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 704,
    "name": "Collector's Edition Kanye West Sneakers",
    "artist": "Kanye West",
    "price": 32681,
    "description": "Collector's Edition sneakers merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 705,
    "name": "Exclusive Dr. Dre Cap",
    "artist": "Dr. Dre",
    "price": 16728,
    "description": "Exclusive cap merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 706,
    "name": "Deluxe Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 24479,
    "description": "Deluxe hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 707,
    "name": "Exclusive Eminem T-Shirt",
    "artist": "Eminem",
    "price": 14023,
    "description": "Exclusive t-shirt merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 708,
    "name": "Limited Edition Lil Wayne Phone Case",
    "artist": "Lil Wayne",
    "price": 11925,
    "description": "Limited Edition phone case merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 709,
    "name": "Exclusive Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 18810,
    "description": "Exclusive hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 710,
    "name": "Limited Edition Beyonc\u00e9 Hoodie",
    "artist": "Beyonc\u00e9",
    "price": 21914,
    "description": "Limited Edition hoodie merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 711,
    "name": "Collector's Edition Billie Eilish Poster",
    "artist": "Billie Eilish",
    "price": 9608,
    "description": "Collector's Edition poster merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 712,
    "name": "Collector's Edition Taylor Swift Hoodie",
    "artist": "Taylor Swift",
    "price": 25952,
    "description": "Collector's Edition hoodie merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 713,
    "name": "Exclusive Travis Scott T-Shirt",
    "artist": "Travis Scott",
    "price": 18663,
    "description": "Exclusive t-shirt merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 714,
    "name": "Exclusive Adele Sneakers",
    "artist": "Adele",
    "price": 30631,
    "description": "Exclusive sneakers merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 715,
    "name": "Limited Edition Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 18771,
    "description": "Limited Edition vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 716,
    "name": "Deluxe Ed Sheeran Backpack",
    "artist": "Ed Sheeran",
    "price": 21626,
    "description": "Deluxe backpack merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 717,
    "name": "Exclusive Jay-Z Phone Case",
    "artist": "Jay-Z",
    "price": 8187,
    "description": "Exclusive phone case merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 718,
    "name": "Collector's Edition Lil Wayne Signed Album",
    "artist": "Lil Wayne",
    "price": 38899,
    "description": "Collector's Edition signed album merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 719,
    "name": "Collector's Edition Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 28632,
    "description": "Collector's Edition vinyl merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 720,
    "name": "Exclusive Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 16080,
    "description": "Exclusive cap merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 721,
    "name": "Collector's Edition Travis Scott Backpack",
    "artist": "Travis Scott",
    "price": 19639,
    "description": "Collector's Edition backpack merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 722,
    "name": "Exclusive Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 21318,
    "description": "Exclusive hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 723,
    "name": "Collector's Edition Khalid Backpack",
    "artist": "Khalid",
    "price": 24627,
    "description": "Collector's Edition backpack merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 724,
    "name": "Exclusive Beyonc\u00e9 Phone Case",
    "artist": "Beyonc\u00e9",
    "price": 10496,
    "description": "Exclusive phone case merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 725,
    "name": "Exclusive Eminem Vinyl",
    "artist": "Eminem",
    "price": 19400,
    "description": "Exclusive vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 726,
    "name": "Exclusive Khalid Vinyl",
    "artist": "Khalid",
    "price": 25007,
    "description": "Exclusive vinyl merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 727,
    "name": "Signed Rihanna Sneakers",
    "artist": "Rihanna",
    "price": 43119,
    "description": "Signed sneakers merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 728,
    "name": "Deluxe Taylor Swift Limited Edition Box Set",
    "artist": "Taylor Swift",
    "price": 54316,
    "description": "Deluxe limited edition box set merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 729,
    "name": "Collector's Edition Drake Vinyl",
    "artist": "Drake",
    "price": 16636,
    "description": "Collector's Edition vinyl merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 730,
    "name": "Collector's Edition Travis Scott Sneakers",
    "artist": "Travis Scott",
    "price": 32611,
    "description": "Collector's Edition sneakers merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 731,
    "name": "Collector's Edition Lil Wayne Signed Album",
    "artist": "Lil Wayne",
    "price": 45570,
    "description": "Collector's Edition signed album merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 732,
    "name": "Deluxe Billie Eilish T-Shirt",
    "artist": "Billie Eilish",
    "price": 18828,
    "description": "Deluxe t-shirt merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 733,
    "name": "Limited Edition Post Malone Limited Edition Box Set",
    "artist": "Post Malone",
    "price": 55076,
    "description": "Limited Edition limited edition box set merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 734,
    "name": "Signed Billie Eilish T-Shirt",
    "artist": "Billie Eilish",
    "price": 20460,
    "description": "Signed t-shirt merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 735,
    "name": "Collector's Edition Imagine Dragons Hoodie",
    "artist": "Imagine Dragons",
    "price": 24079,
    "description": "Collector's Edition hoodie merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 736,
    "name": "Collector's Edition Jay-Z Poster",
    "artist": "Jay-Z",
    "price": 10477,
    "description": "Collector's Edition poster merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 737,
    "name": "Collector's Edition J. Cole Limited Edition Box Set",
    "artist": "J. Cole",
    "price": 66707,
    "description": "Collector's Edition limited edition box set merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 738,
    "name": "Deluxe Imagine Dragons Signed Album",
    "artist": "Imagine Dragons",
    "price": 45749,
    "description": "Deluxe signed album merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 739,
    "name": "Collector's Edition J. Cole Cap",
    "artist": "J. Cole",
    "price": 14163,
    "description": "Collector's Edition cap merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 740,
    "name": "Limited Edition The Weeknd Phone Case",
    "artist": "The Weeknd",
    "price": 9919,
    "description": "Limited Edition phone case merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 741,
    "name": "Exclusive Dr. Dre Signed Album",
    "artist": "Dr. Dre",
    "price": 54761,
    "description": "Exclusive signed album merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 742,
    "name": "Limited Edition Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 27858,
    "description": "Limited Edition vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 743,
    "name": "Signed Ed Sheeran Backpack",
    "artist": "Ed Sheeran",
    "price": 15750,
    "description": "Signed backpack merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 744,
    "name": "Limited Edition Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 51519,
    "description": "Limited Edition signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 745,
    "name": "Exclusive The Weeknd Backpack",
    "artist": "The Weeknd",
    "price": 25661,
    "description": "Exclusive backpack merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 746,
    "name": "Deluxe Post Malone Limited Edition Box Set",
    "artist": "Post Malone",
    "price": 67845,
    "description": "Deluxe limited edition box set merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 747,
    "name": "Collector's Edition Jay-Z Hoodie",
    "artist": "Jay-Z",
    "price": 25349,
    "description": "Collector's Edition hoodie merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 748,
    "name": "Deluxe Beyonc\u00e9 Sneakers",
    "artist": "Beyonc\u00e9",
    "price": 40796,
    "description": "Deluxe sneakers merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 749,
    "name": "Deluxe Beyonc\u00e9 Signed Album",
    "artist": "Beyonc\u00e9",
    "price": 54372,
    "description": "Deluxe signed album merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 750,
    "name": "Limited Edition Eminem Hoodie",
    "artist": "Eminem",
    "price": 18484,
    "description": "Limited Edition hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 751,
    "name": "Deluxe Taylor Swift Backpack",
    "artist": "Taylor Swift",
    "price": 18870,
    "description": "Deluxe backpack merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 752,
    "name": "Collector's Edition J. Cole Poster",
    "artist": "J. Cole",
    "price": 8881,
    "description": "Collector's Edition poster merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 753,
    "name": "Deluxe Khalid Poster",
    "artist": "Khalid",
    "price": 11117,
    "description": "Deluxe poster merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 754,
    "name": "Limited Edition Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 18300,
    "description": "Limited Edition vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 755,
    "name": "Signed Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 11102,
    "description": "Signed phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 756,
    "name": "Collector's Edition Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 17716,
    "description": "Collector's Edition backpack merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 757,
    "name": "Signed Eminem Hoodie",
    "artist": "Eminem",
    "price": 32447,
    "description": "Signed hoodie merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 758,
    "name": "Collector's Edition Eminem T-Shirt",
    "artist": "Eminem",
    "price": 16683,
    "description": "Collector's Edition t-shirt merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 759,
    "name": "Limited Edition Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 10855,
    "description": "Limited Edition poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 760,
    "name": "Deluxe Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 15619,
    "description": "Deluxe backpack merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 761,
    "name": "Signed Imagine Dragons Poster",
    "artist": "Imagine Dragons",
    "price": 9032,
    "description": "Signed poster merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 762,
    "name": "Signed J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 18683,
    "description": "Signed t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 763,
    "name": "Deluxe Eminem T-Shirt",
    "artist": "Eminem",
    "price": 24237,
    "description": "Deluxe t-shirt merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 764,
    "name": "Exclusive Lil Wayne T-Shirt",
    "artist": "Lil Wayne",
    "price": 22474,
    "description": "Exclusive t-shirt merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 765,
    "name": "Limited Edition The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 11801,
    "description": "Limited Edition poster merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 766,
    "name": "Signed Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 16270,
    "description": "Signed cap merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 767,
    "name": "Deluxe Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 69617,
    "description": "Deluxe limited edition box set merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 768,
    "name": "Limited Edition Imagine Dragons Phone Case",
    "artist": "Imagine Dragons",
    "price": 10936,
    "description": "Limited Edition phone case merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 769,
    "name": "Collector's Edition Lil Wayne Phone Case",
    "artist": "Lil Wayne",
    "price": 12587,
    "description": "Collector's Edition phone case merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 770,
    "name": "Signed Imagine Dragons Vinyl",
    "artist": "Imagine Dragons",
    "price": 23077,
    "description": "Signed vinyl merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 771,
    "name": "Limited Edition Ed Sheeran Sneakers",
    "artist": "Ed Sheeran",
    "price": 31714,
    "description": "Limited Edition sneakers merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 772,
    "name": "Collector's Edition Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 47723,
    "description": "Collector's Edition limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 773,
    "name": "Collector's Edition Billie Eilish Phone Case",
    "artist": "Billie Eilish",
    "price": 9949,
    "description": "Collector's Edition phone case merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 774,
    "name": "Limited Edition Nicki Minaj Hoodie",
    "artist": "Nicki Minaj",
    "price": 27229,
    "description": "Limited Edition hoodie merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 775,
    "name": "Deluxe Nicki Minaj Limited Edition Box Set",
    "artist": "Nicki Minaj",
    "price": 50173,
    "description": "Deluxe limited edition box set merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 776,
    "name": "Limited Edition Drake Signed Album",
    "artist": "Drake",
    "price": 56271,
    "description": "Limited Edition signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 777,
    "name": "Deluxe J. Cole Backpack",
    "artist": "J. Cole",
    "price": 27563,
    "description": "Deluxe backpack merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 778,
    "name": "Limited Edition Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 67626,
    "description": "Limited Edition limited edition box set merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 779,
    "name": "Limited Edition Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 19390,
    "description": "Limited Edition vinyl merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 780,
    "name": "Deluxe Jay-Z Sneakers",
    "artist": "Jay-Z",
    "price": 40980,
    "description": "Deluxe sneakers merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 781,
    "name": "Signed Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 23446,
    "description": "Signed vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 782,
    "name": "Exclusive Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 56164,
    "description": "Exclusive limited edition box set merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 783,
    "name": "Deluxe Imagine Dragons T-Shirt",
    "artist": "Imagine Dragons",
    "price": 19521,
    "description": "Deluxe t-shirt merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 784,
    "name": "Collector's Edition Jay-Z Poster",
    "artist": "Jay-Z",
    "price": 11358,
    "description": "Collector's Edition poster merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 785,
    "name": "Collector's Edition Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 15742,
    "description": "Collector's Edition t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 786,
    "name": "Limited Edition Rihanna Sneakers",
    "artist": "Rihanna",
    "price": 44230,
    "description": "Limited Edition sneakers merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 787,
    "name": "Deluxe Kanye West Backpack",
    "artist": "Kanye West",
    "price": 17154,
    "description": "Deluxe backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 788,
    "name": "Signed Drake Signed Album",
    "artist": "Drake",
    "price": 41379,
    "description": "Signed signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 789,
    "name": "Signed Kanye West Hoodie",
    "artist": "Kanye West",
    "price": 28976,
    "description": "Signed hoodie merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 790,
    "name": "Deluxe Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 21179,
    "description": "Deluxe t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 791,
    "name": "Deluxe Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 8492,
    "description": "Deluxe poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 792,
    "name": "Collector's Edition Khalid Cap",
    "artist": "Khalid",
    "price": 16521,
    "description": "Collector's Edition cap merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 793,
    "name": "Collector's Edition Rihanna Hoodie",
    "artist": "Rihanna",
    "price": 23820,
    "description": "Collector's Edition hoodie merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 794,
    "name": "Exclusive J. Cole Limited Edition Box Set",
    "artist": "J. Cole",
    "price": 60957,
    "description": "Exclusive limited edition box set merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 795,
    "name": "Limited Edition Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 36308,
    "description": "Limited Edition sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 796,
    "name": "Exclusive Post Malone Limited Edition Box Set",
    "artist": "Post Malone",
    "price": 40079,
    "description": "Exclusive limited edition box set merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 797,
    "name": "Exclusive Kanye West Cap",
    "artist": "Kanye West",
    "price": 16950,
    "description": "Exclusive cap merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 798,
    "name": "Signed Eminem Cap",
    "artist": "Eminem",
    "price": 15262,
    "description": "Signed cap merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 799,
    "name": "Signed Imagine Dragons Backpack",
    "artist": "Imagine Dragons",
    "price": 18285,
    "description": "Signed backpack merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 800,
    "name": "Signed Adele Cap",
    "artist": "Adele",
    "price": 13770,
    "description": "Signed cap merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 801,
    "name": "Deluxe Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 29100,
    "description": "Deluxe vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 802,
    "name": "Exclusive Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 20154,
    "description": "Exclusive hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 803,
    "name": "Limited Edition Dr. Dre Signed Album",
    "artist": "Dr. Dre",
    "price": 46028,
    "description": "Limited Edition signed album merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 804,
    "name": "Exclusive The Weeknd Poster",
    "artist": "The Weeknd",
    "price": 8149,
    "description": "Exclusive poster merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 805,
    "name": "Limited Edition Kendrick Lamar Hoodie",
    "artist": "Kendrick Lamar",
    "price": 24129,
    "description": "Limited Edition hoodie merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 806,
    "name": "Collector's Edition Nicki Minaj Cap",
    "artist": "Nicki Minaj",
    "price": 12662,
    "description": "Collector's Edition cap merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 807,
    "name": "Limited Edition Drake Phone Case",
    "artist": "Drake",
    "price": 8382,
    "description": "Limited Edition phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 808,
    "name": "Exclusive Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 40576,
    "description": "Exclusive limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 809,
    "name": "Exclusive Ed Sheeran Hoodie",
    "artist": "Ed Sheeran",
    "price": 19144,
    "description": "Exclusive hoodie merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 810,
    "name": "Limited Edition Eminem Sneakers",
    "artist": "Eminem",
    "price": 33600,
    "description": "Limited Edition sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 811,
    "name": "Deluxe Nicki Minaj T-Shirt",
    "artist": "Nicki Minaj",
    "price": 20945,
    "description": "Deluxe t-shirt merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 812,
    "name": "Limited Edition Kanye West Poster",
    "artist": "Kanye West",
    "price": 11971,
    "description": "Limited Edition poster merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 813,
    "name": "Limited Edition Post Malone Phone Case",
    "artist": "Post Malone",
    "price": 8539,
    "description": "Limited Edition phone case merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 814,
    "name": "Exclusive Travis Scott Hoodie",
    "artist": "Travis Scott",
    "price": 34220,
    "description": "Exclusive hoodie merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 815,
    "name": "Deluxe Ed Sheeran T-Shirt",
    "artist": "Ed Sheeran",
    "price": 12731,
    "description": "Deluxe t-shirt merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 816,
    "name": "Limited Edition Jay-Z Limited Edition Box Set",
    "artist": "Jay-Z",
    "price": 41418,
    "description": "Limited Edition limited edition box set merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 817,
    "name": "Limited Edition Nicki Minaj T-Shirt",
    "artist": "Nicki Minaj",
    "price": 17886,
    "description": "Limited Edition t-shirt merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 818,
    "name": "Signed J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 16707,
    "description": "Signed t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 819,
    "name": "Signed Taylor Swift Phone Case",
    "artist": "Taylor Swift",
    "price": 11462,
    "description": "Signed phone case merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 820,
    "name": "Exclusive Taylor Swift Vinyl",
    "artist": "Taylor Swift",
    "price": 26153,
    "description": "Exclusive vinyl merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 821,
    "name": "Deluxe Lil Wayne Backpack",
    "artist": "Lil Wayne",
    "price": 22005,
    "description": "Deluxe backpack merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 822,
    "name": "Signed Eminem Limited Edition Box Set",
    "artist": "Eminem",
    "price": 57242,
    "description": "Signed limited edition box set merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 823,
    "name": "Collector's Edition J. Cole Poster",
    "artist": "J. Cole",
    "price": 10311,
    "description": "Collector's Edition poster merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 824,
    "name": "Deluxe Beyonc\u00e9 Sneakers",
    "artist": "Beyonc\u00e9",
    "price": 37273,
    "description": "Deluxe sneakers merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 825,
    "name": "Exclusive Khalid Poster",
    "artist": "Khalid",
    "price": 11757,
    "description": "Exclusive poster merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 826,
    "name": "Deluxe Jay-Z Backpack",
    "artist": "Jay-Z",
    "price": 26820,
    "description": "Deluxe backpack merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 827,
    "name": "Exclusive Adele Limited Edition Box Set",
    "artist": "Adele",
    "price": 60660,
    "description": "Exclusive limited edition box set merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 828,
    "name": "Limited Edition J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 23884,
    "description": "Limited Edition vinyl merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 829,
    "name": "Collector's Edition Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 18673,
    "description": "Collector's Edition vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 830,
    "name": "Collector's Edition Rihanna Phone Case",
    "artist": "Rihanna",
    "price": 9257,
    "description": "Collector's Edition phone case merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 831,
    "name": "Collector's Edition Beyonc\u00e9 T-Shirt",
    "artist": "Beyonc\u00e9",
    "price": 24393,
    "description": "Collector's Edition t-shirt merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 832,
    "name": "Exclusive Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 51190,
    "description": "Exclusive limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 833,
    "name": "Signed Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 49912,
    "description": "Signed limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 834,
    "name": "Limited Edition Post Malone Vinyl",
    "artist": "Post Malone",
    "price": 25357,
    "description": "Limited Edition vinyl merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 835,
    "name": "Exclusive Taylor Swift Backpack",
    "artist": "Taylor Swift",
    "price": 17717,
    "description": "Exclusive backpack merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 836,
    "name": "Signed Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 41852,
    "description": "Signed limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 837,
    "name": "Signed Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 25561,
    "description": "Signed vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 838,
    "name": "Collector's Edition Rihanna Cap",
    "artist": "Rihanna",
    "price": 14476,
    "description": "Collector's Edition cap merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 839,
    "name": "Exclusive J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 23409,
    "description": "Exclusive t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 840,
    "name": "Exclusive Khalid Cap",
    "artist": "Khalid",
    "price": 9168,
    "description": "Exclusive cap merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 841,
    "name": "Limited Edition Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 62418,
    "description": "Limited Edition limited edition box set merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 842,
    "name": "Limited Edition Rihanna Cap",
    "artist": "Rihanna",
    "price": 8176,
    "description": "Limited Edition cap merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 843,
    "name": "Collector's Edition Drake Vinyl",
    "artist": "Drake",
    "price": 17913,
    "description": "Collector's Edition vinyl merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 844,
    "name": "Signed Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 26439,
    "description": "Signed sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 845,
    "name": "Exclusive Jay-Z Backpack",
    "artist": "Jay-Z",
    "price": 22106,
    "description": "Exclusive backpack merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 846,
    "name": "Collector's Edition Ed Sheeran Hoodie",
    "artist": "Ed Sheeran",
    "price": 23584,
    "description": "Collector's Edition hoodie merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 847,
    "name": "Deluxe J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 20723,
    "description": "Deluxe vinyl merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 848,
    "name": "Limited Edition Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 44812,
    "description": "Limited Edition sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 849,
    "name": "Limited Edition Drake Phone Case",
    "artist": "Drake",
    "price": 12244,
    "description": "Limited Edition phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 850,
    "name": "Exclusive Beyonc\u00e9 Limited Edition Box Set",
    "artist": "Beyonc\u00e9",
    "price": 41678,
    "description": "Exclusive limited edition box set merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 851,
    "name": "Deluxe Billie Eilish Hoodie",
    "artist": "Billie Eilish",
    "price": 25837,
    "description": "Deluxe hoodie merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 852,
    "name": "Collector's Edition Imagine Dragons T-Shirt",
    "artist": "Imagine Dragons",
    "price": 16330,
    "description": "Collector's Edition t-shirt merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 853,
    "name": "Limited Edition The Weeknd Cap",
    "artist": "The Weeknd",
    "price": 13918,
    "description": "Limited Edition cap merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 854,
    "name": "Signed Eminem Backpack",
    "artist": "Eminem",
    "price": 26199,
    "description": "Signed backpack merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 855,
    "name": "Deluxe Khalid Backpack",
    "artist": "Khalid",
    "price": 27207,
    "description": "Deluxe backpack merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 856,
    "name": "Collector's Edition Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 50038,
    "description": "Collector's Edition limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 857,
    "name": "Signed Eminem Vinyl",
    "artist": "Eminem",
    "price": 22536,
    "description": "Signed vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 858,
    "name": "Deluxe Beyonc\u00e9 Hoodie",
    "artist": "Beyonc\u00e9",
    "price": 34593,
    "description": "Deluxe hoodie merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 859,
    "name": "Collector's Edition J. Cole Signed Album",
    "artist": "J. Cole",
    "price": 55901,
    "description": "Collector's Edition signed album merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 860,
    "name": "Exclusive The Weeknd Limited Edition Box Set",
    "artist": "The Weeknd",
    "price": 60487,
    "description": "Exclusive limited edition box set merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 861,
    "name": "Exclusive J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 16473,
    "description": "Exclusive vinyl merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 862,
    "name": "Collector's Edition Ed Sheeran Cap",
    "artist": "Ed Sheeran",
    "price": 8376,
    "description": "Collector's Edition cap merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 863,
    "name": "Exclusive Taylor Swift Hoodie",
    "artist": "Taylor Swift",
    "price": 29050,
    "description": "Exclusive hoodie merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 864,
    "name": "Collector's Edition Kendrick Lamar Hoodie",
    "artist": "Kendrick Lamar",
    "price": 30175,
    "description": "Collector's Edition hoodie merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 865,
    "name": "Signed Kanye West Signed Album",
    "artist": "Kanye West",
    "price": 45684,
    "description": "Signed signed album merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 866,
    "name": "Signed Billie Eilish Phone Case",
    "artist": "Billie Eilish",
    "price": 9485,
    "description": "Signed phone case merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 867,
    "name": "Deluxe The Weeknd Backpack",
    "artist": "The Weeknd",
    "price": 22159,
    "description": "Deluxe backpack merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 868,
    "name": "Collector's Edition Billie Eilish Hoodie",
    "artist": "Billie Eilish",
    "price": 30757,
    "description": "Collector's Edition hoodie merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 869,
    "name": "Deluxe Nicki Minaj Hoodie",
    "artist": "Nicki Minaj",
    "price": 25481,
    "description": "Deluxe hoodie merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 870,
    "name": "Signed Post Malone Phone Case",
    "artist": "Post Malone",
    "price": 9251,
    "description": "Signed phone case merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 871,
    "name": "Signed Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 21279,
    "description": "Signed t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 872,
    "name": "Exclusive Post Malone Hoodie",
    "artist": "Post Malone",
    "price": 33887,
    "description": "Exclusive hoodie merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 873,
    "name": "Collector's Edition Billie Eilish Backpack",
    "artist": "Billie Eilish",
    "price": 21046,
    "description": "Collector's Edition backpack merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 874,
    "name": "Signed Drake Hoodie",
    "artist": "Drake",
    "price": 20267,
    "description": "Signed hoodie merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 875,
    "name": "Limited Edition Dr. Dre Hoodie",
    "artist": "Dr. Dre",
    "price": 32803,
    "description": "Limited Edition hoodie merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 876,
    "name": "Collector's Edition Kanye West Hoodie",
    "artist": "Kanye West",
    "price": 27571,
    "description": "Collector's Edition hoodie merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 877,
    "name": "Deluxe Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 53295,
    "description": "Deluxe limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 878,
    "name": "Signed Jay-Z Cap",
    "artist": "Jay-Z",
    "price": 17712,
    "description": "Signed cap merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 879,
    "name": "Deluxe Rihanna Backpack",
    "artist": "Rihanna",
    "price": 26476,
    "description": "Deluxe backpack merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 880,
    "name": "Collector's Edition Lil Wayne Poster",
    "artist": "Lil Wayne",
    "price": 6718,
    "description": "Collector's Edition poster merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 881,
    "name": "Deluxe Nicki Minaj Phone Case",
    "artist": "Nicki Minaj",
    "price": 12026,
    "description": "Deluxe phone case merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 882,
    "name": "Limited Edition Adele Poster",
    "artist": "Adele",
    "price": 6726,
    "description": "Limited Edition poster merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 883,
    "name": "Deluxe Ed Sheeran Limited Edition Box Set",
    "artist": "Ed Sheeran",
    "price": 55965,
    "description": "Deluxe limited edition box set merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 884,
    "name": "Limited Edition The Weeknd T-Shirt",
    "artist": "The Weeknd",
    "price": 22431,
    "description": "Limited Edition t-shirt merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 885,
    "name": "Collector's Edition Kanye West Sneakers",
    "artist": "Kanye West",
    "price": 44055,
    "description": "Collector's Edition sneakers merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 886,
    "name": "Deluxe Khalid Limited Edition Box Set",
    "artist": "Khalid",
    "price": 40395,
    "description": "Deluxe limited edition box set merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 887,
    "name": "Exclusive Eminem T-Shirt",
    "artist": "Eminem",
    "price": 14885,
    "description": "Exclusive t-shirt merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 888,
    "name": "Exclusive Nicki Minaj Hoodie",
    "artist": "Nicki Minaj",
    "price": 31369,
    "description": "Exclusive hoodie merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 889,
    "name": "Deluxe Jay-Z Signed Album",
    "artist": "Jay-Z",
    "price": 43351,
    "description": "Deluxe signed album merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 890,
    "name": "Exclusive Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 47093,
    "description": "Exclusive limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 891,
    "name": "Signed Adele Backpack",
    "artist": "Adele",
    "price": 26352,
    "description": "Signed backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 892,
    "name": "Exclusive Adele T-Shirt",
    "artist": "Adele",
    "price": 24069,
    "description": "Exclusive t-shirt merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 893,
    "name": "Signed Lil Wayne Limited Edition Box Set",
    "artist": "Lil Wayne",
    "price": 44626,
    "description": "Signed limited edition box set merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 894,
    "name": "Signed Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 19987,
    "description": "Signed t-shirt merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 895,
    "name": "Deluxe Eminem Sneakers",
    "artist": "Eminem",
    "price": 42988,
    "description": "Deluxe sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 896,
    "name": "Exclusive Eminem Vinyl",
    "artist": "Eminem",
    "price": 22988,
    "description": "Exclusive vinyl merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 897,
    "name": "Signed J. Cole Poster",
    "artist": "J. Cole",
    "price": 8734,
    "description": "Signed poster merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 898,
    "name": "Deluxe Billie Eilish Limited Edition Box Set",
    "artist": "Billie Eilish",
    "price": 47792,
    "description": "Deluxe limited edition box set merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 899,
    "name": "Limited Edition Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 19548,
    "description": "Limited Edition hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 900,
    "name": "Exclusive J. Cole Vinyl",
    "artist": "J. Cole",
    "price": 22082,
    "description": "Exclusive vinyl merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 901,
    "name": "Signed Rihanna Cap",
    "artist": "Rihanna",
    "price": 15235,
    "description": "Signed cap merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 902,
    "name": "Signed Khalid Phone Case",
    "artist": "Khalid",
    "price": 12832,
    "description": "Signed phone case merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 903,
    "name": "Limited Edition Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 20358,
    "description": "Limited Edition vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 904,
    "name": "Exclusive Drake T-Shirt",
    "artist": "Drake",
    "price": 14351,
    "description": "Exclusive t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 905,
    "name": "Exclusive Ed Sheeran Signed Album",
    "artist": "Ed Sheeran",
    "price": 43297,
    "description": "Exclusive signed album merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 906,
    "name": "Exclusive Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 33450,
    "description": "Exclusive hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 907,
    "name": "Collector's Edition Dr. Dre Sneakers",
    "artist": "Dr. Dre",
    "price": 43785,
    "description": "Collector's Edition sneakers merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 908,
    "name": "Deluxe Kendrick Lamar T-Shirt",
    "artist": "Kendrick Lamar",
    "price": 22648,
    "description": "Deluxe t-shirt merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 909,
    "name": "Limited Edition Adele Backpack",
    "artist": "Adele",
    "price": 22603,
    "description": "Limited Edition backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 910,
    "name": "Limited Edition Kanye West Limited Edition Box Set",
    "artist": "Kanye West",
    "price": 52928,
    "description": "Limited Edition limited edition box set merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 911,
    "name": "Collector's Edition Nicki Minaj T-Shirt",
    "artist": "Nicki Minaj",
    "price": 13876,
    "description": "Collector's Edition t-shirt merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 912,
    "name": "Deluxe J. Cole Sneakers",
    "artist": "J. Cole",
    "price": 43899,
    "description": "Deluxe sneakers merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 913,
    "name": "Deluxe Ed Sheeran Poster",
    "artist": "Ed Sheeran",
    "price": 10736,
    "description": "Deluxe poster merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 914,
    "name": "Deluxe Kanye West Cap",
    "artist": "Kanye West",
    "price": 11600,
    "description": "Deluxe cap merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 915,
    "name": "Exclusive Nicki Minaj Sneakers",
    "artist": "Nicki Minaj",
    "price": 31946,
    "description": "Exclusive sneakers merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 916,
    "name": "Signed Dr. Dre Vinyl",
    "artist": "Dr. Dre",
    "price": 24682,
    "description": "Signed vinyl merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 917,
    "name": "Signed Jay-Z Vinyl",
    "artist": "Jay-Z",
    "price": 18159,
    "description": "Signed vinyl merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 918,
    "name": "Limited Edition Travis Scott Sneakers",
    "artist": "Travis Scott",
    "price": 37423,
    "description": "Limited Edition sneakers merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 919,
    "name": "Signed Beyonc\u00e9 Limited Edition Box Set",
    "artist": "Beyonc\u00e9",
    "price": 57692,
    "description": "Signed limited edition box set merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 920,
    "name": "Signed Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 26326,
    "description": "Signed sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 921,
    "name": "Exclusive Ed Sheeran Signed Album",
    "artist": "Ed Sheeran",
    "price": 54618,
    "description": "Exclusive signed album merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 922,
    "name": "Collector's Edition Drake Phone Case",
    "artist": "Drake",
    "price": 12924,
    "description": "Collector's Edition phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 923,
    "name": "Exclusive Rihanna T-Shirt",
    "artist": "Rihanna",
    "price": 21557,
    "description": "Exclusive t-shirt merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 924,
    "name": "Collector's Edition Drake Signed Album",
    "artist": "Drake",
    "price": 53165,
    "description": "Collector's Edition signed album merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 925,
    "name": "Limited Edition Adele Sneakers",
    "artist": "Adele",
    "price": 35178,
    "description": "Limited Edition sneakers merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 926,
    "name": "Collector's Edition Post Malone Backpack",
    "artist": "Post Malone",
    "price": 22203,
    "description": "Collector's Edition backpack merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 927,
    "name": "Exclusive Imagine Dragons Cap",
    "artist": "Imagine Dragons",
    "price": 14455,
    "description": "Exclusive cap merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 928,
    "name": "Collector's Edition Adele Backpack",
    "artist": "Adele",
    "price": 15354,
    "description": "Collector's Edition backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 929,
    "name": "Limited Edition Kanye West Backpack",
    "artist": "Kanye West",
    "price": 21564,
    "description": "Limited Edition backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 930,
    "name": "Collector's Edition Adele Vinyl",
    "artist": "Adele",
    "price": 21543,
    "description": "Collector's Edition vinyl merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 931,
    "name": "Limited Edition J. Cole Limited Edition Box Set",
    "artist": "J. Cole",
    "price": 42348,
    "description": "Limited Edition limited edition box set merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 932,
    "name": "Exclusive Eminem Sneakers",
    "artist": "Eminem",
    "price": 35705,
    "description": "Exclusive sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 933,
    "name": "Collector's Edition Taylor Swift Phone Case",
    "artist": "Taylor Swift",
    "price": 7842,
    "description": "Collector's Edition phone case merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 934,
    "name": "Collector's Edition Rihanna Signed Album",
    "artist": "Rihanna",
    "price": 46420,
    "description": "Collector's Edition signed album merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 935,
    "name": "Limited Edition Drake Limited Edition Box Set",
    "artist": "Drake",
    "price": 49003,
    "description": "Limited Edition limited edition box set merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 936,
    "name": "Exclusive Rihanna Backpack",
    "artist": "Rihanna",
    "price": 22787,
    "description": "Exclusive backpack merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 937,
    "name": "Limited Edition Adele Backpack",
    "artist": "Adele",
    "price": 25917,
    "description": "Limited Edition backpack merch from Adele.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 938,
    "name": "Signed Kanye West Signed Album",
    "artist": "Kanye West",
    "price": 47157,
    "description": "Signed signed album merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 939,
    "name": "Deluxe Post Malone Signed Album",
    "artist": "Post Malone",
    "price": 50246,
    "description": "Deluxe signed album merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 940,
    "name": "Exclusive Jay-Z Vinyl",
    "artist": "Jay-Z",
    "price": 19945,
    "description": "Exclusive vinyl merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 941,
    "name": "Collector's Edition Jay-Z Vinyl",
    "artist": "Jay-Z",
    "price": 22513,
    "description": "Collector's Edition vinyl merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 942,
    "name": "Exclusive Lil Wayne Phone Case",
    "artist": "Lil Wayne",
    "price": 7692,
    "description": "Exclusive phone case merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 943,
    "name": "Signed Dr. Dre Sneakers",
    "artist": "Dr. Dre",
    "price": 27734,
    "description": "Signed sneakers merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 944,
    "name": "Collector's Edition Kendrick Lamar Cap",
    "artist": "Kendrick Lamar",
    "price": 13153,
    "description": "Collector's Edition cap merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 945,
    "name": "Collector's Edition Travis Scott Limited Edition Box Set",
    "artist": "Travis Scott",
    "price": 67141,
    "description": "Collector's Edition limited edition box set merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 946,
    "name": "Exclusive Eminem Sneakers",
    "artist": "Eminem",
    "price": 36701,
    "description": "Exclusive sneakers merch from Eminem.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 947,
    "name": "Collector's Edition Travis Scott Sneakers",
    "artist": "Travis Scott",
    "price": 29392,
    "description": "Collector's Edition sneakers merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 948,
    "name": "Exclusive Ed Sheeran T-Shirt",
    "artist": "Ed Sheeran",
    "price": 20064,
    "description": "Exclusive t-shirt merch from Ed Sheeran.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 949,
    "name": "Exclusive Travis Scott Limited Edition Box Set",
    "artist": "Travis Scott",
    "price": 51658,
    "description": "Exclusive limited edition box set merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 950,
    "name": "Collector's Edition Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 20568,
    "description": "Collector's Edition vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 951,
    "name": "Limited Edition Imagine Dragons T-Shirt",
    "artist": "Imagine Dragons",
    "price": 20720,
    "description": "Limited Edition t-shirt merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 952,
    "name": "Deluxe Travis Scott Vinyl",
    "artist": "Travis Scott",
    "price": 20692,
    "description": "Deluxe vinyl merch from Travis Scott.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 953,
    "name": "Exclusive Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 43269,
    "description": "Exclusive signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 954,
    "name": "Signed Billie Eilish Signed Album",
    "artist": "Billie Eilish",
    "price": 43806,
    "description": "Signed signed album merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 955,
    "name": "Deluxe Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 29128,
    "description": "Deluxe vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 956,
    "name": "Deluxe Khalid Backpack",
    "artist": "Khalid",
    "price": 27643,
    "description": "Deluxe backpack merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 957,
    "name": "Signed Drake T-Shirt",
    "artist": "Drake",
    "price": 17372,
    "description": "Signed t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 958,
    "name": "Collector's Edition Nicki Minaj Vinyl",
    "artist": "Nicki Minaj",
    "price": 17855,
    "description": "Collector's Edition vinyl merch from Nicki Minaj.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 959,
    "name": "Deluxe Beyonc\u00e9 Poster",
    "artist": "Beyonc\u00e9",
    "price": 11357,
    "description": "Deluxe poster merch from Beyonc\u00e9.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 960,
    "name": "Limited Edition Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 24449,
    "description": "Limited Edition vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 961,
    "name": "Exclusive Billie Eilish Cap",
    "artist": "Billie Eilish",
    "price": 11116,
    "description": "Exclusive cap merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 962,
    "name": "Limited Edition Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 25174,
    "description": "Limited Edition vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 963,
    "name": "Exclusive Rihanna Limited Edition Box Set",
    "artist": "Rihanna",
    "price": 61140,
    "description": "Exclusive limited edition box set merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 964,
    "name": "Deluxe Taylor Swift Limited Edition Box Set",
    "artist": "Taylor Swift",
    "price": 50621,
    "description": "Deluxe limited edition box set merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 965,
    "name": "Deluxe Kanye West Backpack",
    "artist": "Kanye West",
    "price": 26291,
    "description": "Deluxe backpack merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 966,
    "name": "Exclusive Khalid Hoodie",
    "artist": "Khalid",
    "price": 34707,
    "description": "Exclusive hoodie merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 967,
    "name": "Signed J. Cole T-Shirt",
    "artist": "J. Cole",
    "price": 19966,
    "description": "Signed t-shirt merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 968,
    "name": "Limited Edition Imagine Dragons Backpack",
    "artist": "Imagine Dragons",
    "price": 16617,
    "description": "Limited Edition backpack merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 969,
    "name": "Exclusive Kanye West Poster",
    "artist": "Kanye West",
    "price": 6279,
    "description": "Exclusive poster merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 970,
    "name": "Deluxe Jay-Z T-Shirt",
    "artist": "Jay-Z",
    "price": 22401,
    "description": "Deluxe t-shirt merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 971,
    "name": "Collector's Edition Billie Eilish Sneakers",
    "artist": "Billie Eilish",
    "price": 37696,
    "description": "Collector's Edition sneakers merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 972,
    "name": "Collector's Edition Dr. Dre Poster",
    "artist": "Dr. Dre",
    "price": 7413,
    "description": "Collector's Edition poster merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 973,
    "name": "Deluxe Imagine Dragons T-Shirt",
    "artist": "Imagine Dragons",
    "price": 18475,
    "description": "Deluxe t-shirt merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 974,
    "name": "Limited Edition Taylor Swift Backpack",
    "artist": "Taylor Swift",
    "price": 16142,
    "description": "Limited Edition backpack merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 975,
    "name": "Collector's Edition Lil Wayne Cap",
    "artist": "Lil Wayne",
    "price": 9512,
    "description": "Collector's Edition cap merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 976,
    "name": "Exclusive Billie Eilish Vinyl",
    "artist": "Billie Eilish",
    "price": 15220,
    "description": "Exclusive vinyl merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 977,
    "name": "Deluxe Rihanna Vinyl",
    "artist": "Rihanna",
    "price": 25692,
    "description": "Deluxe vinyl merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 978,
    "name": "Deluxe Billie Eilish Poster",
    "artist": "Billie Eilish",
    "price": 10251,
    "description": "Deluxe poster merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 979,
    "name": "Collector's Edition Khalid Phone Case",
    "artist": "Khalid",
    "price": 11875,
    "description": "Collector's Edition phone case merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 980,
    "name": "Limited Edition J. Cole Backpack",
    "artist": "J. Cole",
    "price": 23266,
    "description": "Limited Edition backpack merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 981,
    "name": "Signed Taylor Swift Poster",
    "artist": "Taylor Swift",
    "price": 7034,
    "description": "Signed poster merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 982,
    "name": "Limited Edition Drake T-Shirt",
    "artist": "Drake",
    "price": 21699,
    "description": "Limited Edition t-shirt merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 983,
    "name": "Collector's Edition Dr. Dre Backpack",
    "artist": "Dr. Dre",
    "price": 20649,
    "description": "Collector's Edition backpack merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 984,
    "name": "Signed Jay-Z Limited Edition Box Set",
    "artist": "Jay-Z",
    "price": 69210,
    "description": "Signed limited edition box set merch from Jay-Z.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 985,
    "name": "Exclusive Rihanna Sneakers",
    "artist": "Rihanna",
    "price": 26640,
    "description": "Exclusive sneakers merch from Rihanna.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 986,
    "name": "Deluxe The Weeknd T-Shirt",
    "artist": "The Weeknd",
    "price": 15406,
    "description": "Deluxe t-shirt merch from The Weeknd.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 987,
    "name": "Deluxe Drake Phone Case",
    "artist": "Drake",
    "price": 8372,
    "description": "Deluxe phone case merch from Drake.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 988,
    "name": "Limited Edition Kendrick Lamar Poster",
    "artist": "Kendrick Lamar",
    "price": 8716,
    "description": "Limited Edition poster merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 989,
    "name": "Exclusive J. Cole Signed Album",
    "artist": "J. Cole",
    "price": 36137,
    "description": "Exclusive signed album merch from J. Cole.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 990,
    "name": "Signed Dr. Dre Sneakers",
    "artist": "Dr. Dre",
    "price": 25741,
    "description": "Signed sneakers merch from Dr. Dre.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 991,
    "name": "Collector's Edition Billie Eilish Phone Case",
    "artist": "Billie Eilish",
    "price": 10602,
    "description": "Collector's Edition phone case merch from Billie Eilish.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 992,
    "name": "Deluxe Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 18365,
    "description": "Deluxe t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 993,
    "name": "Limited Edition Khalid Sneakers",
    "artist": "Khalid",
    "price": 30699,
    "description": "Limited Edition sneakers merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 994,
    "name": "Exclusive Imagine Dragons Sneakers",
    "artist": "Imagine Dragons",
    "price": 26515,
    "description": "Exclusive sneakers merch from Imagine Dragons.",
    "emoji": "\ud83d\uded2",
    "genre": "Rock"
  },
  {
    "id": 995,
    "name": "Signed Post Malone Poster",
    "artist": "Post Malone",
    "price": 10623,
    "description": "Signed poster merch from Post Malone.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 996,
    "name": "Signed Khalid Backpack",
    "artist": "Khalid",
    "price": 25975,
    "description": "Signed backpack merch from Khalid.",
    "emoji": "\ud83d\uded2",
    "genre": "R&B"
  },
  {
    "id": 997,
    "name": "Exclusive Kendrick Lamar Sneakers",
    "artist": "Kendrick Lamar",
    "price": 43775,
    "description": "Exclusive sneakers merch from Kendrick Lamar.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 998,
    "name": "Exclusive Taylor Swift Signed Album",
    "artist": "Taylor Swift",
    "price": 54367,
    "description": "Exclusive signed album merch from Taylor Swift.",
    "emoji": "\ud83d\uded2",
    "genre": "Pop"
  },
  {
    "id": 999,
    "name": "Limited Edition Lil Wayne Hoodie",
    "artist": "Lil Wayne",
    "price": 23658,
    "description": "Limited Edition hoodie merch from Lil Wayne.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  },
  {
    "id": 1000,
    "name": "Limited Edition Kanye West T-Shirt",
    "artist": "Kanye West",
    "price": 21269,
    "description": "Limited Edition t-shirt merch from Kanye West.",
    "emoji": "\ud83d\uded2",
    "genre": "Hip-Hop"
  }
];

module.exports = storeItems;