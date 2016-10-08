var iterativeLog = function(array) {
  var counter = 0
  array.forEach(function(element) {
    console.log(`${counter}: ${element}`);
    counter++
  });

}

function iterate(callback) {
  var animals = ["dog", "fish", "cat"]
  animals.forEach(function(animal) {
    callback(animal)
  });
  return animals
}

function doToArray(array, callback) {
  array.forEach(callback)
}
