import React, { useEffect, useState } from "react"; 
import ReactDOM, { findDOMNode } from 'react-dom';
import axios from 'axios'


function App() {

  const [posts, setPosts] = useState([])  
  const [zipCode, setZipCode] = useState(); 
  const [state, setState] = useState(); 
  const [location, setLocation] = useState();
  const [population, setPopulation] = useState();  
  const [wages, setWages] = useState(); 
  let url = "http://ctp-zip-api.herokuapp.com/zip/"; 
  
  function handleChange (event)  { 
    setZipCode(event.target.value); //set zipcode in realtime
  }

  // call API
  const fetchPost = async () => {
    url+= zipCode; //url addss zipcode at the end fo it 
    console.log(url); 

    const response = await axios(url) //response equals fetching url

    console.log(response.data) //console.log response data
    setPosts(response.data) //set posts to the data




    
    let cityRender = <li>City: {posts[0].City}</li>;
    ReactDOM.render(cityRender, document.getElementById("city"))

    let stateRender = <li>State: {posts[0].State}</li>;
    ReactDOM.render(stateRender, document.getElementById("state"))

    let populationRender = <li>Population: {posts[0].EstimatedPopulation}</li>;
    ReactDOM.render(populationRender, document.getElementById("population"))

    let YlocationRender = <li>Y-axis: {posts[0].Yaxis}</li>;
    ReactDOM.render(YlocationRender, document.getElementById("y-axis"))

    let XlocationRender = <li>X-axis: {posts[0].Xaxis}</li>;
    ReactDOM.render(XlocationRender, document.getElementById("x-axis"))

    let wagesRender = <li>Wages: {posts[0].TotalWages}</li>;
    ReactDOM.render(wagesRender, document.getElementById("wages"))
  }
  



  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="App">
      <h1>The Zip and City search API</h1>
      <p>Please enter a zip code:</p> 
      <input className="zipCodeEntry" onChange={handleChange}></input> 
      <button onClick={fetchPost} style={{margin: "0px 10px"}}>enter</button>

      <ul>
      <li id="city"></li>
      <li id="state"></li>
      <li id="population"></li>
      <li id="x-axis"></li>
      <li id="y-axis"></li>
      <li id="wages"></li>
      </ul>
    </div>
  );
}

export default App;

