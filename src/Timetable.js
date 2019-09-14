import React, { Component } from 'react'
import './Timetable.css'

class Timetable extends Component {
  render() {
    const { stopsData } = this.props

    return (
      <div className="Timetable">
        {stopsData.map(stop =>
          <div className="Timetable_stop">
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
        )}
      </div>
    )
  }
}

export default Timetable
