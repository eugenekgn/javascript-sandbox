let mammal = {
  sound: '......',
  talk: function () {
    console.log(this.sound);
  }
};


mammal.talk();

// loses this, context is removed
let talkFunction = mammal.talk;
talkFunction();

let cat = {
  sound: 'meow!'
};

let talkCat = mammal.talk.bind(cat);
talkCat();


// let button = document.getElementById('myNiceButton');
// button.addEventListener('click', mammal.talk.bind(cat))