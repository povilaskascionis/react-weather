import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const id = cityData.city.id;
    const { lon, lat } = cityData.city.coord;
    const chartOptions = {
      pointHitDetectionRadius: 3,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      defaultFontSize: 10
    };

    const generateData = measure => {
      let measuredData = cityData.list
        .map(weather => weather.main[measure])
        .slice(0, 16);
      let timeStamps = cityData.list
        .map(time => time.dt_txt.slice(11, 16))
        .slice(0, 16);
      return {
        labels: timeStamps,
        datasets: [
          {
            data: measuredData,
            borderColor: 'orange',
            borderWidth: 2,
            pointHitRadius: 13,
            pointBackgroundColor: 'white'
          }
        ]
      };
    };

    return (
      <tr key={id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={generateData('temp')} options={chartOptions} />
        </td>
        <td>
          <Chart data={generateData('pressure')} options={chartOptions} />
        </td>
        <td>
          <Chart data={generateData('humidity')} options={chartOptions} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature, C</th>
            <th>Pressure, hPa</th>
            <th>Humidity, %</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
