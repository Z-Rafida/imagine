const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt ('Enter Your Full Name');
    document.getElementById('name').innerText = name;
}

// variables
const pi = 3.142;
let username = 'rafida'
let age = '50';
let present = false;

// objects
const person = {
    username: 'rafida',
    age: 50,
    present: false,
    child: {
        name:'mickey mouse',           
        friend: {
            name: 'Biggie'
        }
    }
}
console.log(person.username);
person.age = 55;
console.log(person)



// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'blue'
  }
  
  const bottles = [bottle1, bottle2,]
  bottles;
  bottles.push(bottle1);
  bottles.push(bottle2)
  bottles;
  bottles[1].size
  
  const date = new Date();
  date.getDay();
  // if/else
//   const age =18
  if (age>=18){
    'You are true'
  } else{
    'You are false'
  }
  
  
  // for loop
  for(let i =0; i <= 5; i++) {
    console.log('we did it!')
  }
  
  
  
  // function
// defining a function
// use function keyword and the name you want to assign to the function
// return is like an output function
function login(username, password){
  // validate the username and password
  if (!username|| !password) {
    return 'username or password not provided'
  }
  //  || == or, && == and
  // verify username and password
  if (username == 'Rafie' && password == '1234'){
    return 'User is logged in';
  } else{
    return 'invalid username or password'
  }
}

// invoking a function
// you invoke a funtion by using the name of the function and add parenthesis
login('Rafie');



// (===) = strict equality
// 

// basic arithmetic operations
11 +10
50-25
50/5
10*3
14%3
Math.round(18/5)
Math.random() *1000  
Math.max(34,45,61)
  
  
  
  
  // strings iin javascript
// concatenation
const firstname = 'Rafida';
const lastname = 'Zakaria';
firstname + ' ' + lastname;
// Template literal
`${firstname} ${lastname}`;

// string Methods

let fullname = "rafida zakaria"
fullname.length
fullname.toUpperCase()
fullname.charAt(8)
fullname.slice(7,14)
fullname.split("")
fullname.replace("zakaria", "yakubu")

// string conversion
parseInt('3.243')
Number("3.243")
parseFloat('3.243')
let amount = 1600
amount.toString()
// use back ticks instead of qoutes`   
console.log(`GHS ${1600}`)
  
  // // write a function that will add a participant to our Google Classroom.


// function to add someone
const participant = [];
function addParticipant(email){
  // check if email was provided
  if (email=== undefined || email === null){
    return 'No email provided';
  }
  // check if email is valid
  if (!email.includes ('@'))
    return 'invalid email provided'

  // add email to participatants
  participant.push(email)
  return 'Participant added'
}
addParticipant('zakariarafida81@gmail.com');
('zakariarafida81@gmail.com')
addParticipant()
participant;


// Arraya in Javascript
const users = [
  {
    username:'Rafie',
    password:'1234',
    email:'zakariarafida81@gmail.com'
  },
  {
    username:'Rafida',
    password:'12345',
    email:'zakariarafida81@yahoo.com'
  }
];


  // write a function that will take a user with firstname, lastname and return fullname;


function fullName (user){
  return {
    ...user,
   fullName: user.firstname + ' ' + user.lastname
  };
}
const user = {
  firstname: 'Rafida',
 lastname: 'Zakaria'
}
fullName(user);

// array map
const users = [
  {firstname:'Rafida',  lastname: 'Zakaria'},
  {firstname:'Naiza',  lastname: 'Zakaria'},
  {firstname:'Shaiban',  lastname: 'Zakaria'},
  {firstname:'Rawbil',  lastname: 'Zakaria'},
]
users.map(fullName);

// square of numbers
function square(number) {
  return number **2;
}
square(4);
const numbers =[9, 8, 5, 7];
numbers.map(square);


// array filter
function isEven(number) {
  return number % 2 === 0
}
isEven(6);
numbers.filter(isEven)

  
  
  
  
  
  
  
  
  
  
  
  
