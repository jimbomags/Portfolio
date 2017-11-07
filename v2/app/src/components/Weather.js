import React, { Component } from 'react'
import MyLoc from 'react-icons/lib/md/my-location'
import Send from 'react-icons/lib/md/send'

class Weather extends Component {
  constructor(props){
    super(props)
    this.state = {
      address: '',
      weatherContent: false,
      location: '',
      condition: '',
      icon: '',
      temp: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.getLatLong = this.getLatLong.bind(this)
    this.findUserLocation = this.findUserLocation.bind(this)
    this.errorHandler = this.errorHandler.bind(this)
  }
  handleChange(event){
    this.setState({
      address: event.target.value
    })
  }
  errorHandler(response) {
    let input = document.querySelector('#location-search-field input')
    let weatherError = document.querySelector('#weather-error')

    input.classList.add('error-input')
    weatherError.classList.add('error')
    weatherError.innerText = response
  }
  getLatLong(event) {
    event.preventDefault()

    let input = document.querySelector('#location-search-field input')

    try {
      if (input.value.length == 0) throw 'Please enter a location'
      const encodedAddress = encodeURIComponent(this.state.address)
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBrX29SqRNyMJOxkzo64rbBDbpBxZASzks`

      var resultsObj
      var location = {}

      if (navigator.onLine) {
        fetch(url).then(response => {
          return response.text()
        }).then(text => {
          resultsObj = JSON.parse(text)
          if (resultsObj.status == 'ZERO_RESULTS') throw 'Unable to find that location'
          location.lat = resultsObj.results[0].geometry.location.lat
          location.long = resultsObj.results[0].geometry.location.lng
          this.getWeather(location)
        }).catch((err) => {
          this.errorHandler(err)
        })
      } else {
        throw 'Please check your connection'
      }
    } catch(err) {
      this.errorHandler(err)
    }
  }
  findUserLocation() {
    let cursor = document.querySelector('#content')
    cursor.style.cursor = 'wait'

    var position = {}

    navigator.geolocation.getCurrentPosition((results) => {
      position.lat = results.coords.latitude
      position.long = results.coords.longitude

      cursor.style.cursor = 'default'

      this.getWeather(position)
    }, () => {
      cursor.style.cursor = 'default'
      this.errorHandler('Unable to locate your position')
    })
  }
  getWeather(loc) {
    const url = `https://api.apixu.com/v1/current.json?key=0b4ccd28cf7f4c7689d155555173101&q=${loc.lat},${loc.long}`

    var weatherObj

    fetch(url).then(response => {
      return response.text()
    }).then(text => {
      weatherObj = JSON.parse(text)
      this.setState({
        weatherContent: true,
        location: weatherObj.location.region,
        condition: weatherObj.current.condition.text,
        icon: weatherObj.current.condition.icon,
        temp: weatherObj.current.temp_c
      })
    }).catch(() => {
      this.errorHandler('Unable to connect to network')
    })
  }
  render() {
    const form =
    <div id='weather-form-container'>
      <form onSubmit={this.getLatLong} id='port-form'>
        Search for a location:
        <div id='location-search-field'>
          <input value={this.state.address} onChange={this.handleChange}/>
          <div title='Use My Location' id='find-me-image'>
            <MyLoc onClick={this.findUserLocation} />
          </div>
        </div>
        <span id='weather-error'></span>
        <div className='submitBtn'>
          <button className='button' type='submit'>Search</button>
        </div>
      </form>
    </div>

    const results =
      <div>
        <div id='weather-results'>
          <p><b>Location:</b><br/><br/>{this.state.location}</p>
          <p><b>Description:</b><br/><br/>{this.state.condition}</p>
          <p><b>Temp:</b><br/><br/>{this.state.temp}°c</p>
        </div>
        <div id='weather-icon-container'>
          <img id='weather-icon' src={`https:${this.state.icon}`} />
        </div>
        <div id='search-again-btn'>
          <button className='button' onClick={() => this.setState({weatherContent: false})}>Search Again</button>
        </div>
      </div>

    var display

    (!this.state.weatherContent) ? display = form : display = results

    return (
      <div id='weather'>
        {display}
      </div>
    )
  }
}

export default Weather
