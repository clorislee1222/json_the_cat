const request = require('request');
const breed = process.argv[2];
const API = 'https://api.thecatapi.com/v1/breeds/search';

request(`${API}?q=${breed}`, (error, response, body) => {
  //console.log(typeof body);

  if (error) {
    console.log("Error: ", error);
  } else {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if (data.length === 0) {
      console.log('The requested breed is not found.');
    } else {
      console.log(`${data[0].description}`);
    }
  }
});