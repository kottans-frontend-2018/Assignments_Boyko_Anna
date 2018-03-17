import { Component } from '../Weather-App';
import star from '../assets/icons/star.png';
import unstar from '../assets/icons/unstar.png';

class Star extends Component{
	constructor(props) {
		super(props);
		this.state = { isFavourite: false };

		this.handleClick = this.handleClick.bind(this);

		this.host = document.createElement('div');
		this.host.classList.add('star');
		this.host.addEventListener('click', this.handleClick);
	}

	handleClick(e) {
		e.preventDefault();

		this.props.onClick();
	}

	updateStar(city){
		if (this.isInFavourites(city)) 
			this.updateState({isFavourite: true});
		else 
			this.updateState({isFavourite: false});
	}

	isInFavourites(city) {
		const storageData = localStorage.getItem('favourites');
		if (!storageData)
			return false;
		else {
			const favouritesArray = JSON.parse(storageData);
			if (favouritesArray.includes(city))
				return true;
			else 
				return false;
		}
	}

	render() {
		const { isFavourite } = this.state;

		return `<button><img src=${(isFavourite) ? unstar : star}></button>`;
	}
}

export default Star;
