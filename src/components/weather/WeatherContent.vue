<template>
    <div class="weather-wrapper">
        <ContentHeader />
        <CitySelector @selectCity="selectCity"/>
        <WeatherList :weatherList="WeatherList"/> 
    </div>
</template>

<script>
import weatherMixin from '@/mixins/weatherMixin'
import ContentHeader from './ContentHeader.vue';
import CitySelector from './CitySelector.vue';
import WeatherList from './WeatherList.vue';

export default {
    name: "weatherContent",
    components: { ContentHeader, CitySelector, WeatherList },
    mixins: [weatherMixin],
    data() {
        return {
            WeatherList: []
        }
    },
    methods: {
        async selectCity(city) {
            if (city.selected) {
                const weather = await this.getWeatherInfo(city);
                console.log(weather, "weather");
                this.WeatherList.push(weather);
            } else {
                const index = this.WeatherList.findIndex(
                    (weather) => weather.code === city.code
                );
                this.WeatherList.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
    
</style>