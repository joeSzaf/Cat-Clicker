$(function(){

  // where the data is contained
  var model = {

    init: function() {
      // tracks number of cats created, used to create unique IDs for cats
      var numOfCats = 0;

      // Holds cat objects
      const cats = [];

      var cat1 = new Cat('Leonardo');
      var cat2 = new Cat('Lilypad');
      var cat3 = new Cat('Tallow and Tuba');
      var cat4 = new Cat('Pico de Gato');
      var cat5 = new Cat('Ferdinand');


    },

    Cat: function(name){
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
    },

  };

  // works between the model and the two views
  var octopus = {

    // increments the number of times the cat picture has been clicked, stored in the cat object
    increment: function(cat){
      window[cat].clicks ++;
      $(`#cat-${window[cat].catNum}`).text(window[cat].clicks);
    },

  };

  // the view for the cat selection
  var catSelectionView = {

  };

  // the view that displays the selected cat, name, and number of clicks
  var catDisplayView = {

    init: function() {
      var cat = $('#cat-pic');
      var clickCount = $('#click-count');
      var catContainer = $('#cat-container');
      var catSelector = $('#cat-selector');
      var catPic = $('.cat-pic');
    },

    // update cat and information for cat
    render: function(){
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

  };

});



// Cat object that stores information about the cats to be clicked





cat1.addCat();
cat2.addCat();
cat3.addCat();
cat4.addCat();
cat5.addCat();



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
