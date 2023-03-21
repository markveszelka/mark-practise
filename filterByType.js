// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE

// Feature: Print a list of beers to the console in
//  the following format `${name} (${type})`, if
//  a <type> argument is given, show only the beers
//  with the given type only.

const getBeers = require('./data')

function main(type) {
  console.log('type:', type)
  const filteredBeers = getBeers().filter((beer) => beer.type.includes(type)).map((beer) => `NAME: ${beer.name} TYPE: ${beer.type}`);
  console.log(filteredBeers);
}

main(process.argv[2])

