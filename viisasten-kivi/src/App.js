import React, {Component} from 'react'
import Timetable from './Timetable'
import './App.css'
import {getStopsData, getLocationByName} from './requests'

class App extends Component {
  constructor() {
      super()
      this.state = { stopsData: [] }
    }

  async componentDidMount() {
    await this.getStopsData()
    setInterval(async () => {
      await this.getStopsData()
    } , 60000)

    const location = await getLocationByName('Mannerheimintie 1')
    console.log('location', location)
  }

  getStopsData = async () => {
    const response = await getStopsData()
    console.log('Response:', response) // open chrome devtools console panel Command+Option+J to see this output
    this.setState({stopsData: response.data.stops})
  }

  render() {
    return (
      <div className="App">
        <h1>Aikataulu</h1>
        <Timetable stopsData={this.state.stopsData}/>
      </div>
    )
  }
}

export default App
