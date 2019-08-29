import React, { Component } from 'react'

class Timetable extends Component {
  render() {
    const { stopTimes } = this.props

    return (
      <table>
        <thead>
          <tr>
            <th>Kulkuväline</th>
            <th>Lähtöaika</th>
          </tr>
        </thead>
        <tbody>
          {(stopTimes.map(stopTime =>
            <tr key={`${stopTime.route}-${stopTime.time}`}>
              <td>{stopTime.route}</td>
              <td>{stopTime.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Timetable
