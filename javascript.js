// cat below
  var animal = document.getElementById('animalPic');
// alert(animal.innerHTML);

animal.onclick = function(){
  var animalSounds = [
    'moo',
    'meow',
    'quack',
    'woof',
    'oink',
    'neigh'
  ];
  var beginningOfPhrase = 'The cat says ';
  var sound;

  var randomIndex = Math.floor( Math.random() * animalSounds.length);
  sound = animalSounds[randomIndex];

alert(beginningOfPhrase + sound);
};
// buffalo below
var animal = document.getElementById('animalPic');
// alert(animal.innerHTML);

Buffalo.onclick = function(){
var animalSounds = [
  'moo',
  'meow',
  'quack',
  'woof',
  'oink',
  'neigh'
];
var beginningOfPhrase = 'The buffalo says ';
var sound;

var randomIndex = Math.floor( Math.random() * animalSounds.length);
sound = animalSounds[randomIndex];

alert(beginningOfPhrase + sound);
};
// rhino below
var animal = document.getElementById('animalPic');
// alert(animal.innerHTML);

Rhino.onclick = function(){
var animalSounds = [
  'moo',
  'meow',
  'quack',
  'woof',
  'oink',
  'neigh'
];
var beginningOfPhrase = 'The rhino says ';
var sound;
// rhino
var randomIndex = Math.floor( Math.random() * animalSounds.length);
sound = animalSounds[randomIndex];

alert(beginningOfPhrase + sound);
};
