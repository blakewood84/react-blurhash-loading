import { useState } from 'react'
import './App.css';
import { BlurHashLoader } from './components/blurhash/blurhash-loader';


function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        Blur Hash Placeholder with Fade Transition: 
        <br />
        <br />
        <BlurHashLoader
          blurHash="LhIg+c-$acjbBa$yobX84|ESaekB" 
          imageUrl="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fyesofcorsa.com%2Fwp-content%2Fuploads%2F2016%2F03%2F701164_france.jpg"
        />
      </header>
    </div>
  );
}

export default App;
