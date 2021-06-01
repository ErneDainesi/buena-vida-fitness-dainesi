import './sass/main.scss';
import {DesktopNavbar, MobileNavbar} from './components/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DesktopNavbar />
        <MobileNavbar />
      </header>
    </div>
  );
}

export default App;
