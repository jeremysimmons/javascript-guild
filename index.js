// Import stylesheets
import './style.css';
const appDiv = document.getElementById('app');
const append = function(str) {
  appDiv.insertAdjacentHTML( 'beforeend', str );
}

var numbers = [1,2,3,4,5,6,7,8,9];

const asString = (array) => {
  return JSON.stringify(array);
}

const incrementByOne = (list) => {
   return list.map(x => x + 1);
}
const arraysEqual = (arr1, arr2) => {
  return  JSON.stringify(arr1)===JSON.stringify(arr2);
}

var expectedResults = [2,3,4,5,6,7,8,9,10];
var actualResults = incrementByOne(numbers);

append(`<strong>Numbers</strong>`)
append(`<pre>${asString(numbers)}</pre>`)

append(`<strong>Expected</strong>`)
append(`<pre>${asString(expectedResults)}</pre>`)

append(`<strong>Actual</strong>`)
append(`<pre>${asString(actualResults)}</pre>`)

append(`<strong>Pass</strong>`)
append(`<pre>${arraysEqual(expectedResults, actualResults)}</pre>`)

