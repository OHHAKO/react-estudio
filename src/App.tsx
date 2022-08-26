import React from 'react';
import './App.css';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <header className="App-header">React Estudio by hako</header>
      <div className="body">
        test sample
        <Article />
      </div>
    </div>
  );
}

export default App;
