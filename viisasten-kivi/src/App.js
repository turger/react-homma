import React, {Component} from 'react'
import Timetable from './Timetable'
import Search from './Search'
import './App.css'
import {getStopsData, getStopsByRadius} from './requests'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stopsData: [],
      lat: null,
      lon: null
    }
  }

  async componentDidMount() {
    await this.getStopsData()
    setInterval(async () => {
      await this.getStopsData()
    } , 60000)
  }

  updateLocation = async (lat, lon) => {
    this.setState({lat, lon}, this.getStopsData)
  }

  getStopsData = async () => {
    const {lat, lon} = this.state
    if (lat && lon) {
      const stops = await getStopsByRadius(lat, lon)
      const stopIds = stops.map(stop => stop.node.stop.gtfsId)
      const response = await getStopsData(stopIds)
      this.setState({stopsData: response.data.stops})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Aikataulu</h1>
        <Search updateLocation={this.updateLocation}/>
        <Timetable stopsData={this.state.stopsData}/>
      </div>
    )
  }
}

export default App
