const request = require("request")
const dotenv = require("dotenv").config()

const city = (process.argv[2]) === undefined ? process.env.DEFAULT_CITY : process.argv[2]

const options = {
  url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}&lang=ja`,
  method: "GET",
  json: true,
}

request(options, (error, res, body) => {
  const rainAmount1h = body.rain === undefined ? '-' : body.rain['1h']
  console.log(`現在の${body.name}の天気は${body['weather'][0]['description']}\n気温：${body.main.temp} ℃\n湿度：${body.main.humidity} %\n風速：${body.wind.speed} m/sec\n過去1時間の降雨量：${rainAmount1h} mm`)
})
