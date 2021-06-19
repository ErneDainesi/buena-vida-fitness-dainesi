import './sass/main.scss';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter} from 'react-router-dom'
import {Router} from './router/components/Router';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<NavBar />
					<Router />
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
