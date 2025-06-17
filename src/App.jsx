import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Movies from "./components/Movies.jsx"
import WatchList from "./components/WatchList.jsx"
import Banner from './components/Banner.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  let [watchList, setWatchList] = useState([])

  let handleAddToWatchList=(movieObj)=>{
    let newWatchList=[...watchList,movieObj]
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
  }

  let handleRemoveFromWatchList=(movieObj)=>{
    let filterdWatchList = watchList.filter((movie)=>{
      return movie.id !== movieObj.id
    })
    localStorage.setItem('moviesApp', JSON.stringify(filterdWatchList));
    setWatchList(filterdWatchList)
  }

  useEffect(()=>{
  let moviesFromLocalStorage = localStorage.getItem('moviesApp')
  if(!moviesFromLocalStorage)
  {
    return 
  }
  setWatchList(JSON.parse(moviesFromLocalStorage))
},[])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<> <Banner /> <Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} /> </>} />
          <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
