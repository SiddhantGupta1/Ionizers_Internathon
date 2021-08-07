import React from 'react'
import './explore.css'

const explore = () => {
    if(window.location.pathname === '/explore')
    {
        document.getElementById('root').style.float = "left";
    }

    return (
        <div className="Explore">
            <h1>Explore</h1>
        </div>
    )
}

export default explore
