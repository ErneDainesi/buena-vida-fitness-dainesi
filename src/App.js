import './sass/main.scss';
import {NavBar} from './components/NavBar/NavBar';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
				<ItemDetailContainer />
			</header>
		</div>
	);
}

export default App;
