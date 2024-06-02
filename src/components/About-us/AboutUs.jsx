import React from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import aboutImg from '../../assests/images/about-us.png';
import CountUp from 'react-countup';
import './about.css';

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='about__img'>
              <img src={aboutImg} alt='' className='w-100' />
            </div>
          </Col>
          {/* Hello  */}

          <Col lg='6' md='6'>
            <div className='about__content'>
              <h2>About Us</h2>
              <p>
                At Bench Mark Educational Center, we cultivate excellence from
                preschool to competitive exam preparation. Our dedicated
                educators and modern facilities ensure a nurturing environment
                where every student can thrive and achieve their full potential.
              </p>

              {/* <div className='about__counter'>
                <div className=' d-flex gap-5 align-items-center'>
                  <div className='single__counter'>
                    <span className='counter'>
                      <CountUp start={0} end={25} duration={2} suffix='K' />
                    </span>

                    <p className='counter__title'>Completed Projects</p>
                  </div>

                  <div className='single__counter'>
                    <span className='counter'>
                      <CountUp start={0} end={12} duration={2} suffix='M' />
                    </span>

                    <p className='counter__title'>Patient Around World</p>
                  </div>
                </div>

                <div className=' d-flex gap-5 align-items-center'>
                  <div className='single__counter'>
                    <span className='counter'>
                      <CountUp start={0} end={95} duration={2} suffix='M' />
                    </span>

                    <p className='counter__title'>Ideas Raised Funds</p>
                  </div>

                  <div className='single__counter'>
                    <span className='counter'>
                      <CountUp start={0} end={5} duration={2} suffix='K' />
                    </span>

                    <p className='counter__title'>Categories Served</p>
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
