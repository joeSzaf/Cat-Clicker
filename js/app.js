var cat = $('#cat-pic');
var clickCount = $('#click-count');
var catContainer = $('#cat-container');
var catSelector = $('#cat-selector');
var catPic = $('.cat-pic');

// Globals
var numOfCats = 0;

// Cat object that stores information about the cats to be clicked

function Cat(name){
  this.name = name;
  numOfCats ++; // increments nubmer of cats as a counter id
  this.catNum = numOfCats
  this.clicks = 0; // tracks number of times cat has been clicked
  this.addCat = function() {
    catSelector.append(`<option value="cat${this.catNum}"">${this.name}</option>`)
  };

  this.increment = function() {
    this.clicks ++;
    $(`#cat-${this.catNum}`).text(this.clicks);
  }

  // update cat and information for cat
  this.updateCat = function(){
    catContainer.html(`<div class='cat-picture-div'>
      <img src='img/cat${this.catNum}.jpg' class='cat-pic' id='cat${this.catNum}'>
    </div>
    <div class='cat-details-div'>
      <h2>${this.name}</h2>
      <h3>Has been clicked <span id='cat-${this.catNum}'>${this.clicks}</span> times!</h3>
    </div>`);

    $('img').click(function(e){
        e.preventDefault();
        window[this.id].increment();
    });

  }
}

var cat1 = new Cat('Leonardo');
var cat2 = new Cat('Lilypad');
var cat3 = new Cat('Tallow and Tuba');
var cat4 = new Cat('Pico de Gato');
var cat5 = new Cat('Ferdinand');

cat1.addCat();
cat2.addCat();
cat3.addCat();
cat4.addCat();
cat5.addCat();

// Holds cat objects
const cats = [];

// on selection of cat, updates ui to show selected cats
catSelector.change(function(e){
  e.preventDefault();
  if (catSelector.val() != 'noCat'){
    window[catSelector.val()].updateCat();
  }
});

/*
cat.click(function(e){
  count++;
  clickCount.text(count);
});

catContainer.append(`<div class='cat'>
  <div class='cat-picture-div'>
    <img src='img/cat${this.catNum}.jpg' class='cat-pic' id='cat${this.catNum}'>
  </div>
  <div class='cat-stats'>
    <h2>${this.name}</h2>
    <h3><span id='cat-${this.catNum}'>0</span> clicks!</h3>
  </div>
</div>`);
*/
