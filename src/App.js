import './sass/main.scss';
import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import {Router} from './router/components/Router';
import {CartProvider} from './contexts/CartContext/CartContext';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<CartProvider>
					<BrowserRouter>
						<NavBar />
						<Router />
						<Footer />
					</BrowserRouter>
				</CartProvider>
			</header>
		</div>
	);
}

export default App;
