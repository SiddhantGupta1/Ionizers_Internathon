import React,{useState} from 'react'
import './UploadDetails.css'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Line from './Icons/Line.svg'
import postIcon from './Icons/postIcon.svg'

const UploadDetails = () => {

    const [location, setLocation] = useState({
        place: "",
        country : "",
        state: "",
        city: "",
        description: ""
    })
    
    const handleInput = (e) => {
        let data = { ...location}
        data[e.target.name] = e.target.value
        setLocation(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(location)
    }

    return (
        <div style={{display:"flex", justifyContent:"center", backgroundColor:"coral"}}>
            <div className="UploadDetails">
                <section>
                    <img id="" src={HomeIcon} alt="" onClick={()=> { window.location.href = "/home" }} />
                    <img id="" src={AddIcon} alt="" />
                    <img id="" src={Line} alt=""/>
                    <img id="" src={ExploreIcon} alt="" onClick={()=> { window.location.href = "/explore" }} />
                    <img id="" src={UserIcon} alt="" onClick={()=> { window.location.href = "/user" }} />
                </section>
                
                <form className="post-form" onChange={handleInput} onSubmit={handleSubmit}>

                    <div>
                        <p>Add Place</p>
                        <input type="text" placeholder="Add Place" id="place" name="place" />
                    </div>
                    <section>
                        <p>Add Country</p>
                        <input type="text" placeholder="Add Country" id="country" name="country" />
                    </section>
                    <article>
                        <p>Add State</p>
                        <input type="text" placeholder="Add State" id="state" name="state" />
                    </article>
                    <div>
                        <p>Add City</p>
                        <input type="text" placeholder="Add City" id="city" name="city" />
                    </div>
                    <blockquote>
                        <p>Description</p>
                        <textarea type="text" id="description" name="description" placeholder="Describe why u like this place in Min 20 Words." />
                    </blockquote>
                    <button>Post &nbsp;<img src={postIcon} alt="" /></button>

                </form>
            </div>
        </div>
    )
}

export default UploadDetails
