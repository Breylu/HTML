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

fetch("person.json")
  .then((response) => response.json())
  .then((value) => console.log(value));

fetch("people.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      console.log(value.isEmployed);
    })
  );
