const url_got = "https://api.tvmaze.com/shows/82/episodes";
const url_index = "./index.json";
const url_pokeapi = "./data/songsterr_songs.json";

fetch(url_index)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(
      investigate(json, [
        (e) => e[0],
        (e) => e.examples,
        (e) => e[0],
        (e) => e.file,
      ])
    );
    const api = pickFromArray(json);
    const example = pickFromArray(api.examples);
    const file = example.file;
    setHeaderForAPI(api, example);
    const path = "./data/" + file;
    return fetch(path);
  })
  .then((resp) => resp.json())
  .then(processData);

const testData = [
  1,
  2,
  { name: "ivan", hp: 100, achievements: ["streak100", "polyglot"] },
  "hello",
  "world",
  true,
  false,
  ["s1", "s2", (x) => x * 2, ["s3", "s4"]],
];

function processData(json) {
  document.getElementById("rawJSON").textContent = JSON.stringify(
    json,
    null,
    2
  );
  addToDOM(json, document.getElementById("visualiser"));
}

const isURL = (string) => string.startsWith("http");
const isColourHexCode = (string) => {
  const regex = RegExp("^#{0,1}([0-9A-F]{6})$");
  return regex.test(string);
};

const processors = [
  {
    test: Array.isArray,
    process: (item, cursor) => {
      const ul = document.createElement("ul");
      cursor.appendChild(ul);
      item.forEach((arrayElement) => {
        const li = document.createElement("li");
        ul.appendChild(li);
        addToDOM(arrayElement, li);
      });
    },
  },
  {
    test: (item) => typeof item === "boolean",
    process: (item, cursor) => {
      const e = document.createElement("span");
      e.classList.add("boolean");
      e.textContent = item;
      cursor.appendChild(e);
    },
  },

  {
    test: (item) => typeof item === "function",
    process: (item, cursor) => {
      const e = document.createElement("span");
      e.classList.add("function");
      e.textContent = "Function" + item;
      cursor.appendChild(e);
    },
  },
  {
    test: (item) => typeof item === "string" && isURL(item),
    process: (item, cursor) => {
      const e = document.createElement("a");
      e.setAttribute("href", item);
      e.classList.add("string");
      e.classList.add("url");
      e.textContent = item;
      cursor.appendChild(e);
    },
  },

  {
    test: (item) => typeof item === "string" && isColourHexCode(item),
    process: (item, cursor) => {
      const contain = document.createElement("span");
      const eWord = document.createElement("span");
      contain.classList.add("colourHexCode");
      eWord.classList.add("string");
      eWord.textContent = item;
      contain.appendChild(eWord);

      const eColourSquare = document.createElement("span");
      eColourSquare.classList.add("colourSquare");
      const colourHex = item.startsWith("#") ? item : "#" + item;

      eColourSquare.style.background = colourHex;
      eColourSquare.textContent = "...";
      contain.appendChild(eColourSquare);

      cursor.appendChild(contain);
    },
  },
  {
    test: (item) => typeof item === "string",
    process: (item, cursor) => {
      const e = document.createElement("span");
      e.classList.add("string");
      e.textContent = item;
      cursor.appendChild(e);
    },
  },
  {
    test: (item) => typeof item === "number",
    process: (item, cursor) => {
      const e = document.createElement("span");
      e.classList.add("number");
      e.textContent = item;
      cursor.appendChild(e);
    },
  },
  {
    test: (item) =>
      typeof item === "object" && !Array.isArray(item) && item !== null,
    process: (item, cursor) => {
      const dl = document.createElement("dl");
      dl.classList.add("object");
      cursor.appendChild(dl);
      for (let [key, value] of Object.entries(item)) {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        "title text name description".split(" ").includes(key)
          ? dd.classList.add("title")
          : null;

        dt.textContent = key;
        dl.appendChild(dt);
        dl.appendChild(dd);
        addToDOM(value, dd);
      }
    },
  },
];

function addToDOM(item, cursor) {
  const processor = processors.find((proc) => proc.test(item));
  if (processor) {
    processor.process(item, cursor);
  } else {
    //console.log(`no processor for item: ${item}`);
  }
}

function setHeaderForAPI(api, example) {
  console.log(example);
  document.getElementById("apiTitle").textContent = api.title;
  document.getElementById("apiLink").setAttribute("href", api.home);
  document.getElementById("exampleTitle").textContent = example.description;
}
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
//drill into a nested data structure following a series of expressions
// and stop when undefined
function investigate(start, fnArr) {
  const working = fnArr.reduce(
    ({ curr, result }, fn) => {
      if (curr) {
        const v = fn(curr);
        result.push(v);
        curr = v;
      }
      return { curr, result };
    },
    { curr: start, result: [] }
  );

  return {
    success: working.length === fnArr.length,
    value: working[working.length - 1],
    working,
  };
}
