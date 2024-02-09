// const jsonNames = `["Spongebob", "Patrick", "Squidward"]`;
// const jsonPerson = `{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }`;
// const jsonPeople = `[
//   {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
//   },
//   {
//     "name": "Patrick",
//     "age": 40,
//     "isEmployed": false
//   },
//   {
//     "name": "Squidward",
//     "age": 30,
//     "isEmployed": true
//   }
// ]`;

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);
// // const jsonString = JSON.stringify(names);

// ---------------------- FETCH ----------------------

// fetch("person.json")
//   .then((response) => response.json())
//   .then((value) => console.log(value));

// fetch("people.json")
//   .then((response) => response.json())
//   .then((values) =>
//     values.forEach((value) => {
//       console.log(value.isEmployed);
//     })
//   );

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resourse");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
