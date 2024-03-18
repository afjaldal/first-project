import React from 'react'
// import LoaderImg from '../assets/loader1.gif'
import './Loader.css'
import ReactDOM from 'react-dom'
import Loadr from "../Loadr.json"
import Lottie from "lottie-react"

const Loader = () => {
  return (  ReactDOM.createPortal(
    <div className='wrapper'>
            <div className='loader'>
                {/* <img src={LoaderImg} /> */}
                <Lottie  animationData={Loadr}></Lottie>
            </div>
        </div>, document.getElementById('loader')
  )
    
  )
}

export default Loader
