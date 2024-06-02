import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assests/images/Logo-04.png';
import './hero-section.css';

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h2 className='mb-4 hero__title'>
                Great PLace to <br /> Become Doctors <br /> Suitable & IITians
              </h2>
              {/* <p className='mb-5'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p> */}
            </div>
            {/* <div className='search'>
              <input type='text' placeholder='Search' />
              <button className='btn'>Search</button>
            </div> */}
          </Col>

          <Col lg='5' md='6'>
            <img src={heroImg} alt='' className='w-100 hero__img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
