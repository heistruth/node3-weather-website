const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.4265855&lon=3.455655&appid=052a000cc2f4c3ffaa752bfd70635eae&units=imperial'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unabale to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "It is currently " + body.main.temp + " degrees out, with a windspeed of " + body.wind.speed + " The high today is " + body.main.temp_max + " with a low of " + body.main.temp_min)
        }
    })
}

module.exports = forecast
