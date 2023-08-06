var count = 0;
var value = 1;


function resetCount() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}

function increaseCount() {
  count += checkValue();
  document.getElementById("count").innerHTML = count;
}

function decreaseCount() {
  count -= checkValue();
  document.getElementById("count").innerHTML = count;
}

function randomCount(min = -1000, max = 1000) {
  let difference = max - min;
  let rand = Math.random();

  rand = Math.floor(rand * difference);

  rand = rand + min;

  count = rand;

  document.getElementById("count").innerHTML = count;
}


function checkValue() {
  return value;
} 

