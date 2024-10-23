require('dotenv').config()
const axios = require('axios')

const PROTOCOL = process.env.PROTOCOL
const BASE_URL1 = process.env.BASE_URL1
const BASE_URL2 = process.env.BASE_URL2
const Q = process.env.Q
const APPID = process.env.APPID
const UNITS = process.env.UNITS
const DESIRED_LANGUAGE = process.env.DESIRED_LANGUAGE

const url1 = `${PROTOCOL}://${BASE_URL1}?q=${Q}&appid=${APPID}&units=${UNITS}&lang=${DESIRED_LANGUAGE}`;

axios.get(url1)
  .then((resposta) => {
    const data = resposta.data[0];
    const long = data.lon;
    const lat = data.lat;
    console.log(`Latitude: ${lat}, Longitude: ${long}`);

    const obterCondicoesAtuais = async (lat, long) => {
      const url2 = `${PROTOCOL}://${BASE_URL2}?lat=${lat}&lon=${long}&appid=${APPID}&units=${UNITS}&lang=${DESIRED_LANGUAGE}`;
      try {
        const resultado = await axios.get(url2);
        const feelsLike = resultado.data.main.feels_like;
        const description = resultado.data.weather[0].description;
        console.log(`Sensação Térmica: ${feelsLike}°C, Descrição: ${description}`);
      } catch (error) {
        console.error("Erro ao obter condições atuais:", error);
      }
    };

    obterCondicoesAtuais(lat, long);
    
  })
  .catch((error) => {
    console.error("Erro ao fazer a requisição de geocoding:", error);
  });