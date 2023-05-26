import './App.scss';
import MovableBlock from './components/MovableBlock/MovableBlock';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <h2 className="brand__name">Services</h2>
          <div className="brand__logo"></div>
        </div>

        <div className="nav">
          <div className="nav__itemlist">
            List view
          </div>

          <div className="nav__switcher">
            <button>
              <img src="" alt="" />
            </button>
          </div>

          <div className="nav__scale-bar">
            <button className="scale-button">+</button>
            <div className="scale-data"></div>
            <button className="scale-button">-</button>
          </div>
        </div>
      </header>
      <main className="main">
        <MovableBlock />
      </main>
    </div>
  );
}

export default App;
