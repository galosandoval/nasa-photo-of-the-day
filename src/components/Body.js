import React, { useState, useEffect} from 'react'
import Header from './components/Header.js'
import {API_KEY, BASE_URL} from './components/Constants.js'
import axios from 'axios'

const Body = (props) => {
  const [data, setData] = useState([])
  const nasaData = () => {
    setData(data.map(nasaData => {
    return nasaData
  }))
}

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
    <div className="title">
      <Header key={nasaData.title} />
      
    </div>
  )

}

export default Body;