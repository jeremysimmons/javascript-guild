// Import stylesheets
import './style.css';
const appDiv = document.getElementById('app');
const append = function(str) {
  appDiv.insertAdjacentHTML( 'beforeend', str );
}

var numbers = [9,8,7,6,5,4,3,2,1];

const asString = (array) => {
  return JSON.stringify(array);
}

const incrementByIndex = (list) => {
   return list.map((value, index) => value + index);
}
const arraysEqual = (arr1, arr2) => {
  return  JSON.stringify(arr1)===JSON.stringify(arr2);
}

var expectedResults = [9,9,9,9,9,9,9,9,9];
var actualResults = incrementByIndex(numbers);

append(`<h1>Increment By Index</h1>`)

append(`<strong>Numbers</strong>`)
append(`<pre>${asString(numbers)}</pre>`)

append(`<strong>Expected</strong>`)
append(`<pre>${asString(expectedResults)}</pre>`)

append(`<strong>Actual</strong>`)
append(`<pre>${asString(actualResults)}</pre>`)

append(`<strong>Pass</strong>`)
append(`<pre>${arraysEqual(expectedResults, actualResults)}</pre>`)

