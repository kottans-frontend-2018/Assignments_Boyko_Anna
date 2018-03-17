import { Component } from '../Weather-App';

class RecentCities extends Component{
	constructor(props) {
		super(props);
		this.state = { recents: JSON.parse(localStorage.getItem('recents')) || []};

		this.handleClick = this.handleClick.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('recentCities');
		this.host.addEventListener('click', this.handleClick);
	}

	handleClick(e) {
		e.preventDefault();
		const city = e.target.text;
		this.props.onClick(city);
	}

	updateRecents(city) {
		const { recents } = this.state;

		if(city === '') return;
		if (!recents.includes(city)) {
			recents.unshift(city);
			if (recents.length > 5) {
				recents.pop();
			}
		} else {
			let index = recents.indexOf(city);
			recents.splice(index, 1);
			recents.unshift(city);
		}
		this.updateState({recents: recents});

		let storageString = JSON.stringify(recents);
		localStorage.setItem('recents', storageString);
	}

	render() {
		const { recents } = this.state;
		let recentsString = '';

		this.host.innerHTML = '';
		recents.forEach((city) => { recentsString += `<a href='' name='city' class='recentItem'>${city}</a>`});

		return recentsString;
	}
}

export default RecentCities;
