import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header'
import ExplorerMenu from '../../components/ExplorerMenu'
import FoodDisplay from '../../components/FoodDisplay'
import AppDownload from '../../components/AppDownload'
const Home = () => {
    const [category,setCategory]=useState("All");


  return (
    <div>
        <Header/>
        <ExplorerMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home
