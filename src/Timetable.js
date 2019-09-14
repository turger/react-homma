import React, { Component } from 'react'

class Timetable extends Component {
  render() {
    const { stopsData } = this.props

    return (
      stopsData.map(stop =>
        <div>
          <h2>{stop.stopName}</h2>
          <table>
            <thead>
              <tr>
                <th>Kulkuväline</th>
                <th>Lähtöaika</th>
              </tr>
            </thead>
            <tbody>
              {(stop.stopTimes.map(stopTime =>
                <tr key={`${stopTime.route}-${stopTime.time}`}>
                  <td>{stopTime.route}</td>
                  <td>{stopTime.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    )
  }
}

export default Timetable
