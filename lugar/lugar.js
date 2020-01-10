const axios = require('axios');

const getLugarLatLng = async (direccion) => {

  let location = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${location}`,
    timeout: 1000,
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 
      'x-rapidapi-key':'nOyGVJACTimsh7JqOWUlTioosuACp1nmL1Jjsn5Nay8ELnHBwQ'}
  });
  
  const resp = await instance.get();

  if(resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }
  const data = resp.data.Results[0];
  const city = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    city,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}