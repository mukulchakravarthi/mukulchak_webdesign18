$( '#nav li:has(ul)' ).doubleTapToGo();
$(document).ready(function(){

regionPrefix = ["Autumn", "Ash", "Birch", "Century", "Cherry", "Cress", "Elm", "Fern", "Fair", "Ficus", "Gale", "Green", "Harmony", "Heritage", "Hickory", "Magnolia", "Maple", "Oak", "Old", "Pebble", "Placid", "Pleasant", "Red", "Rocky", "Rolling", "Rose", "Sleepy", "Stony", "Sunny", "Sycamore", "Tranquil", "Walnut", "Willow", "Whispering", "Winding"];

regionSuffix = ["Acres", "Bluff", "Brook", "Canyon", "Commons", "Chase", "Creek", "Crossing", "Estates", "Gardens", "Glen", "Greens", "Grove", "Heights", "Hill", "Knolls", "Meadow", "Mill", "Park", "Place", "Plains", "Point", "Ridge", "Rock", "Run", "Terrace", "View", "Way", "Woods"];

function generateName(){
  var randomPrefix = Math.floor(Math.random() * (regionPrefix.length));
  var randomSuffix = Math.floor(Math.random() * (regionSuffix.length));
  
  $('.region-name').text('' + regionPrefix[randomPrefix] + " " + regionSuffix[randomSuffix])
}
  
$('.generate-btn').click(generateName);
  
});