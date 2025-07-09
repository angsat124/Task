const array = [10, 20, 21, 1, 5, 20, 5, 13]
const newSet = new Set(array);
const newArray = Array.from(newSet);

newArray.sort(function(a, b) {
    return a - b;
  });
 
console.log(newArray)