import React, { Component } from 'react'
import {getLocationByName} from './requests'
import './Search.css'

class Search extends Component {
  constructor() {
    super()
    this.state = {search: '', location: ''}
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    if (!this.state.search) return null
    const location = await getLocationByName(this.state.search)
    const lat = location.geometry.coordinates[1]
    const lon = location.geometry.coordinates[0]
    const locationText = `${location.properties.name}, ${location.properties.neighbourhood || location.properties.region}`
    this.setState({location: locationText})
    this.props.updateLocation(lat, lon)
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input className="Search_input" type="text" name="location" value={this.state.search} onChange={this.handleChange} placeholder="Sijainti" />
          <input className="Search_button" type="submit" value="Hae" />
        </form>
        <p>{this.state.location}</p>
      </div>
    )
  }
}

export default Search
