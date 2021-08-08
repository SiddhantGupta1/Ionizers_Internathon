import React from 'react'
import './User.css'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Line from './Icons/Line.svg'

const User = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
            <div className="User">
                <section>
                    <img id="" src={HomeIcon} alt="" onClick={()=> { window.location.href = "/home" }} />
                    <img id="" src={AddIcon} alt="" onClick={()=> { window.location.href = "/upload" }}/>
                    <img id="" src={ExploreIcon} alt="" onClick={()=> { window.location.href = "/explore" }} />
                    <img id="" src={UserIcon} alt="" />
                    <img id="" src={Line} alt=""/>
                </section>


            </div>
        </div>
    )
}

export default User
