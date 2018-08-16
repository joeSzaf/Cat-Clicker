var cat = $('#cat-pic');
var clickCount = $('#click-count');
var catContainer = $('#cat-container');

// Globals
numOfCats = 0;



// Cat object that stores information about the cats to be clicked

function Cat(name){
  this.name = name;
  numOfCats ++; // increments nubmer of cats as a counter id
  this.catNum = numOfCats
  this.clicks = 0; // tracks number of times cat has been clicked
  this.addCat = function() {
    catContainer.append(`<div class='cat'>
      <div class='cat-picture-div'>
        <img src='img/cat${this.catNum}.jpg' class='cat-pic' id='cat${this.catNum}'>
      </div>
      <div class='cat-stats'>
        <h2>${this.name}</h2>
        <h3><span id='cat-${this.catNum}'>0</span> clicks!</h3>
      </div>
    </div>`);
  };

  this.increment = function() {
    this.clicks ++;
    $(`#cat-${this.catNum}`).text(this.clicks);
    console.log(this.clicks);
  }
}

var cat1 = new Cat('Leonardo');
var cat2 = new Cat('Lilypad');
cat1.addCat();
cat2.addCat();

// Globals

var count = 0; // number of times the cat picture has been clicked
const cats = []; // Holds cat objects

$('.cat-pic').on('click', function(e){
    e.preventDefault();
    window[this.id].increment();
});

/*
cat.click(function(e){
  count++;
  clickCount.text(count);
});
*/
