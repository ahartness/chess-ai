import React from 'react';
import './App.css';
import { Board } from './components/board';

export const App: React.FC = () => {
  
  return (
      <div className='container'>
        <Board />
      </div>
  );
}

export default App;
