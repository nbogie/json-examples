# JSON data examples primarily from no-auth public APIs

This is a collection of interesting JSON data to use in JavaScript and web development teaching and learning, prior to the student learning how to use APIs.

See src/sourcesIndex.ts for the title of each API and example(s).

### technical note: recreating the collection:

(It should not be necessary to do this.)

Example command line to fetch example:

`curl -X GET "https://swapi.co/api/people/" -H "accept: application/json" > swapi_people.json`


# Credit

These were taken from corpora: https://github.com/dariusk/corpora/tree/master/data
* kaomoji: https://github.com/dariusk/corpora/blob/master/data/words/emoji/cute_kaomoji.json
* olympics: https://github.com/dariusk/corpora/blob/master/data/sports/olympics.json
* the planets: https://github.com/dariusk/corpora/blob/master/data/science/planets.json
* the elements: https://github.com/dariusk/corpora/blob/master/data/science/elements.json
The hiragana were taken from wikipedia: https://en.wikipedia.org/wiki/Hiragana


# Useful tools
online csv to json converters can be convenient. Here's one at random: https://www.convertcsv.com/csv-to-json.htm


# TODO:

* Use react query to cache the fetched content
* Give more space over to the view of the json!
* Allow code-editing in place?  
* Allow exporting the json to a dynamically-made minimal project in codesandbox or repl.it?