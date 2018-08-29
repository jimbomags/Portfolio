import React, { Component } from 'react';
import MyLoc from 'react-icons/lib/md/my-location';
import PropTypes from 'prop-types';

const Input = ({ error, handleChange, address }) => {
  if (error) {
    return (
      <input value={address} onChange={handleChange} className="error-input" />
    );
  }
  return (
    <input value={address} onChange={handleChange} />
  );
};

Input.propTypes = {
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

const ErrorSpan = ({ error, errorMessage }) => {
  if (error) {
    return (
      <span id="weather-error" className="error">{errorMessage}</span>
    );
  }
  return null;
};

ErrorSpan.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const Form = ({
  getLatLong,
  address,
  handleChange,
  findUserLocation,
  error,
  errorMessage,
}) => (
  <div id="weather-form-container">
    <form onSubmit={getLatLong} id="port-form">
      <label>Search for a location:</label>
      <div id="location-search-field">
        <Input value={address} handleChange={handleChange} error={error} />
        <div title="Use My Location" id="find-me-image">
          <MyLoc onClick={findUserLocation} />
        </div>
      </div>
      <ErrorSpan error={error} errorMessage={errorMessage} />
      <div className="submitBtn">
        <button className="button" type="submit">Search</button>
      </div>
    </form>
  </div>
);

Form.propTypes = {
  getLatLong: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  findUserLocation: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const Results = ({
  location,
  condition,
  temp,
  icon,
  searchAgain,
}) => (
  <div>
    <div id="weather-results">
      <p><b>Location:</b><br /><br />{location}</p>
      <p><b>Description:</b><br /><br />{condition}</p>
      <p><b>Temp:</b><br /><br />{temp}°c</p>
    </div>
    <div id="weather-icon-container">
      <img id="weather-icon" src={`https:${icon}`} alt={condition} />
    </div>
    <div id="search-again-btn">
      <button className="button" onClick={searchAgain}>Search Again</button>
    </div>
  </div>
);

Results.propTypes = {
  location: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  searchAgain: PropTypes.func.isRequired,
};

const WeatherPresentationContainer = ({
  weatherContent,
  getLatLong,
  address,
  handleChange,
  findUserLocation,
  location,
  condition,
  temp,
  icon,
  searchAgain,
  error,
  errorMessage,
}) => {
  if (weatherContent) {
    return (
      <div id="weather">
        <Results
          location={location}
          condition={condition}
          temp={temp}
          icon={icon}
          searchAgain={searchAgain}
        />
      </div>);
  }
  return (
    <div id="weather">
      <Form
        getLatLong={getLatLong}
        address={address}
        handleChange={handleChange}
        findUserLocation={findUserLocation}
        error={error}
        errorMessage={errorMessage}
      />
    </div>);
};

WeatherPresentationContainer.propTypes = {
  location: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  searchAgain: PropTypes.func.isRequired,
  weatherContent: PropTypes.bool.isRequired,
  getLatLong: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  findUserLocation: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      weatherContent: false,
      location: '',
      condition: '',
      icon: '',
      temp: '',
      error: false,
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.getLatLong = this.getLatLong.bind(this);
    this.findUserLocation = this.findUserLocation.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.searchAgain = this.searchAgain.bind(this);
  }
  getLatLong(event) {
    event.preventDefault();

    try {
      if (!this.state.address) throw new Error('Please enter a location');
      const encodedAddress = encodeURIComponent(this.state.address);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBrX29SqRNyMJOxkzo64rbBDbpBxZASzks`;

      let resultsObj;
      const location = {};

      if (navigator.onLine) {
        fetch(url).then(response => response.text()).then((text) => {
          resultsObj = JSON.parse(text);
          if (resultsObj.status === 'ZERO_RESULTS') throw new Error('Unable to find that location');
          location.lat = resultsObj.results[0].geometry.location.lat;
          location.long = resultsObj.results[0].geometry.location.lng;
          this.getWeather(location);
        }).catch((err) => {
          this.errorHandler(err);
        });
      } else {
        throw new Error('Please check your connection');
      }
    } catch (err) {
      this.errorHandler(err);
    }
  }
  getWeather(loc) {
    const url = `https://api.apixu.com/v1/current.json?key=0b4ccd28cf7f4c7689d155555173101&q=${loc.lat},${loc.long}`;

    let weatherObj;

    fetch(url).then(response => response.text()).then((text) => {
      weatherObj = JSON.parse(text);
      this.setState({
        weatherContent: true,
        location: weatherObj.location.region,
        condition: weatherObj.current.condition.text,
        icon: weatherObj.current.condition.icon,
        temp: weatherObj.current.temp_c,
      });
    }).catch(() => {
      this.errorHandler(new Error('Unable to connect to network'));
    });
  }
  findUserLocation() {
    const cursor = document.querySelector('#weather');
    cursor.style.cursor = 'wait';

    const position = {};

    navigator.geolocation.getCurrentPosition((results) => {
      position.lat = results.coords.latitude;
      position.long = results.coords.longitude;

      cursor.style.cursor = 'default';

      this.getWeather(position);
    }, () => {
      cursor.style.cursor = 'default';
      this.errorHandler('Unable to locate your position');
    });
  }
  handleChange(event) {
    this.setState({
      address: event.target.value,
    });
  }
  errorHandler(response) {
    this.setState({
      error: true,
      errorMessage: response.message,
    });
  }
  searchAgain() {
    this.setState({
      weatherContent: false,
      address: '',
      error: false,
      errorMessage: '',
    });
  }
  render() {
    return (
      <WeatherPresentationContainer
        weatherContent={this.state.weatherContent}
        getLatLong={this.getLatLong}
        address={this.state.address}
        handleChange={this.handleChange}
        findUserLocation={this.findUserLocation}
        location={this.state.location}
        condition={this.state.condition}
        temp={this.state.temp}
        icon={this.state.icon}
        searchAgain={this.searchAgain}
        error={this.state.error}
        errorMessage={this.state.errorMessage}
      />);
  }
}

export default Weather;
