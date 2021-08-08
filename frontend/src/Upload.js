import React,{useState} from 'react'
import './Upload.css'
import HomeIcon from './Icons/HomeIcon.svg'
import AddIcon from './Icons/AddIcon.svg'
import ExploreIcon from './Icons/ExploreIcon.svg'
import UserIcon from './Icons/UserIcon.svg'
import Line from './Icons/Line.svg'
import uploadIcon from './Icons/uploadIcon.svg'
import greaterThanwhite from './Icons/greaterThanwhite.svg'
import axios from 'axios'

const Upload = ({ setFilename, filename}) => {

    const [file, setFile] = useState('')

    const handleInput = (e) => {
        setFile(e.target.files)
        setFilename(e.target.files[0].name)
        console.log(file[0])
        console.log(filename)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        

        var data = new FormData();
        data.append('file', file[0]);
        data.append('file_name', filename);

        axios({
            url: `https://api.chetanpareek.tech/api/file_upload`,
            method: "post",
            data: data,

        }).then((result) => {
            console.log(result)
          }).catch((error)=>{
              console.log(error)
          });
    }

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

                <form onSubmit={handleSubmit} onChange={handleInput} >
                    <label htmlFor="file-upload" className="file-upload">
                        <img src={uploadIcon} alt="Upload Icon" />
                        <article>Upload Image</article>
                        <p> Supported Format : .jpg, .png, .jpeg.<br />
                            File Size must not exceed 20 mb.
                        </p>
                    </label>
                    <input id="file-upload" type="file" accept=".jpg, .png, .jpeg" />
                
                    <a href="/upload details"><button id="upload-page-btn" >Next&nbsp; <img src={greaterThanwhite} alt="" /> </button></a>
                </form>

            </div>
        </div>
    )
}

export default Upload
//

/*

    var data = new FormData();
            data.append('file', file );
            data.append('uploaded_by', 'chetan');
            data.append('location_name', 'sikar');
            data.append('geotags', '25.11212, 45.36664');
            data.append('description', 'nice description');
            data.append('state', 'Rajasthan');
            data.append('city', 'sikar');
            data.append('country', 'india');
            data.append('file_name', 'swarnabha+resume.pdf');

        try{
            const res = await axios.post('/upload', data,{
                headers: {
                    'Content-Type': 'multipart/fprm-data'
                }
            })
            const {filename, filePath } = res.data
            setUploadedFile({filename, filePath})
        } catch(err){
            console.log("error")
        }




 */