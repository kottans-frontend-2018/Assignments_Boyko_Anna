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

const host = document.getElementById('weekForecast');

const render = (fetchedData) => {
	host.innerHTML = '';
	fetchedData.data.forEach((day) => {
		host.innerHTML += `
			<div class="weekForecastDay">
				<div class="date-details-container">
					<div class="weekDay">${getWeekDay(day.datetime)}</div>
					<div class="forecastDate">${day.datetime}</div>
				</div>
				<div class='main-info-container'>
					<div class='weather-icon'>
						<img src="${getIcon(day.weather.icon)}">
					</div>
					<div class='temperature-container'>
						<div class="avrTemperature">${Math.round(day.temp)}°</div>
						<div class="temperature">
							<div><span>min: </span><span>${Math.round(day.min_temp)}°</span></div>
							<div><span>max: </span><span>${Math.round(day.max_temp)}°</span></div>
						</div>
					</div>
				</div>
				<div class='description-container'>
					<h4 class="description">${day.weather.description}</h4>
				</div>	
				<div class="details-container">
					<div class="pressure">Pressure: ${day.pres} Pa</div>
					<div class="humidity">Humidity: ${day.pop} %</div>
					<div class="windSpeed">Wind speed: ${day.wind_spd} m/s</div>
				</div>
			</div>
		`;
	});
	
	return fetchedData;
};

const getWeekDay = (dateTime) => {
	const date = new Date(dateTime);
	const weekDayIndex = date.getDay();
	let weekDay = '';
	switch (weekDayIndex) {
	case 0: weekDay = 'Sunday'; break;
	case 1: weekDay = 'Monday'; break;
	case 2: weekDay = 'Tuesday'; break;
	case 3: weekDay = 'Wednesday'; break;
	case 4: weekDay = 'Thursday'; break;
	case 5: weekDay = 'Friday'; break;
	case 6: weekDay = 'Saturday'; break;
	}
	return weekDay;
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
