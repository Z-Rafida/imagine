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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
