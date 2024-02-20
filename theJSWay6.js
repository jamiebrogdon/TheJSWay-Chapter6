//CHAPTER 6
//Adding character experience
//Improve our example RPG program to add an experience property named xp to the character. 
//Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0
};

function describe(character) {
    return `${character.name} has ${character.health} health points, ${character.strength} as strength and ${character.xp} as experience points`;
  }

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(describe(aurora));

//CHAPTER 6
//Modeling a dog
//Complete the following program to add the dog object definition.

//// TODO: create the dog object here

const dog = {
    name: "Fang",
    species: "bloodhound",
    size: "large",
    bark: "Ruffffff ruff"
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)

//CHAPTER 6 
//Modeling a circle
//Complete the following program to add the circle object definition. 
//Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference: 3.14 * (r * 2),
    area: (3.14 * 2) * r
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
//to get a circumference of a circle, you need Pi times diameter, and to get the diameter it is twice the radius!

//CHAPTER 6
/*
Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/

const account = {
    firstName: "Alex",
    balance: 0
};

function credit(amount) {
    this.balance += amount
};

function describe() {
    return `Account owner: ${this.firstName}, balance ${this.balance}` 
};

console.log(describe(account));
account.credit(250);
account.credit(-80);
console.log(describe(account));





