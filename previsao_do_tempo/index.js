require ('dotenv').config()
const axios = require('axios')

const {
    PROTOCOL,
    BASE_URL,
    Q,
    APPID,
    CNT,
    UNITS,
    DESIRE_LANGUAGE
} = process.env

const vai = async () => {
    const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${DESIRE_LANGUAGE}`
    const resultado = await axios.get(url)
    // console.log(resultado.data)
    for(let previsao of resultado.data.list){
        console.log(`
            Data: ${new Date(previsao.dt * 1000).toLocaleString()},
            Temp min: ${previsao.main.temp_min}\u00B0,
            Temp max: ${previsao.main.temp_max}\u00B0,
            Umidade: ${previsao.main.humidity}%,
            Descrição: ${previsao.weather[0].description}
         `)
    }
}
vai()


// axios.get(url).then((res) => {
    // Exibir o seguinte texto: total de previsões: 4
//     console.log(`Total de previsões: ${res.data.cnt}`)

//     console.log('==========================')
//     return res.data
// })
// .then((res) => {
    // Mostrar a sensação térmica da primeira previsão do tempo
   // console.log(`Sensação térmica da primeira previsão: ${res.list[0].main.feels_like}°C`)
//    for(let previsao of res.list){
//     console.log(`Sensação térmica: ${previsao.main.feels_like}`)
//    }

//    console.log('==========================')
//    return res
// })
// .then((res) => {
//     for(let previsao of res.list){
//         console.log(new Date(previsao.dt * 1000).toLocaleString)
//         console.log('==========================')
//         return {sunrise: res.city.sunrise, sunset: res.city.sunset}
//     }
// })
//     .then((res) => {
        // Iterar sobre a coleção de previsões, mostrando nascer e por do sol em cada uma
//         console.log(`Nascer do Sol: ${new Date(res.sunrise * 1000).toLocaleString()}`)
//         console.log(`Por do Sol: ${new Date(res.sunset * 1000).toLocaleString()}`)
//     });

