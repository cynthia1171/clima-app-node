const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

const getInfo = async (direccion) => {

  try {
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);
    return `El clima de ${direccion} es de ${temp}.`;
  } catch(err) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
}

getInfo(argv.direccion).then(resp => {
  console.log(resp);
}).catch(err => {
  console.log(err);
});



