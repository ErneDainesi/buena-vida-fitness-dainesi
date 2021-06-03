import './sass/main.scss';
import {DesktopNavbar} from './components/navbar/navbar';
import {ItemListContainer} from './components/container/ItemListContainer';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<DesktopNavbar />
				<ItemListContainer />
			</header>
		</div>
	);
}

export default App;
