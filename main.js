const axios = require('axios').default
require('dotenv').config()

const city = (process.argv[2]) === undefined ? process.env.DEFAULT_CITY : process.argv[2]

axios
  .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}&lang=ja`)
  .then((current_weather) => console.log(format_content(current_weather)))
  .catch(console.error)

function format_content (weather) {
  const rainAmount1h = weather.data.rain === undefined ? '-' : weather.data.rain['1h']

  return `現在の${weather.data.name}の天気は${weather.data['weather'][0]['description']}\n気温：${weather.data.main.temp} ℃\n湿度：${weather.data.main.humidity} %\n風速：${weather.data.wind.speed} m/sec\n過去1時間の降雨量：${rainAmount1h} mm`
}

