var cat = $('#cat-pic');
var clickCount = $('#click-count');

var count = 0; // number of times the cat picture has been clicked

cat.click(function(e){
  count++;
  clickCount.text(count);
});
