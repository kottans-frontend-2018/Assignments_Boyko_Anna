import { Component } from '../Weather-App';

class LocationSearch extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isValid: true
		};

		this.handleSubmit = this.handleSubmit.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('location-search-container');
		this.host.addEventListener('submit', this.handleSubmit);
	}

	handleSubmit(e) {
		e.preventDefault();

		const city = this.capitalize(e.target.elements.search.value.trim());

		if(!city.length) {
			this.updateState({ isValid: false});
		} else {
			this.props.onSubmit(city);
		}
	}

	capitalize(city) {
		return city.charAt(0).toUpperCase() + city.slice(1);
	}

	render() {
		const { city } = this.props;

		return `
			<form>
				<input name='search' required class='search-weather' autofocus autocapitalize='on' placeholder="City" value="${city}">
				<button class='weather-search-submit'>Go!</button>
			</form>
		`;
	}
}

export default LocationSearch;
