import React, { useState, useEffect} from "react";
import "./App.css";
import {API_KEY, BASE_URL} from './components/Constants.js'
import axios from 'axios'
import Body from '.components/Body.js'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
      // useState(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])

  return (
    <div className="App">
      {data.map(p => {
        <Body key={p.id} propsPassedFromParent = {p}/>
      })}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
