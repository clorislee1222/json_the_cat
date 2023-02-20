const request = require('request');
const API = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function (breedName, callback) {
  request(`${API}?q=${breedName}`, (error, body) => {
    //console.log(typeof body);
    if (error) {
      callback(error, null);
      //console.log("Error: ", error);
    } else {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('The requested breed is not found.', null);
      }
    }
  });
}

module.exports = { fetchBreedDescription };
