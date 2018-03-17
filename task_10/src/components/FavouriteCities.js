import { Component } from '../Weather-App';

class FovouriteCities extends Component{
	constructor(props) {
		super(props);
		this.state = { favourites: JSON.parse(localStorage.getItem('favourites')) || []};

		this.handleClick = this.handleClick.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('favouriteCities');
		this.host.addEventListener('click', this.handleClick);
	}

	handleClick(e) {
		e.preventDefault();
		const city = e.target.text;
		this.props.onClick(city);
	}

	updateFavourites(city) {
		const { favourites } = this.state;

		if(city === '') return;
		if (!favourites.includes(city)) {
			favourites.unshift(city);
			if (favourites.length > 5) {
				favourites.pop();
			}
		} else {
			let index = favourites.indexOf(city);
			favourites.splice(index, 1);
		}
		this.updateState({favourites: favourites});

		let storageString = JSON.stringify(favourites);
		localStorage.setItem('favourites', storageString);
	}

	render() {
		const { favourites } = this.state;
		let favouritesString = '';

		favourites.forEach((city) => { favouritesString += `<a href='' name='city' class='favouriteItem'>${city}</a>`});

		return favouritesString;
	}
}

export default FovouriteCities;
