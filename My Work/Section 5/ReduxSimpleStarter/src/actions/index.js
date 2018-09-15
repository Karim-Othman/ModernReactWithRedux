import axios from 'axios';

const WeatherApiKey= 'd40502fa0fcc6bc5e5bf626ff973f19b';
export const Fetch_Weather='Fetch_Weather';
    //const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22';
    const Root_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WeatherApiKey}`;

export function FetchWeather (City)
{

    const URL = `${Root_URL}&q=${City},us`;
    const Request = axios.get(URL);

    console.log ('SentRequest',Request);
    return {

            type: Fetch_Weather,
            payload: Request


    };

}