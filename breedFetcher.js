const request = require('request');

const searchBreed = process.argv.slice(2);

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`;

request(URL, (error, response, body) => {
  //prints error if there is one
  if (error) {
    console.log('request error:', error);
    return;
  }
  //evaluate if the response went through or not
  if (response.statusCode !== 200) {
    console.log(`Status code: ${response.statusCode}`);
    return;
  }
  const breed = JSON.parse(body);

  // lets the user know we didn't find the breed
  if (breed <= 0) {
    console.log(`the breed of ${searchBreed} is not found.`);
    return;
  }
  console.log(breed[0].description);
});
