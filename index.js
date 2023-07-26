const express = require('express');
const cors = require('cors');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const app = express();
app.use(cors());

// to bypass CORS
// app.get('/', async (req, res) => {
//   if (req.query.url) {
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': process.env.API_KEY,
//         'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
//       },
//       url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
//       params: {
//         city_name: 'Bratislava',
//         country_name: 'Slovakia'
//       },
//     }
//     const proxyRes = await axios.get(`${req.query.url}`, options );
//     // const proxyRes = await axios.get(req.query.url);
//     res.send(proxyRes.data);
//   } else {
//     res.send('Please provide a url query parameter');
//   }
// });

app.get('/',async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
    params: {
      city_name: 'Bratislava',
      country_name: 'Slovakia'
    },
    headers: {
      'X-RapidAPI-Key': 'e377e81e46mshc55f3ddf23c5d2dp1a6d0cjsn8fe11bcbb1f8',
      'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
})

app.listen(5001, () => {
  console.log('Listening on port 5001...');
});