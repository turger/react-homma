const request = require('request')

const getCurrentTimestamp = () => {
  return Math.round(new Date().getTime() / 1000)
}

export const getStopsData = (startTime = getCurrentTimestamp()) => new Promise(resolve => {
  const stopIds = `["HSL:1310102", "HSL:1020171"]` // in here add your own stop or stops
  request.post(
    {
      url:'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
      headers: { 'Content-Type': 'application/graphql' },
      body: `{ stops(ids: ${stopIds}) {
                name
                gtfsId
                stoptimesWithoutPatterns(
                  startTime:"${startTime}",
                  timeRange: 180000,
                  numberOfDepartures:10
                ) {
                  realtimeArrival
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
