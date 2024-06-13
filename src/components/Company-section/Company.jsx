import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './company-section.css';
import heroImg from '../../assests/images/Logo-04.png';
import heroImg2 from '../../assests/images/Logo-02.png';

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='6' xs='12' className='custom-col'>
            <h3 className='d-flex align-items-center gap-1 custom-name'>
              <img src={heroImg} alt='School Logo' className='custom-img' />
              Bench Mark High School
            </h3>
          </Col>

          <Col lg='3' md='4' sm='6' xs='12' className='custom-col'>
            <h3 className='d-flex align-items-center gap-1 custom-name'>
              <img src={heroImg2} alt='School Logo' className='custom-img' />
              Blue Cubs Pre School
            </h3>
          </Col>

          <Col lg='4' md='6' sm='8' xs='12' className='custom-col'>
            <h3 className='d-flex align-items-center gap-1 custom-name'>
              <img src={heroImg} alt='School Logo' className='custom-img' />
              Bench Mark Coaching Classes
            </h3>
          </Col>

          {/* <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <i class='ri-pinterest-line'></i> Pinterest
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              <i class='ri-dribbble-line'></i> Dribble
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              {' '}
              <i class='ri-apple-fill'></i> Apple
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h3 className=' d-flex align-items-center gap-1'>
              {' '}
              <i class='ri-finder-fill'></i> Finder
            </h3>
          </Col>

          <Col lg='2' md='3' sm='4' xs='6'>
            <h2 className=' d-flex align-items-center gap-1'>
              {' '}
              <i class='ri-google-fill'></i> Google
            </h2>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Company;
