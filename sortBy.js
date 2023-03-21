// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score

// Feature 1: sort by abv (do it on different branch than Feature 2)
//  Print a list of beer with the following format
//  `${name} (score: ${score}, abv: ${abv})`
//  If the given param is "abv" sort the beers in ascending
//  order of their abv value.

// Feature 2: sort by score (do it on different branch than Feature 1)
//  Print a list of beer with the following format
//  `${name} (score: ${score}, abv: ${abv})`
//  If the given param is "score" sort the beers in ascending
//  order of their score value.

const getBeers = require('./data')

function main(property) {
  if(property === 'score') {
    console.log('property:', property)
    getBeers().sort((a, b) => a.score - b.score).map((beer) => console.log(`${beer.name} (score: ${beer.score}, abv: ${beer.abv})`))
  } else if (property === 'abv') {
    getBeers().sort((a, b) => a.abv - b.abv).map((beer) => console.log(`${beer.name} (score: ${beer.score}, abv: ${beer.abv})`))
  }
}

main(process.argv[2])

