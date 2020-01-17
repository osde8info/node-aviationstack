const axios = require('axios');

const params = {
  access_key: process.env.MYAPIKEY,
  limit: 5
}

axios.get('http://api.aviationstack.com/v1/flights', {params})
  .then(response => {
    const resp = response.data;
    if (Array.isArray(resp.data)) {
        resp.data.forEach(flight => {
		console.log([flight.flight.iata,flight.flight_date])
		console.log([flight.departure.iata,flight.arrival.iata])
		console.log([flight.arrival.scheduled,flight.arrival.estimated])
		console.log('')
        });
    }
  }).catch(error => {
    console.log(error);
  });
