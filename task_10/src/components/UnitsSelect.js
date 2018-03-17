import { Component } from '../Weather-App';

class UnitsSelect extends Component {
	constructor (props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.host = document.createElement('div');
		this.host.classList.add('search-units-container');
		
		this.host.addEventListener('change', this.handleChange);
	}

	handleChange(e) {
		const unit = e.target.value;
		this.updateState({ units: unit });
		this.props.onChange(unit);
	}

	render() {
		const { units } = this.props;

		return `
			<label>
				<input type="radio" name="tempUnits" id="C" value="M" class="visually-hidden" ${(units == 'M') ? 'checked' : ''}></input>
				<span class='unit-select-button'>°C</span>
			</label> 
			<label>
				<input type="radio" name="tempUnits" id="F" value="I" class="visually-hidden" ${(units == 'I') ? 'checked' : ''}></input>            
				<span class='unit-select-button'>°F</span>
			</label>
		`;
	}
}

export default UnitsSelect;
