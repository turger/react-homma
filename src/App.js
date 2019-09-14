import React, {Component} from 'react'
import Timetable from './Timetable'
import './App.css'
import {getStopsData} from './requests'

class App extends Component {
  constructor() {
      super()
      this.state = { stopsData: [] }
    }

  async componentDidMount() {
    const response = await getStopsData()
    console.log('Response:', response) // open chrome devtools console panel Command+Option+J to see this output
    this.setState({stopsData: response.data.stops})
  }

  render() {
    const stopsData = [
      {
        stopName: 'Itäväylän pysäkki',
        stopTimes: [
          {
            route: 'Bussi 123',
            time: '12:55',
          },
          {
            route: 'Metro M1',
            time: '12:58',
          },
          {
            route: 'Metro M1',
            time: '13:02',
          },
          {
            route: 'Bussi 123',
            time: '13:05',
          }
        ]
      },
      {
        stopName: 'Joku toinen pysäkki',
        stopTimes: [
          {
            route: 'Ratikka 3',
            time: '12:55',
          },
          {
            route: 'Bussi 55',
            time: '12:58',
          },
          {
            route: 'Ratikka 8',
            time: '13:02',
          },
          {
            route: 'Bussi 55',
            time: '13:05',
          }
        ]
      }
    ]

    return (
      <div className="App">
        <h1>Aikataulu</h1>
        <Timetable stopsData={stopsData}/>
      </div>
    )
  }
}

export default App
