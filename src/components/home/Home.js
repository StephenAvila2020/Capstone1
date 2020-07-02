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
        <Router>
        
         </Router>

        { <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '1rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBAnimation
                type='fadeInLeft'
                delay='.3s'
                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
              > 
                <h1 className='h1-responsive font-weight-bold'>
                  The Entity Welcomes You!
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                  quisquam iste, maiores. Nulla.
                </h6>
               
              </MDBAnimation>

              

             
            </MDBRow>
          </MDBContainer>
        </MDBView> }
        

        
      </div>
    );
  }
}

export default Home;