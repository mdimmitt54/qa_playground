/*** */

console.log("\nMy object\n====================");

var myPerson = { 
  firstName: 'Lane',
  lastName: 'Meyer',
  title: 'Skis the K12',
  age: 21 
}
console.log(
  `Person:\n\t Name: "${myPerson.firstName} ${myPerson.lastName}" \n\t Age: ${myPerson.age}`
);

console.log("\nMy array\n===============");

var coolVehicles = [
  'Jeep Rubicon',
  'Dodge Challenger',
  'Ferrari F8 Spider',
  'Aston Martin DBS',
];
coolVehicles.forEach((thing, i) => {

  console.log(`${i + 1}. ${thing}`);
});

console.log("\nAn array of objects\n====================");

var people = [
{
 firstName: "James",
 lastName: "Bond",
 age: "007",
},
{
  firstName: "Jon",
  lastName: "Wick",
  age: "34",
 },
 {
  firstName: "Tony",
  lastName: "Stark",
  age: "44",
 },
];

 people.forEach((people) => {

  console.log(
    `people:\n\t Name: "${people.firstName} ${people.lastName}" \n\t Age: ${people.age}`
  );
});

console.log("\nMy object with an array\n====================");

var myPersonWithAnArray =  {
  firstName: "Steve",
  lastNmae: "Rodgers",
  age: 30,
  favoriteStates: [
"Idaho",
"Utah",
"Hawaii",
"Colorado",
"Wyoming",
],
};

console.log(`\t Age: ${myPersonWithAnArray.age}`);
console.log(`\t Favorite States:`);

myPersonWithAnArray.favoriteStates.forEach((state) => {
  console.log(`\t\t${state}`);
});
