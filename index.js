// Import stylesheets
import './style.css';
const appDiv = document.getElementById('app');
const append = function(str) {
  appDiv.insertAdjacentHTML( 'beforeend', str );
}
const asString = (array) => {
  return JSON.stringify(array, null, 2);
}
const arraysEqual = (arr1, arr2) => {
  return  JSON.stringify(arr1)===JSON.stringify(arr2);
}

var input = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

var expectedResults = [
  "red",
  "green",
  "blue",
  "cyan",
	"magenta",
	"yellow",
	"black",
];

const flatten = (list) => {
   return list.map(x => x.color);
}
var actualResults = flatten(input);

append(`<h1>Map - Flattening Data</h1>`)

append(`<strong>Numbers</strong>`)
append(`<pre>${asString(input)}</pre>`)

append(`<strong>Expected</strong>`)
append(`<pre>${asString(expectedResults)}</pre>`)

append(`<strong>Actual</strong>`)
append(`<pre>${asString(actualResults)}</pre>`)

append(`<strong>Pass</strong>`)
append(`<pre>${arraysEqual(expectedResults, actualResults)}</pre>`)

