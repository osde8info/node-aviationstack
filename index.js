const axios = require('axios');

const params = {
  access_key: process.env.MYAPIKEY,
  limit: 5
}

console.log(params.access_key)

axios.get('http://api.aviationstack.com/v1/flights', {params})
  .then(response => {
    const resp = response.data;
    if (Array.isArray(resp.data)) {
        resp.data.forEach(flight => {
            //if (!flight['live']['is_ground']) {
		console.log(flight.flight_date)
		console.log(flight.departure.iata)
		console.table(flight['airline']['name'], flight['flight']['iata'],
                    flight['departure']['airport'], flight['departure']['iata'],
                    flight['arrival']['airport'], flight['arrival']['iata']);
            //}
        });
    }
  }).catch(error => {
    console.log(error);
  });
