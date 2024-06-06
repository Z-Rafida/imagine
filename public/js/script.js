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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
