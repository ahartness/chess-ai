import React from 'react';
import Chess from 'react-chess';
import './App.css';

export const App: React.FC = () => {

  const lineup = ['R@h1', 'P@f2', 'q@d8', 'R@a1', 'P@a2', 'P@c2', 'b@c8', 'p@d7', 'Q@d1', 'n@g8']
  
  return (
    <div className="App">
      <Chess 
        pieces={lineup}
      />
    </div>
  );
}

export default App;
