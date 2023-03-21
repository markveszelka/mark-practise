// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit

// Task: Show the list of beer names in the following format
//  `${name} (${brewery})`. If a <keyword> is given, show only
//  those beers where the beer name includes that keyword.

const getBeers = require('./data')


function main(keyword) {
    console.log('keyword:', keyword)
    const filteredBeers = getBeers().filter((beer) => beer.name.includes(keyword));
    const displayBeers = filteredBeers.map(function (beer) {
      console.log(`${beer.name} (${beer.brewery})`);
    });
}

main(process.argv[2])

