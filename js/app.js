$(function(){

  // where the data is contained
  var model = {

    // current cat //
    currentCat: 0,

    // tracks cats created
    numOfCats: 0,

    // Cat object constructor
    Cat: function(name){
        this.name = name;
        model.numOfCats ++; // increments nubmer of cats as a unique id
        this.catNum = model.numOfCats;
        this.clicks = 0; // tracks number of times cat has been clicked
        this.addCat = function() {
          catSelector.append(`<option value="cat${this.catNum}"">${this.name}</option>`)
        };

        this.increment = function() {
          this.clicks ++;
        }
      },

    // Holds cat objects
    cats: [],

    init: function(){
      // create initial cats
      var cat1 = new model.Cat('Leonardo');
      model.cats.push(cat1);
      var cat2 = new model.Cat('Lilypad');
      model.cats.push(cat2);
      var cat3 = new model.Cat('Tallow and Tuba');
      model.cats.push(cat3);
      var cat4 = new model.Cat('Pico de Gato');
      model.cats.push(cat4);
      var cat5 = new model.Cat('Ferdinand');
      model.cats.push(cat5);
    }

  };

  // works between the model and the two views
  var octopus = {

    init: function() {
      model.init();
      catSelectionView.init();
      catDisplayView.init();
    },

    getCatId: function(){
      return model.currentCat;
    },

    getCatNames: function(){
      var names = [];
      for (let cat in model.cats){
        names.push(model.cats[cat].name);
      }
      return names;
    },

    getCatName: function(){
      return model.cats[model.currentCat-1].name;
    },

    getClickCount: function(){
      return model.cats[model.currentCat-1].clicks;
    },

    // increments the number of times the cat picture has been clicked, stored in the cat object
    increment: function(){
      model.cats[model.currentCat-1].clicks ++;
      catDisplayView.updateClicks();
    },

    // sets the current cad id to the selected cat
    setCurrentCat: function(cat){
      model.currentCat = cat;
    }

  };

  // the view for the cat selection
  var catSelectionView = {
    init: function(){
      this.catSelector = $('#cat-selector');

      cats = octopus.getCatNames();

      for (let i in cats){
        let cat = 1 + parseInt(i);
        this.catSelector.append(`<option value="${cat}">${cats[cat-1]}</option>`);
      }

      this.catSelector.change(function(e){
        e.preventDefault();
        let catVal = catSelectionView.catSelector.val();
        if (catVal != 'noCat'){
          octopus.setCurrentCat(catVal);
          catDisplayView.render();
        }
      });
    }

  };

  // the view that displays the selected cat, name, and number of clicks
  var catDisplayView = {

    currentCatId: 0,

    init: function() {
      this.catContainer = $('#cat-container')
      this.cat = $('#cat-pic');
      this.catPic = $('.cat-pic');
      ;
    },

    // update cat and information for cat
    render: function(){
      var name = octopus.getCatName();
      var CatId = octopus.getCatId();
      var clicks = octopus.getClickCount();

      catDisplayView.catContainer.html(`<div class='cat-picture-div'>
        <img src='img/cat${CatId}.jpg' class='cat-pic' id='cat${CatId}'>
      </div>
      <div class='cat-details-div'>
        <h2>${name}</h2>
        <h3>Has been clicked <span id='click-count'>${clicks}</span> times!</h3>
      </div>`);

      this.clickCount = $('#click-count');

      $('img').click(function(e){
        e.preventDefault();
        octopus.increment();
      });

    },

    updateClicks: function(){
        var count = octopus.getClickCount();
        catDisplayView.clickCount.text(count);
      }
    };

    var adminView = {

      adminActive: false,

      init: function() {
        this.catContainer = $('#cat-container')
        this.cat = $('#cat-pic');
        this.catPic = $('.cat-pic');
        ;
      },

      // update cat and information for cat
      render: function(){
        var name = octopus.getCatName();
        var CatId = octopus.getCatId();
        var clicks = octopus.getClickCount();

        catDisplayView.catContainer.html(`<div class='cat-picture-div'>
          <img src='img/cat${CatId}.jpg' class='cat-pic' id='cat${CatId}'>
        </div>
        <div class='cat-details-div'>
          <h2>${name}</h2>
          <h3>Has been clicked <span id='click-count'>${clicks}</span> times!</h3>
        </div>`);

        this.clickCount = $('#click-count');

        $('img').click(function(e){
          e.preventDefault();
          octopus.increment();
        });

      }
      };

  octopus.init();
});
