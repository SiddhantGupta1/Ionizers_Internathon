import React from 'react'
import './Upload.css'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Line from './Icons/Line.svg'
import uploadIcon from './Icons/uploadIcon.svg'
import greaterThanwhite from './Icons/greaterThanwhite.svg'

const Upload = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
            <div className="Upload">
                <section>
                    <img id="" src={HomeIcon} alt="" onClick={()=> { window.location.href = "/home" }} />
                    <img id="" src={AddIcon} alt="" />
                    <img id="" src={Line} alt=""/>
                    <img id="" src={ExploreIcon} alt="" onClick={()=> { window.location.href = "/explore" }} />
                    <img id="" src={UserIcon} alt="" onClick={()=> { window.location.href = "/user" }} />
                </section>

                <label for="file-upload" className="file-upload">
                    <img src={uploadIcon} alt="Upload Icon" />
                    <article>Upload Image</article>
                    <p> Supported Format : .jpg, .png.<br />
                        File Size must not exceed 20 mb.
                    </p>
                </label>
                <input id="file-upload" type="file" accept=".jpg, .png" />

                <a id="upload-page-btn" href="/upload details" >Next&nbsp; <img src={greaterThanwhite} alt="" /></a>

            </div>
        </div>
    )
}

export default Upload
