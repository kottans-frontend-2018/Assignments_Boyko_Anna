import fog from '../assets/icons/a01d.png';
import clearSkyDay from '../assets/icons/c01d.png';
import clearSkyNight from '../assets/icons/c01n.png';
import fewCloudsDay from '../assets/icons/c02d.png';
import fewCloudsNight from '../assets/icons/c02n.png';
import overcastClouds from '../assets/icons/c04d.png';
import drizzle from '../assets/icons/d01d.png';
import rain from '../assets/icons/r01d.png';
import snow from '../assets/icons/s01d.png';
import thunderstorm from '../assets/icons/t01d.png';
import unknownPrecipitation from '../assets/icons/u00d.png';

const host = document.getElementById('currentWeather');

const render = (fetchedData) => {
	const day = fetchedData.data[0];
	host.innerHTML = '';
	host.innerHTML = `
		<div class="main-weather">
			<div class="weather-description">
				<img src="${getIcon(day.weather.icon)}">
				<h4 class="description">${day.weather.description}</h4>
			</div>
			<div class="avrTemperature">${Math.round(day.temp)}°</div>
		</div>
		<div class="details">
			<div class="pressure">Pressure: ${day.pres} Pa</div>
			<div class="humidity">Humidity: ${day.rh} %</div>
			<div class="windSpeed">Wind speed: ${day.wind_spd} m/s</div>
		</div>
	`;
	
	return fetchedData;
};

const getIcon = (icon) => {
	switch(icon) {
	case 'a01d':
	case 'a01n':
	case 'a02d':
	case 'a02n':
	case 'a03d':
	case 'a03n':
	case 'a04d':
	case 'a04n':
	case 'a05d':
	case 'a05n':
	case 'a06d':
	case 'a06n': return fog;
	case 'c01d': return clearSkyDay;
	case 'c01n': return clearSkyNight;
	case 'c02d':
	case 'c03d': return fewCloudsDay;
	case 'c02n':
	case 'c03n': return fewCloudsNight;
	case 'c04d': 
	case 'c04n': return overcastClouds;
	case 'd01d':
	case 'd01n':
	case 'd02d':
	case 'd02n':
	case 'd03d':
	case 'd03n': return drizzle;
	case 'r01d':
	case 'r01n':
	case 'r02d':
	case 'r02n':
	case 'r03d':
	case 'r03n':
	case 'r04d':
	case 'r04n':
	case 'r05d':
	case 'r05n':
	case 'r06d':
	case 'r06n':
	case 'f01d':
	case 'f01n': return rain;
	case 's01d':
	case 's01n':
	case 's02d':
	case 's02n':
	case 's03d':
	case 's03n':
	case 's04d':
	case 's04n':
	case 's05d':
	case 's05n':
	case 's06d':
	case 's06n': return snow;
	case 't01d':
	case 't01n':
	case 't02d':
	case 't02n':
	case 't03d':
	case 't03n':
	case 't04d':
	case 't04n':
	case 't05d': return thunderstorm;
	case 'u00d':
	case 'u00n': return unknownPrecipitation;
	}
}

export default render;
