import axios from 'axios';
import { printError } from './log.service.js'
import { getKeyValue, DATA_DICTIONARY } from './storage.service.js';
import { printWeather } from './log.service.js';

const HOST = 'https://api.openweathermap.org/data/3.0/weather';
const url = new URL(HOST);

const getWeather = async (lat, lon) => {
    const token = await getKeyValue(DATA_DICTIONARY.token);

    if (!token) {
        throw new Error('Token is not set!');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat,
            lon,
            appid: token,
            units: 'metric'
        }
    });
    return data;
};

const getGeocode = async (city) => {
    const token = await getKeyValue(DATA_DICTIONARY.token);

    const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct?', {
        params: {
            q: city,
            appid: token
        }
    });

    return data?.[0];
};

const getForecast = async () => {
    try {
        const city = await getKeyValue(DATA_DICTIONARY.city);
        const { lat, lon } = await getGeocode(city);
        const res = await getWeather(lat, lon);
        printWeather(res);
    } catch (error) {
        printError(error.message);
    }
};

export default getForecast;