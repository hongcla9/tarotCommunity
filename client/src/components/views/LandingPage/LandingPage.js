import React,{useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Carousel} from 'antd';
import './LandingPage.css'
function LandingPage(props) {

   return (
       <div>
           <Carousel autoplay>
    <div>
      <h3><img className="banner-container"src="https://i.imgur.com/uC95jbj.jpg" title="tarot1.JPG"/></h3>
    </div>
    <div>
      <h3><img className="banner-container"src="https://i.imgur.com/SOMbqAH.jpg" title="viva-luna-studios-GLsAydqqgzs-unsplash.jpg"/></h3>
    </div>
    <div>
      <h3><img className="banner-container" src="https://i.imgur.com/uuQCkaO.jpg" title="dan-russo-adkrsIr_0iw-unsplash.jpg"/></h3>
    </div>
  </Carousel>,
       </div>
   )
}

export default withRouter(LandingPage)
