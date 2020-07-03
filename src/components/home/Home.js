import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel'



class Home extends React.Component {
  state = {
    
  };

  render() {
    
  
    return (
      <div id='classicformpage'>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.yimg.com/os/creatr-uploaded-images/2020-05/95f51220-9f8e-11ea-9fbc-495d3c667575"
      alt="First slide"
    />
    <Carousel.Caption>

      <p ><a href="https://www.youtube.com/watch?time_continue=2&v=N8VGnRN5-mc&feature=emb_title">Pyramid Head Cometh</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s3.deadbydaylight.com/data/4thanniversary-listing-share.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p><a href="https://deadbydaylight.com/en/news/4th-anniversary-event">Dead by Daylight 4th Anniversary Event.</a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://theculturednerd.org/wp-content/uploads/2020/06/robbie-the-rabiit-1-1024x576.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p><a href="https://deadbydaylight.com/en/news/silent-hill-collection-reveal">Silent Hill Collection Reveal.</a></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        

        
      </div>
    );
  }
}

export default Home;