import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppLogo from './components/AppLogo/AppLogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLogo />
        <div className='title-text square-gradient'>
          Cluster Compute
        </div>
        <a
          className="App-link gradient"
          href="https://k3s.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
         &lt;K3S /&gt;
        </a>
      </header>
    </div>
  );
}

export default App;
