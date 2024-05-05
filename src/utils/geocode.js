const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiaGVpc3RydXRoIiwiYSI6ImNsdmkxZnZrcTE3M3QycW52eG5rdnM3YmMifQ.Q_khkCODrW5mQ5x66dYakw&limit=1'

    request({ url, json: true }, (error, response) => {
        if (error) {
             callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].properties.coordinates.latitude,
                longitude: response.body.features[0].properties.coordinates.longitude,
                location: response.body.features[0].properties.name
            })

        }
    })
}

module.exports = geocode