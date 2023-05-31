import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { MovesButton } from './components/MovesButton/MovesButton';
import MovableBlock  from './components/MovableBlock/MovableBlock';

const App: React.FC = () => {
  const [ scale, setScale ] = useState<number>(100);

  const positions = ['top', 'right', 'bottom', 'left'];

  return (
    <div className="app">
      <Header scale={scale} setScale={setScale} />
      <main className="main">
        <MovableBlock />
        {positions.map((position: string) => 
            <MovesButton position={position} key={position} />
          )
        }
      </main>
    </div>
  );
}

export default App;
