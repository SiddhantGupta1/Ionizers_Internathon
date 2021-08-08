import React from 'react'
import './Explore.css'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Line from './Icons/Line.svg'
import searchIcon from './Icons/searchIcon.svg'

const Explore = () => {
    if(window.location.pathname === '/explore')
    {
        document.getElementById('root').style.float = "left";
    }

    return (
        <div className="Explore">
            <div className="explore-header">
                <header>
                    <img id="" src={HomeIcon} alt="" onClick={()=> { window.location.href = "/home" }} />
                    <img id="" src={AddIcon} alt="" onClick={()=> { window.location.href = "/upload" }} />
                    <img id="" src={ExploreIcon} alt="" />
                    <img id="" src={Line} alt=""/>
                    <img id="" src={UserIcon} alt="" onClick={()=> { window.location.href = "/user" }} />
                </header>
                <p>Explore</p>
                <section>
                    <img src={searchIcon} alt="" />
                    <input placeholder="Search Places" type="text" />
                </section>
            </div>
        </div>
    )
}

export default Explore
