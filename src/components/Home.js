import React, { useState } from 'react';
import './Home.css'

function Home() {
  const [lights, setLight] = useState('on');

  const [temperature, setTemperature] = useState(69);

  const lightColor = {
    backgroundColor: lights === 'on' ? 'yellow' : 'grey'
  }


  return (
    <div className="home" style={lightColor}>
      <h1>Hello World</h1>
      <h3>Lights: {lights}</h3>
      <button onClick={() => setLight(lights === 'on' ? 'off' : 'on')}>Lights</button>
      <h2>Current Temp: {temperature}</h2>
      <button onClick={() => setTemperature(temperature + 1)}>Temp UP</button>
      <button onClick={() => setTemperature(temperature - 1)}>Temp DOWN</button>
    </div>
  )
}

export default Home;