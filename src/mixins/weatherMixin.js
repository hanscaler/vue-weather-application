import axios from 'axios';

const weatherMixin = {
    data() {
        return {};
    },
    methods: {
        async getWeatherInfo(city) {
            const API_KEY = process.env.VUE_APP_API_KEY;
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
            const res = await axios.get(url); //eslint-disable-line no-unused-vars
            const {main, wind, weather} = res.data;
            const weatherResult = {
                label: city.label,
                code: city.code,
                temperature: main.temp,
                humidity: main.humidity,
                wind: wind.speed,
                icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
            }
            return weatherResult;
        },
    },
}

export default weatherMixin