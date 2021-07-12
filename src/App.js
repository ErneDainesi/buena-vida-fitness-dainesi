import './sass/main.scss';
import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import {Router} from './router/components/Router';
import {CartProvider} from './contexts/CartContext/CartContext';
import {PurchaseProvider} from './contexts/PurchaseContext/PurchaseContext';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<CartProvider>
					<PurchaseProvider>
						<BrowserRouter>
							<NavBar />
							<Router />
							<Footer />
						</BrowserRouter>
					</PurchaseProvider>
				</CartProvider>
			</header>
		</div>
	);
}

export default App;
