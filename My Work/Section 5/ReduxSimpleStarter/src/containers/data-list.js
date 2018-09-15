import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMaps from '../containers/google-maps';
import SparkLineRender from '../components/Sparkline';
class WatherList extends Component{




    renderWeather(CityData)
    {
        const CityName = CityData.city.name;
        const Temps = CityData.list.map(Weather=>Weather.main.temp);
        const Humidity = CityData.list.map(Weather=>Weather.main.humidity);
        const Pressure = CityData.list.map(Weather=>Weather.main.pressure);
        const {lat, lon} = CityData.city.coord;
        return (

            <tr key={CityName}>
                <td>    <GoogleMaps lon={lon} lat={lat} />   </td>
                <td> <SparkLineRender DataArray={Temps} color="yellow" Unit='K'/></td>
                <td> <SparkLineRender DataArray={Humidity} color="red" Unit='hPa'/></td>
                <td> <SparkLineRender DataArray={Pressure} color="orange" Unit='%'/></td>
                
            </tr>

        );
    }

    render(){

        return (

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>

        );

    }

}

function mapStateToProps({weather})
{
  return {weather};
}


export default connect (mapStateToProps)(WatherList);

