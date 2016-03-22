//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; //array, also an object
{}; //hash, also an object
1.1; //number
undefined; //undefined has it own type

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var myVar = 1;
console.log(typeof(myVar));

//3.2 Assign a variable that is a string

var myVarString = "hello";
console.log(myVarString);

//3.3 Assign a variable that is a boolean

var myBoolean = 1 !== 6;
console.log(myBoolean);


//3.4 Assign a variable that is an object

var person = {
  firstName: "Claire",
  lastName: "Smith"
};

person.["firstName"]

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var greet = function(respond){


  if (respond) {
    console.log("hello");
  }else{
    console.log("bye");
  }

}
greet(true)


var hello = "Yes";
if (hello === yes) {
  console.log("hello");
}else{
  console.log("bye");
}

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var firstElement = animal.shift();
var firstElement = animal[0];
//5.2. Assign the last element to a variable
var lastElement = animal[3];
var lastElement = animal.pop();

//5.3. Assign the length of an array to a variable
var lengthAnimals = animals.length;

//5.4. Add an item to the end of the array
animals.push("rat");

//5.5. Add an item to the start of the array
animals.unshift("dragon");

//5.6. Assign the index of hedgehog to a variable
var hedgehog = animals[1];
//Section 6

//6.1 Create an array of 5 vegetables
//6.2 Loop over the array and write to the console using a "while"
//6.3 Loop again using a "for" with a counter
//6.4 Loop again using a "for in"

var vegs= ["carrot", "potatoe", "onion", "brussel", "cauliflower"]



for (var i =0; i<vegs.length; i++){
  console.log(vegs[i]);
}

for (var veg in vegs){
  console.log(veg);
}





//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
var total_cash
    money_bag = [];
    for account in @accounts
      money_bag += account.amount;
   
    return money_bag;
   
// i know this isnt enteirly javascript


//7.2 Find the name of the account with the largest balance







//7.3 Find the name of the account with the smallest balance



//7.4 Calculate the average bank account value



//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food