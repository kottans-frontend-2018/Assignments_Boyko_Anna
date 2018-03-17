import { Component } from '../Weather-App';

class PeriodSelect extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		
		this.host = document.createElement('div');
		this.host.classList.add('search-period-container');
		this.host.addEventListener('change', this.handleChange);
	}

	handleChange(e) {
		const changedPeriod = e.target.value;

		this.updateState( {period: changedPeriod} );
		this.props.onChange(changedPeriod);
	}

	render() {
		const { period } = this.props;

		return `
			<select name="forecastPeriod" class="forecastPeriod">
                <option value="3" ${(period == '3') ? 'selected' : ''}>3 days</option>
                <option value="7" ${(period == '7') ? 'selected' : ''}>7 days</option>
                <option value="14" ${(period == '14') ? 'selected' : ''}>14 days</option>
            </select>
		`;
	}
}

export default PeriodSelect;