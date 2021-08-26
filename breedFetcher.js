const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    //prints error if there is one
    if (error) {
      return callback('request error:', error);
      
    }
    //evaluate if the response went through or not
    if (response.statusCode !== 200) {
      return callback(`Status code: ${response.statusCode}`);
      
    }
    const breed = JSON.parse(body);

    // lets the user know we didn't find the breed
    if (breed <= 0) {
      return callback(`the breed of ${breedName} is not found.`);
      
    }
    return callback(error, breed[0].description);
  });
};

module.exports = fetchBreedDescription;
