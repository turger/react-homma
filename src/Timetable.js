import React, { Component } from 'react'
import './Timetable.css'

class Timetable extends Component {
  render() {
    const { stopsData } = this.props
    if (!stopsData) return null // to prevent errors while request to HSL api is being made
    console.log('stopsData',stopsData)

    return (
      <div className="Timetable">
        {stopsData.map(stop =>
          <div className="Timetable_stop" key={stop.gtfsId}>
            <h2>{stop.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>Kulkuväline</th>
                  <th>Lähtöaika</th>
                </tr>
              </thead>
              <tbody>
                {(stop.stoptimesWithoutPatterns.map(stopTime =>
                  <tr key={`${stopTime.trip.route.gtfsId}-${stopTime.realtimeArrival}`}>
                    <td>{stopTime.trip.route.mode} {stopTime.trip.route.shortName}</td>
                    <td>{stopTime.realtimeArrival}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}

export default Timetable
