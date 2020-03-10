const state = {
    orderTvShowsBy: "rating",
    orderTvShowsByDesc: true,
    tvShowDisplay: "TvShowItemCard",
    tvShowsCurrentPage: 0,
    tvShows: [
        {
            "description": "As part of a deal with an intelligence agency to look for his missing brother, a renegade pilot goes on missions with an advanced battle helicopter.",
            "genre": ["Action", "Adventure", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0086662",
            "poster": "https://m.media-amazon.com/images/M/MV5BODYyY2EwNTYtMmY3Mi00MWRkLWJlYjEtNmJhMmIzNDU0ZGE4XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 6.8,
            "title": "Airwolf",
            "year": 1984
        },
        {
            "description": "Alphas is a science fiction drama focusing on a team that investigates people with supernatural abilities.",
            "genre": ["Action", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1183865",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NTIyODQ4N15BMl5BanBnXkFtZTcwNTA2MzQxOA@@._V1_UY268_CR9,0,182,268_AL_.jpg",
            "rating": 7.3,
            "title": "Alphas",
            "year": 2011
        },
        {
            "description": "Set in a future where consciousness is digitized and stored, a prisoner returns to life in a new body and must solve a mind-bending murder to win his freedom.",
            "genre": ["Action", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt2261227",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjQyOTE4NjE0M15BMl5BanBnXkFtZTgwMzcxMzY1NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.2,
            "title": "Altered Carbon",
            "year": 2018
        },
        {
            "description": "A recently released ex-convict named Shadow meets a mysterious man who calls himself 'Wednesday' and who knows more than he first seems to about Shadow's life and past.",
            "genre": ["Drama", "Fantasy", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt1898069",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY2NTUwNjUxMV5BMl5BanBnXkFtZTgwNzIxNzE5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.1,
            "title": "American Gods",
            "year": 2017
        },
        {
            "description": "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show, a hotel, a possessed farmhouse, a cult, and the apocalypse.",
            "genre": ["Drama", "Horror", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt1844624",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTIzNDM1NjkwOV5BMl5BanBnXkFtZTgwNDU4ODgxNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.1,
            "title": "American Horror Story",
            "year": 2011
        },
        {
            "description": "Ash has spent the last thirty years avoiding responsibility, maturity, and the terrors of the Evil Dead until a Deadite plague threatens to destroy all of mankind and Ash becomes mankind's only hope.",
            "genre": ["Action", "Comedy", "Fantasy"],
            "imdb": "https://www.imdb.com/title/tt4189022",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjQyNTE5MF5BMl5BanBnXkFtZTgwMjEyMjE2NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.5,
            "title": "Ash vs Evil Dead",
            "year": 2015
        },
        {
            "description": "After his hometown is destroyed and his mother is killed, young Eren Yeager vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            "genre": ["Animation", "Action", "Adventure"],
            "imdb": "https://www.imdb.com/title/tt2560140",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.8,
            "title": "Attack on Titan",
            "year": 2013
        },
        {
            "description": "After a car accident takes the life of a family member, a police detective lives two alternating parallel lives, one with his wife and one with his son. Is one of his 'realities' merely a dream?",
            "genre": ["Crime", "Drama", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt1839683",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjc2ZjJjMjctZWVlOS00YzUzLTk4ZjgtZjUwMmI3NGMxMzRhXkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_UY268_CR4,0,182,268_AL_.jpg",
            "rating": 6.5,
            "title": "Awake",
            "year": 2012
        },
        {
            "description": "The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.",
            "genre": ["Action", "Drama", "History"],
            "imdb": "https://www.imdb.com/title/tt0185906",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 9.5,
            "title": "Band of Brothers",
            "year": 2001
        },
        {
            "description": "An ex-con assumes the identity of a murdered sheriff in the small town of Banshee, Pennsylvania, where he has some unfinished business.",
            "genre": ["Action", "Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt2017109",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTkzNTA1MDI5M15BMl5BanBnXkFtZTcwNTY3NjAwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Banshee",
            "year": 2013
        },
        {
            "description": "The trials and tribulations of criminal lawyer, Jimmy McGill, in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.",
            "genre": ["Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt3032476",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.7,
            "title": "Better Call Saul",
            "year": 2015
        },
        {
            "description": "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide.",
            "genre": ["Drama", "Sci-Fi", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt2085059",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTEwYzNiMGUtNzRlYS00MTMzLTliNzgtOGUxZGZiNThlNWYwXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.9,
            "title": "Black Mirror",
            "year": 2011
        },
        {
            "description": "Forensic anthropologist Dr. Temperance 'Bones' Brennan and cocky F.B.I. Special Agent Seeley Booth build a team to investigate murders. Quite often, there isn't more to examine than rotten flesh or mere bones.",
            "genre": ["Comedy", "Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt0460627",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjA3ODMxMzM5NF5BMl5BanBnXkFtZTgwMDM1NjU0OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.9,
            "title": "Bones",
            "year": 2005
        },
        {
            "description": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
            "genre": ["Crime", "Drama", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt0903747",
            "poster": "https://m.media-amazon.com/images/M/MV5BZDM1NWU4MjQtYjE1Ny00MjM5LWI2YjMtOGEwMmQ2YTNhYTkxXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_UY268_CR5,0,182,268_AL_.jpg",
            "rating": 9.5,
            "title": "Breaking Bad",
            "year": 2008
        },
        {
            "description": "A vampire hunter fights to save a besieged city from an army of otherworldly creatures controlled by Dracula.",
            "genre": ["Animation", "Action", "Adventure"],
            "imdb": "https://www.imdb.com/title/tt6517102",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTZhNGMzNzctMzhiYS00MmJiLWJmYWItMzhiYTk4Zjg0ZWIxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.1,
            "title": "Castlevania",
            "year": 2017
        },
        {
            "description": "A detective from the year 2077 finds herself trapped in present day Vancouver and searching for ruthless criminals from the future.",
            "genre": ["Action", "Sci-Fi", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt1954347",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTUzNTU1NzQ2Ml5BMl5BanBnXkFtZTcwMDUzNjk4Nw@@._V1_UY268_CR2,0,182,268_AL_.jpg",
            "rating": 7.7,
            "title": "Continuum",
            "year": 2012
        },
        {
            "description": "Astronomer Carl Sagan leads us on an engaging guided tour of the various elements and cosmological theories of the universe.",
            "genre": ["Documentary"],
            "imdb": "https://www.imdb.com/title/tt0081846",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR5,0,182,268_AL_.jpg",
            "rating": 9.3,
            "title": "Cosmos",
            "year": 1980
        },
        {
            "description": "An exploration of our discovery of the laws of nature and coordinates in space and time.",
            "genre": ["Documentary"],
            "imdb": "https://www.imdb.com/title/tt2395695",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NzgwNDE3N15BMl5BanBnXkFtZTgwNDAxMTY5MTE@._V1._CR51,41,938,1336_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 9.3,
            "title": "Cosmos: Possible Worlds",
            "year": 2014
        },
        {
            "description": "Follows Leonardo Da Vinci during his early days in Florence, as a young artist, inventor and dreamer, trying to change the future.",
            "genre": ["Adventure", "Biography", "Drama"],
            "imdb": "https://www.imdb.com/title/tt2094262",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NjY5MzM2M15BMl5BanBnXkFtZTgwMjA5NzMxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8,
            "title": "Da Vinci's Demons",
            "year": 2013
        },
        {
            "description": "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
            "genre": ["Crime", "Drama", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt5753856",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTUzNjQ2MTY5NV5BMl5BanBnXkFtZTgwOTAzNTQxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.6,
            "title": "Dark",
            "year": 2017
        },
        {
            "description": "An astronaut struggles to learn how she became pregnant while on a thirteen-month-long solo space mission.",
            "genre": ["Drama", "Sci-Fi", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt3155320",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTc1NDg0ODEyMl5BMl5BanBnXkFtZTgwNDc0MzUxMjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.6,
            "title": "Extant",
            "year": 2014
        },
        {
            "description": "A Walking Dead spin-off, set in Los Angeles, following two families who must band together to survive the undead apocalypse.",
            "genre": ["Drama", "Horror", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt3743822",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTg1OTQ2MjMzNV5BMl5BanBnXkFtZTgwMjE2OTc4NTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7,
            "title": "Fear the Walking Dead",
            "year": 2015
        },
        {
            "description": "A special task force in the FBI investigates after every person on Earth simultaneously blacks out and awakens with a short vision of their future.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1441135",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY1MDg1MjUxMl5BMl5BanBnXkFtZTcwNDc2NTk4Mg@@._V1_UY268_CR9,0,182,268_AL_.jpg",
            "rating": 7.6,
            "title": "Flashforward",
            "year": 2009
        },
        {
            "description": "Inspector John Marlott investigates a series of crimes in 19th Century London, which may have been committed by a scientist intent on re-animating the dead.",
            "genre": ["Crime", "Drama", "Fantasy"],
            "imdb": "https://www.imdb.com/title/tt4206804",
            "poster": "https://m.media-amazon.com/images/M/MV5BN2EyYjRhZjQtYzNhNi00MDBjLWFhODQtZTRlOTkyYTFkMjQ1XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY268_CR4,0,182,268_AL_.jpg",
            "rating": 7.4,
            "title": "Frankenstein Chronocles",
            "year": 2015
        },
        {
            "description": "An F.B.I. agent is forced to work with an institutionalized scientist and his son in order to rationalize a brewing storm of unexplained phenomena.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1119644",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NDk1NzU0MF5BMl5BanBnXkFtZTcwMDQ1ODA1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Fringe",
            "year": 2008
        },
        {
            "description": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
            "genre": ["Action", "Adventure", "Drama"],
            "imdb": "https://www.imdb.com/title/tt0944947",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 9.5,
            "title": "Game of Thrones",
            "year": 2011
        },
        {
            "description": "The life stories of history's greatest minds. From their days as young adults to their final years we see their discoveries, loves, relationships, causes, flaws and genius.",
            "genre": ["Biography", "Drama", "History"],
            "imdb": "https://www.imdb.com/title/tt5673782",
            "poster": "https://m.media-amazon.com/images/M/MV5BNjMxNTMxNDMxNl5BMl5BanBnXkFtZTgwNTk3NDUyNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Genius (National Geographic)",
            "year": 2017
        },
        {
            "description": "A remote Alaskan town that has been overrun by paranormal forces and local outcast Roman Mercer (Jogia) must overcome the town's prejudices and his own personal demons if he's to harness his repressed psychic powers and save everyone from the mass haunting that's threatening to destroy them all.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt6856484",
            "poster": "https://m.media-amazon.com/images/M/MV5BNDRhMDQ4NmEtYTUzMi00ZTM0LThhNTgtZWUyZjNiNmIwMThkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.4,
            "title": "Ghost Wars",
            "year": 2017
        },
        {
            "description": "In a totalitarian near-future India, a mysterious prisoner is sent to a remote military interrogation center where he turns the tables on his captors by exposing their most shameful secrets and unleashing a demon from Arabic folklore.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt5909930",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.2,
            "title": "Ghoul",
            "year": 2018
        },
        {
            "description": "In the 1880s American West murderous outlaw gang leader Frank Griffin hunts for ex-protege Roy Goode. Frank's chase leads him to La Belle, New Mexico - a town inhabited, after a mining disaster, almost entirely by women.",
            "genre": ["Drama", "Western"],
            "imdb": "https://www.imdb.com/title/tt5516154",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTY0NzkxNDcxNF5BMl5BanBnXkFtZTgwOTI5ODM5MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Godless",
            "year": 2017
        },
        {
            "description": "A homicide detective discovers he is a descendant of hunters who fight supernatural forces.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt1830617",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTkyODg2MzQwMV5BMl5BanBnXkFtZTgwNTA2MjE1MDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.8,
            "title": "Grimm",
            "year": 2011
        },
        {
            "description": "Explores the early relationship between the renowned psychiatrist and his patient, a young FBI criminal profiler, who is haunted by his ability to empathize with serial killers.",
            "genre": ["Crime", "Drama", "Horror"],
            "imdb": "https://www.imdb.com/title/tt2243973",
            "poster": "https://m.media-amazon.com/images/M/MV5BMGRhMzFjYjMtYzZiZS00OTI0LWIzN2MtMDU0MGY5MTBkZjE4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR0,0,182,268_AL_.jpg",
            "rating": 8.5,
            "title": "Hannibal",
            "year": 2013
        },
        {
            "description": "An injured hitman befriends his kidnapped daughter's imaginary friend - a perky blue flying unicorn.",
            "genre": ["Comedy", "Crime", "Fantasy"],
            "imdb": "https://www.imdb.com/title/tt2452242",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzk2NjYxMDMxMV5BMl5BanBnXkFtZTgwMzQxODcwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.3,
            "title": "Happy!",
            "year": 2017
        },
        {
            "description": "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
            "genre": ["Drama", "Horror", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt6763664",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.8,
            "title": "Haunting of House Hill",
            "year": 2018
        },
        {
            "description": "A team of scientists are thrust into a potentially life-or-death situation when they arrive in the Arctic to secretly investigate what could be an outbreak of a strange disease in a secluded international research facility.",
            "genre": ["Horror", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt2758950",
            "poster": "https://m.media-amazon.com/images/M/MV5BMzg3NjcyNTI5NF5BMl5BanBnXkFtZTgwNDAyMjU4MzE@._V1_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 6.8,
            "title": "Helix",
            "year": 2014
        },
        {
            "description": "Common people discover that they have super powers. Their lives intertwine as a devastating event must be prevented.",
            "genre": ["Drama", "Fantasy", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0813715",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODU0OTQ1MV5BMl5BanBnXkFtZTgwNzI0MTQ2MzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.6,
            "title": "Heroes",
            "year": 2006
        },
        {
            "description": "Duncan MacLeod is Immortal, and must live in modern society, concealing his true nature while fighting other Immortals.",
            "genre": ["Action", "Adventure", "Fantasy"],
            "imdb": "https://www.imdb.com/title/tt0103442",
            "poster": "https://m.media-amazon.com/images/M/MV5BZWE5NDJjYTAtMWZlNS00NTAxLWE3MmQtYTVmYzExYmZiNzc1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR0,0,182,268_AL_.jpg",
            "rating": 7.3,
            "title": "Highlander",
            "year": 1992
        },
        {
            "description": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
            "genre": ["Drama"],
            "imdb": "https://www.imdb.com/title/tt1856010",
            "poster": "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.9,
            "title": "House of Cards",
            "year": 2013
        },
        {
            "description": "Section One, a clandestine anti-terrorist organization, fakes the death of a jailed, convicted murderer and, believing her twin assets of beauty and ability to kill will make her a valuable new operative, trains her in the fighting skills necessary to succeed in her new job. The new operative, code-named 'Josephine', proves to be somewhat less ruthless than planned, however, as she had been falsely convicted and never murdered anyone.",
            "genre": ["Action", "Drama", "Romance"],
            "imdb": "https://www.imdb.com/title/tt0118379",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTcwMjgwNjE0MV5BMl5BanBnXkFtZTYwNTM3Njk5._V1_UY268_CR5,0,182,268_AL_.jpg",
            "rating": 7.5,
            "title": "La femme Nikita",
            "year": 1997
        },
        {
            "description": "A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.",
            "genre": ["Action", "Crime", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt6468322",
            "poster": "https://m.media-amazon.com/images/M/MV5BMzBlY2QzNzYtMWU1NS00NjFkLWJiMzItYmM3YTc4MDFjNDQwXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.6,
            "title": "La Casa de Papel",
            "year": 2017
        },
        {
            "description": "David Haller is a troubled young man diagnosed as schizophrenic, but after a strange encounter, he discovers special powers that will change his life forever.",
            "genre": ["Action", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt5114356",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjQyOTQ3Njc5M15BMl5BanBnXkFtZTgwMzgyNjAxNTM@._V1_UY268_CR1,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Legion",
            "year": 2017
        },
        {
            "description": "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
            "genre": ["Adventure", "Drama", "Fantasy"],
            "imdb": "https://www.imdb.com/title/tt0411008",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Lost",
            "year": 2004
        },
        {
            "description": "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
            "genre": ["Adventure", "Drama", "Family"],
            "imdb": "https://www.imdb.com/title/tt5232792",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjI3MjI5OTczNV5BMl5BanBnXkFtZTgwODA4MTc5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.2,
            "title": "Lost in Space",
            "year": 2018
        },
        {
            "description": "The first manned mission from Earth to Mars in 2033 attempts to colonize the red planet.",
            "genre": ["Adventure", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt4939064",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjQ1OTM2Mzk3Nl5BMl5BanBnXkFtZTgwMzY1NTM0MDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.5,
            "title": "Mars",
            "year": 2016
        },
        {
            "description": "The adventures of a secret Agent armed with almost infinite scientific resourcefulness.",
            "genre": ["Action", "Adventure", "Crime"],
            "imdb": "https://www.imdb.com/title/tt0088559",
            "poster": "https://m.media-amazon.com/images/M/MV5BZTI2YTlhMWMtNWY1Mi00NGQ3LWFkMjEtZjI3NmUzYjI1NWFmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg",
            "rating": 7.7,
            "title": "McGyver",
            "year": 1985
        },
        {
            "description": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
            "genre": ["Biography", "Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt2707408",
            "poster": "https://m.media-amazon.com/images/M/MV5BNmU5ZGQyZDUtMmU3OC00ZTZkLTk4YzItYzg5NDNkMmJlZjMwXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.8,
            "title": "Narcos",
            "year": 2015
        },
        {
            "description": "A rogue assassin returns to take down the secret organization that trained her.",
            "genre": ["Action", "Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt1592154",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjIxMDAyOTMzMV5BMl5BanBnXkFtZTcwMjE5NTc4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg",
            "rating": 7.7,
            "title": "Nikita",
            "year": 2010
        },
        {
            "description": "Explorer Sir Malcolm Murray, American gunslinger Ethan Chandler, scientist Victor Frankenstein, and medium Vanessa Ives unite to combat supernatural threats in Victorian London.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt2628232",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTQ0Mzg2NzcyNl5BMl5BanBnXkFtZTgwMDE1NzU2NDE@._V1_UY268_CR7,0,182,268_AL_.jpg",
            "rating": 8.2,
            "title": "Penny Dreadfull",
            "year": 2014
        },
        {
            "description": "An ex-assassin and a wealthy programmer save lives via a surveillance AI that sends them the identities of civilians involved in impending crimes. However, the details of the crimes--including the civilians' roles--are left a mystery.",
            "genre": ["Action", "Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt1839578",
            "poster": "https://m.media-amazon.com/images/M/MV5BZDU1NzA5YzUtNTdmNy00NTVjLWFhNzEtYWI1NmNkNTA1ZDBhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR1,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Person of Interest",
            "year": 2011
        },
        {
            "description": "The Earth is embroiled in a desperate war against alien invaders, and this series focuses on one squadron of Marine pilots involved in it.",
            "genre": ["Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0112173",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTI3MTMxNTg2M15BMl5BanBnXkFtZTcwMjkzMTIzMQ@@._V1_UY268_CR9,0,182,268_AL_.jpg",
            "rating": 7.7,
            "title": "Space Above and Beyond",
            "year": 1995
        },
        {
            "description": "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt4574334",
            "poster": "https://m.media-amazon.com/images/M/MV5BZGExYjQzNTQtNGNhMi00YmY1LTlhY2MtMTRjODg3MjU4YTAyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.9,
            "title": "Stranger Things",
            "year": 2016
        },
        {
            "description": "Behind every powerful image is a powerful story. Uniting exploration, photography and the natural world, Tales By Light follows photographers from Australia and around the world as they push the limits of their craft.",
            "genre": ["Documentary"],
            "imdb": "https://www.imdb.com/title/tt5350276",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTAxNWQ3YTgtMGY2My00ZDExLWJlNjUtM2Y5ZjFkNGI0MTc4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjEzMjg3MTQ@._V1_UY268_CR103,0,182,268_AL_.jpg",
            "rating": 8.3,
            "title": "Tales of Light",
            "year": 2015
        },
        {
            "description": "Set after the events in Terminator 2: Judgment Day (1991), Sarah Connor and her son, John, try to stay under-the-radar from the government, as they plot to destroy the computer network, Skynet, in hopes of preventing Armageddon.",
            "genre": ["Action", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0851851",
            "poster": "https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.7,
            "title": "Terminator: The Sarah Connor Chronicles",
            "year": 2008
        },
        {
            "description": "A police detective in the asteroid belt, the first officer of an interplanetary ice freighter and an earth-bound United Nations executive slowly discover a vast conspiracy that threatens the Earth's rebellious colony on the asteroid belt.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt3230854",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTdhZGJlYjEtYWNjMC00ZTYzLWEyODAtYWI4NzBjODBlNDM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "The Expanse",
            "year": 2015
        },
        {
            "description": "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.",
            "genre": ["Action", "Adventure", "Drama"],
            "imdb": "https://www.imdb.com/title/tt3107288",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjI1MDAwNDM4OV5BMl5BanBnXkFtZTgwNjUwNDIxNjM@._V1_UY268_CR16,0,182,268_AL_.jpg",
            "rating": 7.9,
            "title": "The Flash",
            "year": 2014
        },
        {
            "description": "When teenagers Harry and June run away from their repressive families to be together, they're derailed by an extraordinary discovery - June's ability to shape-shift. A scientist tries to capture her and discover the key to her power.",
            "genre": ["Drama", "Romance", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt8021824",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjEwNjM1MzE0N15BMl5BanBnXkFtZTgwMzU1MjgwNjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.3,
            "title": "The Innocents",
            "year": 2018
        },
        {
            "description": "After an eerie mist rolls into a small town, the residents must battle the mysterious mist and its threats, fighting to maintain their morality and sanity.",
            "genre": ["Drama", "Horror", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt5639976",
            "poster": "https://m.media-amazon.com/images/M/MV5BMzE3MDk0ODkwM15BMl5BanBnXkFtZTgwMzA5NTk5MTI@._V1_UY268_CR1,0,182,268_AL_.jpg",
            "rating": 5.4,
            "title": "The Mist",
            "year": 2007
        },
        {
            "description": "After a night of partying with a woman he picked up, a man wakes up to find her stabbed to death and is charged with her murder.",
            "genre": ["Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt2401256",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjQyOTgxMDI0Nl5BMl5BanBnXkFtZTgwOTE4MzczOTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.6,
            "title": "The Night Of",
            "year": 2016
        },
        {
            "description": "After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as 'The Punisher,' with only one goal in mind: to avenge them.",
            "genre": ["Action", "Adventure", "Crime"],
            "imdb": "https://www.imdb.com/title/tt5675620",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.6,
            "title": "The Punisher",
            "year": 2017
        },
        {
            "description": "After a brutal virus wipes out most of the population, two young siblings embark on a perilous search for safety.",
            "genre": ["Sci-Fi", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt6656238",
            "poster": "https://m.media-amazon.com/images/M/MV5BZWMyOWYxODEtZjVjNy00OWZjLWJlZTktYzE2NjdmOGU2OWQzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.3,
            "title": "The Rain",
            "year": 2018
        },
        {
            "description": "Anthology series that examines how and why ordinary people commit brutal crimes.",
            "genre": ["Crime", "Drama", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt6048596",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTU5NDQ3NDk1Nl5BMl5BanBnXkFtZTgwOTMwMjg5NTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8,
            "title": "The Sinner",
            "year": 2017
        },
        {
            "description": "In 1848, two real life warships, HMS Terror and HMS Erebus, sent on a Royal Naval expedition to find the treacherous Northwest Passage become trapped in ice near Arctic and face starvation, mutiny, cannibalism and a demonic polar bear.",
            "genre": ["Adventure", "Drama", "History"],
            "imdb": "https://www.imdb.com/title/tt2708480",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTAyMjEzMzg0NTleQTJeQWpwZ15BbWU4MDY5NDE4OTQz._V1_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 8.1,
            "title": "The Terror",
            "year": 2018
        },
        {
            "description": "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.",
            "genre": ["Drama", "Horror", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1520211",
            "poster": "https://m.media-amazon.com/images/M/MV5BYWY4ODJiZjMtNWMxYi00ZmM5LWIwZmQtZWY0MjJmZGU5MjcxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "The Walking Dead",
            "year": 2010
        },
        {
            "description": "An invisible and mysterious force field descends upon a small actual town of Chester's Mill, Maine, USA, trapping residents inside, cut off from the rest of civilization. The trapped townspeople must discover the secrets and purpose of the 'dome' or 'sphere' and its origins, while coming to learn more than they ever knew about each other and animals too.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1553656",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjA3NDk0NzM1MF5BMl5BanBnXkFtZTcwOTYxMTk3OQ@@._V1_UY268_CR10,0,182,268_AL_.jpg",
            "rating": 6.7,
            "title": "Under the Dome",
            "year": 2013
        },
        {
            "description": "An extraterrestrial race arrives on Earth with seemingly good intentions, only to slowly reveal their true machinations the more ingrained into society they become.",
            "genre": ["Drama", "Sci-Fi", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt1307824",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNTQ5NTg2Ml5BMl5BanBnXkFtZTcwODUyNTY5Mg@@._V1_UY268_CR7,0,182,268_AL_.jpg",
            "rating": 6.8,
            "title": "V (2009)",
            "year": 2009
        },
        {
            "description": "After saving the life of the President in Washington D.C., a pair of U.S Secret Service agents are whisked away to a covert location in South Dakota that houses supernatural objects that the Regents, an Authority above and outside any government, have collected over the centuries. Their new assignment: retrieve lost objects called 'Artifacts', seemingly harmless items that can possess immense power, and investigate reports of new ones.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt1132290",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzQ0MjNlMTgtNjg1Yy00N2UzLTgwYjctOWZjZDBhMTBhM2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR3,0,182,268_AL_.jpg",
            "rating": 7.6,
            "title": "Warehouse 13",
            "year": 2009
        },
        {
            "description": "A Secret Service agent goes to Wayward Pines, Idaho, in search of two federal agents who have gone missing in the bucolic town. He soon learns that he may never get out of Wayward Pines alive.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt2618986",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTUwNzU2MTE2M15BMl5BanBnXkFtZTgwODUxOTI5ODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.5,
            "title": "Wayward Pines",
            "year": 2015
        },
        {
            "description": "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0475784",
            "poster": "https://m.media-amazon.com/images/M/MV5BMDQ2MjgxOTgtMTZkNC00NDI0LWI5NTQtMzkwM2VhYzY4YzUzXkEyXkFqcGdeQXVyNjU4MjMwMDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.8,
            "title": "Westworld",
            "year": 2016
        },
        {
            "description": "The story of a depressed man who inexplicably is the only one who can see his neighbor's dog as a full grown man in a dog suit.",
            "genre": ["Comedy", "Drama", "Mystery"],
            "imdb": "https://www.imdb.com/title/tt1703925",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMTk4NDIyMV5BMl5BanBnXkFtZTgwMDQ0MTAyMjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.8,
            "title": "Wilfred",
            "year": 2011
        },
        {
            "description": "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt0106179",
            "poster": "https://m.media-amazon.com/images/M/MV5BNzE4Njg5ODk0OV5BMl5BanBnXkFtZTgwOTU0MzAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.7,
            "title": "X-Files",
            "year": 1993
        },
        {
            "description": "A team of mutant superheroes fight for justice and human acceptance in the Marvel Comics universe.",
            "genre": ["Animation", "Action", "Family"],
            "imdb": "https://www.imdb.com/title/tt0103584",
            "poster": "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR6,0,182,268_AL_.jpg",
            "rating": 8.5,
            "title": "X-Men",
            "year": 1992
        },
        {
            "description": "Three years after the zombie virus has gutted the United States of America a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood.",
            "genre": ["Action", "Comedy", "Drama"],
            "imdb": "https://www.imdb.com/title/tt3843168",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTYzNjM5MDExNl5BMl5BanBnXkFtZTgwNzUzNDc0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.7,
            "title": "Z-Nation",
            "year": 2014
        },
        {
            "description": "A crew of space explorers embark on a mission to find a mysterious alien ship.",
            "genre": ["Sci-Fi", "Horror"],
            "imdb": "https://www.imdb.com/title/tt6903284/",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTYwMDMwOTQwNF5BMl5BanBnXkFtZTgwMDI0MzY5NTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 6.2,
            "title": "Nightflyers",
            "year": 2018
        },
        {
            "description": "A tough US Air Force officer and a skeptical scientist investigate UFO and alien conspiracies as Cold War paranoia spreads.",
            "genre": ["Drama", "Mystery", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt6632666/",
            "poster": "https://m.media-amazon.com/images/M/MV5BYTAyMWQ4NWQtMGU0Zi00OTBiLTlmMjktMzU3YTU0YmExMjdjXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.8,
            "title": "Project Blue Book",
            "year": 2019
        },
        {
            "description": "While strange rumors about their ill king grip a kingdom, the crown prince becomes their only hope against a mysterious plague overtaking the land.",
            "genre": ["Action", "Thriller"],
            "imdb": "https://www.imdb.com/title/tt6611916",
            "poster": "https://m.media-amazon.com/images/M/MV5BMmMzYzE5NzctZGZmZC00MmVkLTllMWUtZDY3YzIzYWEyMTIxXkEyXkFqcGdeQXVyNTI2MzI4NTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 8.4,
            "title": "Kingdom",
            "year": 2019
        },
        {
            "description": "Hosted by Morgan Freeman, Through the Wormhole will explore the deepest mysteries of existence - the questions that have puzzled mankind for eternity. What are we made of? What was there before the beginning? Are we really alone? Is there a creator? These questions have been pondered by the most exquisite minds of the human race. Now, science has evolved to the point where hard facts and evidence may be able to provide us with answers instead of philosophical theories. Through the Wormhole will bring together the brightest minds and best ideas from the very edges of science - Astrophysics, Astrobiology, Quantum Mechanics, String Theory, and more - to reveal the extraordinary truth of our Universe.",
            "genre": ["Documentary"],
            "imdb": "https://www.imdb.com/title/tt1513168",
            "poster": "https://m.media-amazon.com/images/M/MV5BMDhkMTY2NGQtMWY4Mi00ZjhmLWIzNGYtZDJhODkwNTM5NTIzXkEyXkFqcGdeQXVyNDk3NDEzMzk@._V1_UY268_CR0,0,182,268_AL_.jpg",
            "rating": 8.6,
            "title": "Through the Wormhole",
            "year": 2010
        },
        {
            "description": "Emma, a famous and successful French horror writer, is forced to return to her hometown after the woman who haunted her dreams fifteen years ago begins to re-appear. The work she writes is apparently a work of fiction, but how much is fact?",
            "genre": ["Horror"],
            "imdb": "https://www.imdb.com/title/tt10875696/",
            "poster": "https://m.media-amazon.com/images/M/MV5BODQ4NGIwZWYtMWNhOC00MzFjLTk5ZDYtOGM1MzM3NjVlZGUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.6,
            "title": "Marianne",
            "year": 2019
        },
        {
            "description": "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
            "genre": ["Crime", "Drama"],
            "imdb": "https://www.imdb.com/title/tt2442560/",
            "poster": "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            "rating": 8.8,
            "title": "Peaky Blinders",
            "year": 2013
        },
        {
            "description": "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.",
            "genre": ["Action", "Drama", "Sci-Fi"],
            "imdb": "https://www.imdb.com/title/tt7949218/",
            "poster": "https://m.media-amazon.com/images/M/MV5BYWI2ZmM5ZTgtOTgxYS00MTQ4LThkMjQtZjBlNGM3NjQ5YTI5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.6,
            "title": "See",
            "year": 2019
        },
        {
            "description": "After their father is murdered under mysterious circumstances, the three Locke siblings and their mother move into their ancestral home, Keyhouse, which they discover is full of magical keys that may be connected to their father's death.",
            "genre": ["Drama", "Fantasy", "Horror"],
            "imdb": "https://www.imdb.com/title/tt3007572",
            "poster": "https://m.media-amazon.com/images/M/MV5BNjZkNzY4M2ItOWY0Ni00Y2ViLWE1NjItOTIyYzZjMzg5M2E1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
            "rating": 7.4,
            "title": "Lock & Key",
            "year": 2020
        }
    ]
};

const getters = {
    orderTvShowsBy: state => state.orderTvShowsBy,
    orderTvShowsByDesc: state => state.orderTvShowsByDesc,
    tvShowDisplay: state => state.tvShowDisplay,
    tvShowsCurrentPage: state => state.tvShowsCurrentPage,
    tvShows: state => state.tvShows
};


const mutations = {
    setOrderTvShowsBy: (state, payload) => {
        state.orderTvShowsBy = payload;
    },
    setOrderTvShowsByDesc: state => {
        state.orderTvShowsByDesc = !state.orderTvShowsByDesc;
    },
    setTvShowCurrentPage: (state, payload) => {
        state.tvShowsCurrentPage = payload;
    },
    setTvShowDisplay: (state, payload) => {
        state.tvShowDisplay = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}