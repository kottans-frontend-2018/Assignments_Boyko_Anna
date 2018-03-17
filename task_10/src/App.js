import { Component } from './Weather-App';
import LocationSearch from "./components/LocationSearch";
import UnitsSelect from "./components/UnitsSelect";
import PeriodSelect from "./components/PeriodSelect";
import RecentCities from "./components/RecentCities";
import FavouriteCities from "./components/FavouriteCities";
import Star from './components/Star';
import WeatherApi from "./utils/api";
import { default as renderWeekForecast } from "./components/WeekForecast";
import { default as renderCurrentWeather } from "./components/CurrentWeather";

class App extends Component {
constructor() {
	super();

	this.state = {
	city: new URLSearchParams(window.location.search).get('city') || 
	localStorage.getItem('recents') ? JSON.parse(localStorage.getItem('recents'))[0] : 'Kiev',
		units: 'M',
		period: '3',
		today: null,
		week: null
	}

	this.host = document.getElementById('mainSearch');
	this.onStarClick = this.onStarClick.bind(this);
	this.onSearchSubmit = this.onSearchSubmit.bind(this);
	this.onUnitsChange = this.onUnitsChange.bind(this);
	this.onPeriodChange = this.onPeriodChange.bind(this);
	this.onRecentCityClick = this.onRecentCityClick.bind(this);
	this.onFavouriteCityClick = this.onFavouriteCityClick.bind(this);

	this.locationSearch = new LocationSearch(
		{
			city: this.state.city,
			onSubmit: this.onSearchSubmit
		}
	);

	this.star = new Star({onClick: this.onStarClick});

	this.unitsSelect = new UnitsSelect( 
		{
			units: this.state.units,
			onChange: this.onUnitsChange
		}
	);

	this.periodSelect = new PeriodSelect( 
		{
			period: this.state.period,
			onChange: this.onPeriodChange
		}
	);

	this.recentCities = new RecentCities({onClick: this.onRecentCityClick});

	this.favouriteCities = new FavouriteCities({onClick: this.onFavouriteCityClick});
}

	onSearchSubmit(city) {
		this.updateState({city});
		history.pushState(this.state, 'city', '?' + `city=${city}`);
	}

	onUnitsChange(units) {
		this.updateState({units});
	}

	onPeriodChange(period) {
		this.updateState({period});
	}

	onRecentCityClick(city){
		this.updateState({city});
		history.pushState(this.state, 'city', '?' + `city=${city}`);
	}

	onFavouriteCityClick(city){
		this.updateState({city});
		history.pushState(this.state, 'city', '?' + `city=${city}`);
	}

	onStarClick(city) {
		this.favouriteCities.updateFavourites(this.state.city);
		this.star.updateStar(this.state.city);
	}

	handleSearch() {
		const data = new WeatherApi();

		data.getCurrentWeather({city: this.state.city, units: this.state.units})
		.then(today => renderCurrentWeather(today));

		data.getDailyForecast({city: this.state.city, units: this.state.units, days: this.state.period})
		.then(week => renderWeekForecast(week));
	}

	render() {
		this.handleSearch();

		const { city } = this.state;
		const { units } = this.state;
		const { period } = this.state;

		this.recentCities.updateRecents(city);
		this.star.updateStar(city);

		this.host.appendChild(this.recentCities.update({onClick: this.onRecentCityClick}));
		this.host.appendChild(this.star.update({onClick: this.onStarClick}));
		this.host.appendChild(this.locationSearch.update({city, onSubmit: this.onSearchSubmit}));
		this.host.appendChild(this.favouriteCities.update({onClick: this.onFavouriteCityClick}));
		this.host.appendChild(this.unitsSelect.update({units, onChange: this.onUnitsChange}));
		this.host.appendChild(this.periodSelect.update({period, onChange: this.onPeriodChange}));	
	
		return this.host;
	}
}

export default App;
