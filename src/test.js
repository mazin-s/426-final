import axios from "axios";

// 1. https://www.boredapi.com/
async function callBored() {
  const result = await axios.get("https://www.boredapi.com/api/activity");
  return result.data;
}
const info = await callBored();
console.log(info);

// 2. https://github.com/15Dkatz/official_joke_api
async function callJokes() {
  const result = await axios.get(
    "https://official-joke-api.appspot.com/jokes/ten"
  );
  return result.data;
}
const jokes = await callJokes();
console.log(jokes);

// 3. https://imgflip.com/api
async function callMemes() {
  const result = await axios.get("https://api.imgflip.com/get_memes");
  return result.data.data;
}
const memes = await callMemes();
console.log(memes);

// 4.https://dog.ceo/dog-api/
async function callDogPics() {
  const result = await axios.get("https://dog.ceo/api/breeds/image/random");
  return result.data.message;
}
const dogPictureUrl = await callDogPics();
console.log(dogPictureUrl);

// 5. https://http.cat/
async function callCatPics(num) {
  const result = await axios.get("https://http.cat/402");
  // console.log(result.data);
}
// callCatPics(100);

/*
// 3. https://alexwohlbruck.github.io/cat-facts/
async function callCatFacts() {
  const result = await axios.get("https://cat-fact.herokuapp.com/facts");
  const facts = result.data.map((f) => f.text);
  return facts;
}
const catFacts = await callCatFacts();
console.log(catFacts);

// 1. https://agify.io/
async function callAgify(name) {
  const result = await axios.get("https://api.agify.io/?name=" + name);
  return result.data.age;
}
const age = await callAgify("mazin");
console.log(age);
*/
