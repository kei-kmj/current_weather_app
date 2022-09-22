const axios = require('axios').default
require('dotenv').config()

const city = (process.argv[2]) === undefined ? process.env.DEFAULT_CITY : process.argv[2]

axios
  .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}&lang=ja`)
  .then((response) => console.log(weather(response)))
  .catch(console.error)

function weather (response) {
  const rainAmount1h = response.data.rain === undefined ? '-' : response.data.rain['1h']

  return `現在の${response.data.name}の天気は${response.data['weather'][0]['description']}\n気温：${response.data.main.temp} ℃\n湿度：${response.data.main.humidity} %\n風速：${response.data.wind.speed} m/sec\n過去1時間の降雨量：${rainAmount1h} mm`;
}

