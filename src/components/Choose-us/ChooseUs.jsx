import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import chooseImg from '../../assests/images/why-choose-us.png';
import './choose-us.css';

import ReactPlayer from 'react-player';

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='choose__content'>
              <h2>
                Bench Mark Educational Center and Bench Mark Coaching Classes
              </h2>
              <p>
                Choose Bench Mark for a comprehensive educational journey from
                preschool to competitive exam preparation. With nurturing
                environments, experienced faculty, and tailored programs, we
                empower students to thrive academically and achieve their
                goals."
              </p>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='choose__img'>
              {showVideo ? (
                <ReactPlayer
                  url='https://youtu.be/n14ZUhgeVhE?feature=shared'
                  controls
                  width='100%'
                  height='350px'
                />
              ) : (
                <img src={chooseImg} alt='' className='w-100' />
              )}

              {!showVideo && (
                <span className='play__icon'>
                  <i
                    class='ri-play-circle-line'
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
