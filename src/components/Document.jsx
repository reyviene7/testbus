import React from 'react'
import './Document.css';
import camera from '../assets/camera.png';
import upload from '../assets/upload.png';

function Document (){
  return (
    <div className='Document-header'>
        <div className='listdocument'>
                <h1>Travel Documents</h1>
                <div className='column'>
                    <div className='camera'>
                        <img src={camera} className='camera1' alt=''></img>
                    </div>
                    <div className='upload'><br/><br/>
                        <img src={upload} className='upload1' alt=''></img>
                        <div className='upload-text'>UPLOAD VACCINE PHOTO</div>
                    </div>

                </div>
                
                    <div className='camera-first'>
                        <div className='cameraf'>
                            <img src={camera} className='camera1-first' alt=''></img>
                        </div>
                    </div>
                    <div className='upload'><br/><br/>
                    <div className='backgroundc'>
                        <img src={upload} className='upload1' alt=''></img>
                        <div className='upload-text'>BIRTH CERTIFICATE PHOTO</div>
                        <br/><br/><br/><br/><br/><br/>
                    </div>
                    

                    </div>
                    <br/><br/>

                    <br/><br/>

                <div className='nextpointd'><a href='/manage'>
                <input type='submit' value="Done" className='nextd'/>  </a>      
                </div>
        </div>
    </div>
  )
}

export default Document