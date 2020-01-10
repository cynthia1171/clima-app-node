const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c7e9c13c0be625aff18c0f32224af128
  `);

  let temCel = (resp.data.main.temp - 273.15).toFixed(2);

  return `${temCel}C°`;
}

module.exports = {
  getClima
}