let excercise = [
  'Pajacyki',
  'Pompki', 
  'Przysiady',
  'Guma',
  'Zonglowanie',
  'Cwiczenia Bioder',
  'Mata kolce',
];

let other = [
  'Pranie?',
  'Porzadek', 
  'Smieci?',
];

// Define elements as variables
let buttons = document.querySelectorAll('[data-array]');
let out = document.getElementById('out');

// Randomize function
function randomize(items) {
  let current = out.innerHTML;
  let item;
  do {
    item = items[Math.floor(Math.random() * items.length)];  
  } while (!item.localeCompare(current));
  
  out.innerHTML = item; // Output to DOM
};

for(var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (e) {
      randomize(eval(e.target.dataset.array));
    }
}

window.onload = function () { randomize(excercise); }
