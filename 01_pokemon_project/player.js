/*=============================================================*
||                                                            ||
||    ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛   ||
||    ⬛    ░░░░░░░░░░  POKEMON PROJECT  ░░░░░░░░░░       ⬛   ||
||    ⬛     🔴  ⚪  🟡   Catch 'em all!   🟡  ⚪  🔴       ⬛   ||
||    ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛   ||
||                                                            ||
*==============================================================*/

// Before you can start your journey to become a Pokémon Master,
// we need to register you as a new trainer.
//
// ➤ MISSION 01: Create your player profile!
//
// 📋 Create a variable called `player` that contains an object.
// It should include the following properties:
//
//    🧑 name: Your trainer name (string)
//    🎂 age: Your age (number)
//    🧭 region: Which Pokémon region you're from (string)
//    🎒 bag: A bag with different pockets. (object)
//           Include the following pockets: 
//           - pokeballs (empty array)
//           - medicine (empty array)
//           - keyItems (empty array)
//           - pokemon (empty array)

let player = {
  name: "Pupusaru",
  age: 31,
  region: "Alola",
  bag: {
    pokeballs:[],
    medicine:[],
    keyitems:[],
    pokemon:[]
  }

}

// --------------------------------------------------------------------

// 🧪 MISSION 02: Define Your Pokémon!
//
// Before you can choose a starter, Professor Oak needs you
// to help catalog the Pokémon available in his lab.
//
// ➤ Your task: Create TWO Pokémon as objects.
// The first pokemon will be your STARTER
// The second pokemon will be your RIVAL
// Each Pokémon should have the following properties:
//
//    🐾 name: The Pokémon's name (string)
//    🔢 level: Its current level (number)
//    ✨ moveset: An array of special abilities (array of strings)
//       Each ability should have the following:
//       - name: The name of the move (string)
//       - pp: Power Points, how many times it can be used (number)
//       - damage: How much damage the move deals (number)
//       - type: The elemental type of the move.
//    🧬 type: The Pokémon's elemental type (array of strings)
//    ❤️ hp: The Pokémon's current health points (number)
//    ⚔️ attack: A number representing base attack power (number)
//    🏃 speed: A number representing base speed (number)
//
// You can choose classic starters like Charmander, Bulbasaur, etc.
// https://pokemondb.net/
// Or create your own original Pokémon if you’re feeling spicy! 🌶️
//
// Once you're done, you’ll be able to choose one as your starter in Mission 03!

let starter = {
  name:"Chimisaurus",
  level:1,
  moveset:[{
    name:"ember",
    pp:20,
    damage:35,
    type:"fire"
  },
  {
    name:"accelerock",
    pp:15,
    damage:30,
    type:"ground"

  }],
  type:["fire","ground"],
  hp:120,
  attack:18,
  speed:8
};
let rival = {
  name:"Booritoes",
  level:1,
  moveset:[{
    name:"shadow ball",
    pp:10,
    damage:30,
    type:"ghost"
  },
  {
    name:"rock throw",
    pp:20,
    damage:15,
    type:"rock"

  }],
  type:["ghost","rock"],
  hp:85,
  attack:9,
  speed:16
};
  
// 🧪 Great work! Now you’re ready to choose your partner in Mission 03.
  
// --------------------------------------------------------------------


// 🚀 MISSION 03: Add To Bag!
// You choose a pokemon, but how does it get into your bag? 
// Write a function that can add **any** object to **any** pocket in your bag.
//
// ➤ Your task: Write a function called `addToBag` that takes two parameters:
//    1. `item`: The object you want to add to your bag (e.g., a Pokémon or an item).
//    2. `pocket`: The pocket in your bag where the item should go (e.g., `pokemon`, `potions`, etc.).
//
// The function should:
//    1. Add the item to the correct pocket in the `bag` object.
//    2. Log a message: "You've added [item.name] to your [pocket]!"
//    3. Log the whole bag to the console to ensure it worked! 
//    4. Return the updated bag object.
//
// Example usage:
//    player.addToBag(starter, 'pokemon');

// Note how we are adding a new function directly onto the player object 
// so calling the function would be written as player.addToBag(item, "pocket")

// Note that .push() is a method that adds an item to the end of an array.
// You can use it to add items to the pockets in your bag.
// For example:
// player.bag.pokeballs.push(item);

player.addToBag = function (item, pocket) {
player.bag[pocket].push(item)
console.log("You've added " + item.name + " to your " + pocket + "!")
console.log(player.bag)
return(player.bag)
};

function sum(x,y){
  console.log(x+y)
return(x+y)
}
let result=sum("2","3")
console.log("this is the result ", result)

  
// --------------------------------------------------------------------
// Before you start your Pokémon journey, Professor Oak gives you your first Pokémon and a healing potion!
// In this mission, we'll test adding both to your bag using the `addToBag` function.

// 🚀 MISSION 04: Test Add to Bag Function
//
// Professor Oak hands you your first Pokémon and a healing potion.
// You need to add them to your bag!
//
// ➤ Your task:
//    1. Use the `addToBag` function to add the Pokémon to your bag.
//    2. Use the `addToBag` function to add the healing potion to your bag.

// ---------------------------------------------------------------

// Professor Oak gives us our Pokémon and an extra potion:

let potion = {
    name: "Super Potion",
    type: "potion",
    healing: 50
  };
  
// Add the starter Pokémon and potion to the bag:

player.addToBag(potion,"medicine")
player.addToBag(starter,"pokemon")
  
// ---------------------------------------------------------------



// Exports the player object for later use in the project
module.exports = player;