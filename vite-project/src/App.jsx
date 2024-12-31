import React from 'react';
import NavBar from './Components/FunctionalComponent/Home';
import About from './Components/FunctionalComponent/About';
import Contact from './Components/FunctionalComponent/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <About/>
      <Contact/>
      <h1>Welcome to the App</h1>
    </div>
  );
}

export default App;
