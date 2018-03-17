import './assets/css/normalize.css';
import './assets/css/style.css';
import App from './App';

const app = new App();
app.render();

window.onpopstate = function(event) {
	app.updateState(event.state);
	app.handleSearch();
};
