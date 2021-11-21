import React from 'react';
import './App.css';
import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Homepage from './Pages/Homepage';
import Search from './Pages/Search';
import BottomNavbar from './Components/BottomNavbar';
import About from './Pages/About';
import Profile from './Pages/Profile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from './Pages/Detail';

function App() {

  const [data, setdata] = useState()
  const [recomend, setrecomend] = useState()
  const [params, setparams] = useState("apple")
  const [detail, setdetail] = useState()
  
  useEffect(() => {
    getdata();
    getrice();
  })
  
  function getvalue(data) {
    setparams(data)
  }

  async function getdata(){
    await axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/parser', 
    {
      headers : {
        'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
        'x-rapidapi-key': 'c7c278ddf6mshd215be77967c61cp1b0306jsndfcd99673f75'
      },
      params : {
        ingr: params
      }
    })
    .then((res) => {
      setdata(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })

  }

  async function getrice(){
    await axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/parser', 
    {
      headers : {
        'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
        'x-rapidapi-key': 'c7c278ddf6mshd215be77967c61cp1b0306jsndfcd99673f75'
      },
      params : {
        ingr: "rice"
      }
    })
    .then((res) => {
      setrecomend(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })

  }

  function getdetail(data){
    setdetail(data)
  }


  return (
    <div className="App bg-green-200 h-full">
      <div className="max-w-md h-full screen mx-auto relative">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Homepage dataApi={recomend} todetail={getdetail}/>}></Route>
            <Route path="/search" exact element={<Search sendsearch={getvalue} dataApi={data} todetail={getdetail}/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail" element={<Detail dataApi={detail}/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
          <BottomNavbar/>
        </BrowserRouter> 
      </div>
    </div>
  );
}

export default App;
