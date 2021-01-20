import React from 'react'
import { Icon, Col, Card, Row, Carousel } from 'antd';
function TdirecImageSlider(props) {
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
  </Carousel>
        </div>
    )
}

export default TdirecImageSlider