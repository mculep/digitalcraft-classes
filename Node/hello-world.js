// console.log("Hello world");

// 1. Console log from 1 to 100 using node.

for (let i = 1; i < 101; i++) {
    console.log(i);
}

// 2. Create a function that accepts a string as an argument.
// Have the program write to the terminal "The cow says ... {the value supplied}"
// Call that function 3 times with 3 different strings as the argument.

let cowSound = (cow) => console.log(`The cow says ... ${cow}.`);

cowSound("moo");
cowSound("hello");
cowSound("howzit");

let people = [
    { name: "batman", powers: "none" },
    { name: "iron man", power: "rich" },
    { name: "The Hulk", powers: "being green" },
    { name: "Superman", powers: "Being an Alien" },
];

let names = people.map((peoples) => {
    return peoples.name;
});

console.log(names);
