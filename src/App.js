import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login.js'
import Explore from './explore.js'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Card1 from './Icons/Card1.svg'
import Card2 from './Icons/Card2.svg'
import moreInfo from './Icons/moreInfo.svg'
import Line from './Icons/Line.svg'

const App = () => {
  if(window.location.pathname !== "/explore")
  {
    document.getElementById('mapid').style.display = "none";
  }
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </Router> 
  );
}

const Home = () => {
  const data = [
    {
      id : 1,
      pic : Card1,
      location: "London: The heritage of England",
      description: "Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain. The city is a confluence of the old and the new and is one of the most important tourist destinations in the entire world. It is a city with numerous attractions of all sorts including great architecture and heritage."
    },
    {
      id : 2,
      pic: Card2,
      location: "Bora Bora Tourism",
      description: "A part of French Polynesia, this magical island has some of the most beautiful sights to behold"
    },
    {
      id: 3,
      pic : Card1,
      location: "London: The heritage of England",
      description: "Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain. The city is a confluence of the old and the new and is one of the most important tourist destinations in the entire world. It is a city with numerous attractions of all sorts including great architecture and heritage."
    },
    {
      id : 4,
      pic: Card2,
      location: "Bora Bora Tourism",
      description: "A part of French Polynesia, this magical island has some of the most beautiful sights to behold"
    },
    {
      id : 5,
      pic : Card1,
      location: "London: The heritage of England",
      description: "Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain. The city is a confluence of the old and the new and is one of the most important tourist destinations in the entire world. It is a city with numerous attractions of all sorts including great architecture and heritage."
    },
    {
      id : 6,
      pic: Card2,
      location: "Bora Bora Tourism",
      description: "A part of French Polynesia, this magical island has some of the most beautiful sights to behold"
    },
    {
      id : 7,
      pic : Card1,
      location: "London: The heritage of England",
      description: "Standing on the Thames River, London is the capital of England as well as the most populous city in Great Britain. The city is a confluence of the old and the new and is one of the most important tourist destinations in the entire world. It is a city with numerous attractions of all sorts including great architecture and heritage."
    },
  ]
  var flag;

const imageClick = (e) => {
  const blur = document.getElementById(`image${e}`)
  const location = document.getElementById(`location${e}`)
  const description = document.getElementById(`description${e}`)
  const btn = document.getElementById(`img-btn${e}`)

  if(flag === 1){
    blur.style.filter = "blur(0) brightness(100%)"
    location.style.opacity = 0
    description.style.opacity = 0
    btn.style.opacity = 0
    flag=0
    console.log(flag)
  }
  else{
    blur.style.filter = "blur(2px) brightness(40%)"
    location.style.opacity = 1
    description.style.opacity = 1
    btn.style.opacity = 1
    flag=1
    console.log(flag)
  }
}

  return(
    <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
      <div className="App">
        <div className="header">
          <img id="" src={HomeIcon} alt="" />
          <img id="" src={Line} alt=""/>
          <img id="" src={AddIcon} alt="" onClick={()=> { window.location.href = "/upload" }} />
          <img id="" src={ExploreIcon} alt="" onClick={()=> { window.location.href = "/explore" }} />
          <img id="" src={UserIcon} alt="" />
        </div>
        <p>Hiii, <br /> Internathon</p>
        <article>Top Picks</article>

        <div style={{display:"flex", flexWrap:"wrap"}}>
          {data.map(e => (
            <div className="cards" key={e.id} onClick={()=>{imageClick(e.id) } } >
              <img id={"image"+e.id} src={e.pic} alt=""/>
              <p id={"location"+e.id} >{e.location}</p>
              <article id={"description"+e.id}>{e.description}</article>
              <button id={"img-btn"+e.id}><img src={moreInfo} alt="" /></button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default App;
