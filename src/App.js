import "./App.css";
import React, { useState, useEffect} from 'react'
import {API_KEY, BASE_URL} from './components/Constants.js'
import axios from 'axios'
// import Headline from './components/Headline.js'
import MainBody from './components/MainBody.js'

function App() {
  const [data, setData] = useState([])
//   const nasaData = () => {
//     setData(data.map(nasaData => {
//     return nasaData
//   }))
// }

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
      {console.log(data)}
        <MainBody data={data} />
        {/* <Headline data={data} /> */}
        
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
