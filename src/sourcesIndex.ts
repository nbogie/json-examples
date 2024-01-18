
export interface Source {
    title: string;
    description?: string;
    home?: string;
    "fromAPI": boolean;
    examples: Example[];
}
export interface Example {
    file: string;
    url?: string;
    description: string;
}
export const index: Source[] = [
    {
        "title": "Dota 2",
        "fromAPI": false,
        "home": "https://github.com/pydota2/Dota2-JSONData/blob/master/heroes.json",
        "examples": [
            {
                "file": "dota2_heroes.json",
                "url": "https://raw.githubusercontent.com/pydota2/Dota2-JSONData/master/heroes.json",
                "description": "heroes from Dota 2 video game"
            }
        ]
    },
    {
        "title": "JSON Generator",
        "home": "https://next.json-generator.com/",
        "fromAPI": false,
        "examples": [
            {
                "file": "json-generator-people.json",
                "url": "https://next.json-generator.com/EJBh08DvO",
                "description": "List of people from JSON-generator"
            }
        ]
    },
    {
        "title": "French words",
        "fromAPI": false,
        "examples": [
            {
                "file": "common_words_french.json",
                "description": "List of common french words"
            }
        ]
    },
    {
        "title": "Spanish words",
        "fromAPI": false,
        "examples": [
            {
                "file": "common_words_spanish.json",
                "description": "List of common spanish words"
            }
        ]
    },
    {
        "title": "Hiragana",
        "fromAPI": false,
        "home": "https://en.wikipedia.org/wiki/Hiragana",
        "examples": [
            {
                "file": "hiragana.json",
                "description": "(non-comprehensive) list of 48 hiragana from wikipedia, along with their english/romanized equivalents"
            }
        ]
    },
    {
        "title": "Rest Countries API",
        "fromAPI": true,
        "home": "https://restcountries.eu/",
        "examples": [
            {
                "file": "rest_countries_list.json",
                "url": "https://restcountries.eu/rest/v2/all",
                "description": "Full list of countries with their locations, languages, currency, neighbours..."
            },
            {
                "file": "rest_countries_search.json",
                "url": "https://restcountries.eu/rest/v2/name/united",
                "description": "Shorter list of countries matching a search for 'united', still with rich data about the countries."
            }
        ]
    },
    {
        "title": "ColourLovers API",
        "fromAPI": true,
        "description": "human-generated colours and palettes",
        "home": "http://www.colourlovers.com/api/",
        "examples": [
            {
                "file": "colourlovers_palettes.json",
                "url": "http://www.colourlovers.com/api/palettes/top?format=json&numResults=20",
                "description": "top 20 palettes"
            }
        ]
    },
    {
        "title": "TVMaze",
        "fromAPI": true,
        "description": "Info on TV shows, episodes, still images, cast",
        "home": "https://www.tvmaze.com/api",
        "examples": [
            {
                "file": "tvmaze_shows.json",
                "url": "https://api.tvmaze.com/shows",
                "description": "all shows"
            },
            {
                "file": "tvmaze_episodes.json",
                "url": "https://api.tvmaze.com/shows/82/episodes",
                "description": "episodes from a show"
            }
        ]
    },
    {
        "title": "Songsterr",
        "fromAPI": true,
        "description": "An simple index of songsterr's database of songs with tabs and chords",
        "home": "https://www.songsterr.com/a/wa/api/",
        "examples": [
            {
                "file": "songsterr_songs_marley.json",
                "description": "songs by bob marley",
                "url": "https://www.songsterr.com/a/ra/songs/byartists.json?artists=%22Bob%20Marley%22"
            }
            , {
                "file": "songsterr_songs_dylan.json",
                "description": "songs by Bob Dylan",
                "url": "https://www.songsterr.com/a/ra/songs/byartists.json?artists=%22Bob%20Dylan%22"
            }
        ]
    },
    {
        "title": "Cat Facts",
        "fromAPI": false,
        "home": "https://cat-fact.herokuapp.com/",
        "examples": [
            {
                "description": "A list of facts.  About cats. 🐈",
                "file": "cat_facts.json",
                "url": "https://cat-fact.herokuapp.com/facts"
            }
        ]
    },
    {
        "title": "An API of Ice and Fire",
        "fromAPI": true,

        "description": "Game Of Thrones character info",
        "home": "https://anapioficeandfire.com",
        "examples": [
            {
                "description": "Data about the character Arya Startk",
                "file": "anapioficeandfire_one_person.json",
                "url": "https://anapioficeandfire.com/api/characters/148"
            }
        ]
    },
    {
        "title": "Star Wars API",
        "description": "The Star Wars API - Planets, Spaceships, Vehicles, People, Films and Species from seven movies",
        "fromAPI": true,
        "home": "https://swapi.co/documentation",
        "examples": [
            {
                "file": "swapi_one_person.json",
                "url": "https://swapi.co/api/people/10/",
                "description": "A single person from star wars (Old Ben)"
            },
            {
                "file": "swapi_people.json",
                "url": "https://swapi.co/api/people/",
                "description": "list of people from the star wars universe (excerpt)"
            }
        ]
    },
    {
        "title": "Studio Ghibli films",
        "description": "Cataloging the people, places, and things found in the worlds of Ghibli",
        "fromAPI": true,
        "home": "https://ghibliapi.vercel.app/",
        "examples": [
            {
                "description": "People in the Studio Ghibli world",
                "file": "studio_ghibli_people.json",
                "url": "https://ghibliapi.vercel.app/people"
            }
        ]
    },
    {
        "title": "Age of Empires 2 (e.g. Technologies)",
        "description": "Simple API to retrieve resources related to Age of Empires II (technologies, civilisations, structures...)",
        "fromAPI": true,
        "home": "https://age-of-empires-2-api.herokuapp.com/docs/",
        "examples": [
            {
                "description": "Techologies from the game",
                "file": "age_of_empires_2_technologies.json",
                "url": "https://age-of-empires-2-api.herokuapp.com/api/v1/technologies"
            }
        ]
    },
    {
        "title": "PokéAPI (Pokémon)",
        "fromAPI": true,
        "home": "https://pokeapi.co/",
        "examples": [
            {
                "description": "About the pokemon called Charizard",
                "file": "pokemon_api_one_pokemon.json",
                "url": "https://pokeapi.co/api/v2/pokemon/charizard"
            },
            {
                "description": "A list of various pokemon characters",
                "file": "pokemon_api_pokemons.json",
                "url": "https://pokeapi.co/api/v2/pokemon/"
            }
        ]
    },
    {
        "title": "Star Trek API",
        "fromAPI": true,

        "home": "http://stapi.co/",
        "examples": [
            {
                "file": "stapi_star_trek_one_season_episodes.json",
                "url": "http://stapi.co/api/v1/rest/season?uid=SAMA0000001633&pretty",
                "description": "One season's info including its episodes"
            }
        ]
    },
    {
        "title": "Public APIs",
        "fromAPI": true,

        "home": "https://api.publicapis.org/",
        "examples": [
            {
                "file": "public_apis_list.json",
                "url": "https://api.publicapis.org/entries?auth=null",
                "description": "List of only those public APIs which do not need auth."
            }
        ]
    },
    {
        "title": "Jeopardy questions",
        "fromAPI": false,
        "home": "https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/",
        "examples": [
            {
                "file": "jeopardy_questions_short.json",
                "description": "Short excerpt with 100+ questions (30kb)"
            },
            {
                "file": "jeopardy_questions_long.json",
                "description": "Longer excerpt with 3000+ questions (800kb)"
            }
        ]
    },
    {
        "title": "The Elements",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/blob/master/data/science/elements.json",
        "examples": [
            {
                "file": "elements.json",
                "description": "Data about the elements."
            }
        ]
    },
    {
        "title": "Planets",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/blob/master/data/science/planets.json",
        "examples": [
            {
                "file": "planets.json",
                "description": "Data about the planets of our solar system."
            }
        ]
    },
    {
        "title": "The Olympic Games",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/blob/master/data/sports/olympics.json",
        "examples": [
            {
                "file": "olympics.json",
                "description": "Occurrences of the Olymic games.  Year, host nation, etc."
            }
        ]
    },
    {
        "title": "Kaomoji",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/blob/master/data/words/emoji/cute_kaomoji.json",
        "examples": [
            {
                "file": "kaomoji.json",
                "description": "Cute kaomoji."
            }
        ]
    },
    {
        "title": "Spells from Harry Potter",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/blob/master/data/words/spells.json",
        "examples": [
            {
                "file": "harry_potter_spells.json",
                "description": "Spells from the Harry Potter universe."
            }
        ]
    },
    {
        "title": "Word Clues",
        "fromAPI": false,
        "home": "https://github.com/dariusk/corpora/tree/master/data/words/word_clues",
        "examples": [
            {
                "file": "word_clues.json",
                "description": "Common words and crossword/thesaurus-style hints for each word"
            }
        ]
    },
    {
        "title": "Random User",
        "fromAPI": false,
        "home": "https://randomuser.me/api/",
        "examples": [
            {
                "file": "random_user.json",
                "description": "Random user data including link to portrait image, and structured address."
            }
        ]
    }
]
