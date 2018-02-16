

function createZeroOrOne() {
  return Math.round(Math.random());
}

let name;

let number = createZeroOrOne();

if (number === 1) {
  name = 'Chris'
} else {
  name = 'Kathy'
}

let fullMessage = `Hello ${name}`;

console.log(fullMessage)

let p = document.createElement("p");

p.innerHTML = fullMessage;

document.getElementById('app').appendChild(p)