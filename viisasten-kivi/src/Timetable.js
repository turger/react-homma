import React, { Component } from 'react'

class Timetable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Kulkuväline</th>
            <th>Lähtöaika</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bussi 123</td>
            <td>12:55</td>
          </tr>
          <tr>
            <td>Metro M1</td>
            <td>12:58</td>
          </tr>
          <tr>
            <td>Metro M1</td>
            <td>13:02</td>
          </tr>
          <tr>
            <td>Bussi 123</td>
            <td>13:05</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Timetable
