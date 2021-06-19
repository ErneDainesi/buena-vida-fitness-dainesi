import './sass/main.scss';
import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import {Router} from './router/components/Router';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<NavBar />
					<Router />
					<Footer />
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
