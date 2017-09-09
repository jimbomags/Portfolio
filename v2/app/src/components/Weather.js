import React, { Component } from 'react'
import MyLoc from 'react-icons/lib/md/my-location'

class Weather extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div>
        <form>
          <input type='search'/>
          <input type='submit'/>
          <MyLoc /> 
        </form>
      </div>
    )
  }
}

export default Weather

// search a location
// use your location

//return weather, temp (c & f), weather icon
