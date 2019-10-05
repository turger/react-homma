const request = require('request')

const getCurrentTimestamp = () => {
  return Math.round(new Date().getTime() / 1000)
}

export const getStopsData = (stopIds, startTime = getCurrentTimestamp()) => new Promise(resolve => {
  const stopIdsString = `[${'"' + stopIds.join('","') + '"'}]`
  request.post(
    {
      url:'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
      headers: { 'Content-Type': 'application/graphql' },
      body: `{ stops(ids: ${stopIdsString}) {
                name
                gtfsId
                stoptimesWithoutPatterns(
                  startTime: "${startTime}",
                  timeRange: 180000,
                  numberOfDepartures:10
                ) {
                  realtimeArrival
                	headsign
                  trip {
                    route {
                      gtfsId
                      longName
                      shortName
                      mode
                    }
                  }
                }
              }
            }`
    },
    function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('Stops data upload failed:', err);
      }
      resolve(JSON.parse(body))
    }
  )
})

export const getStopsByRadius = (lat, lon) => new Promise(resolve => {
  request.post(
    {
      url:'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
      headers: { 'Content-Type': 'application/graphql' },
      body: `{ stopsByRadius(lat:${lat}, lon:${lon}, radius:1000, first: 5) {
                edges {
                  node {
                    distance
                    stop {
                      gtfsId
                      name
                    }
                  }
                }
              }
            }`
    },
    function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('Stops data upload failed:', err);
      }
      resolve(JSON.parse(body).data.stopsByRadius.edges)
    }
  )
})

export const getLocationByName = (search) => new Promise(resolve => {
  request.get({
    url: 'https://api.digitransit.fi/geocoding/v1/search',
    qs: {
      text: search,
      size: '1',
      'focus.point.lat': 60.171578,
      'focus.point.lon': 24.940529
    },
    json: true
  },
    function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('Location data upload failed:', err);
      }
      resolve(body.features.length > 0 ? body.features[0] : null)
    }
  )
})
