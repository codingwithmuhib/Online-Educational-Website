import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assests/images/Experienced-faculty29042019.jpg';
import courseImg2 from '../../assests/images/about-us.png';
import courseImg3 from '../../assests/images/ui-ux.png';
import heroImg from '../../assests/images/Logo-04.png';

import './courses.css';
import CourseCard from './CourseCard';

const coursesData = [
  {
    id: '01',
    title: 'XI-XII SCIENCE : NEET / JEE / MHT-CET',
    lesson:
      'Bench Mark Coaching Classes oﬀers a focused curriculum tailored for JEE & NEET aspirants, ensuring eﬀective preparation for these competitive exams.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: '02',
    title: 'MH-BOARD STD. X-IX-VIII',
    lesson:
      'Our experienced faculty at Bench Mark Coaching Classes has a proven track record of guiding MH-BOARD STD. X-IX-VIII to success.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: '03',
    title: 'XI-XII COM.',
    lesson:
      'Bench Mark Coaching Classes provides comprehensive study material and practice resources to help in their exams.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <div className='course__top d-flex justify-content-between align-items-center'>
              <div className='course__top__left w-50 row'>
                <div className='col-md-8'>
                  <h2>Bench Mark Coaching Classes (JEE & NEET Preparation)</h2>
                  <p>
                    At Bench Mark Coaching Classes, we're dedicated to helping
                    JEE & NEET aspirants achieve their dreams. With experienced
                    faculty and focused resources, we empower students for
                    success in competitive exams and beyond."
                  </p>
                </div>
                <div className='col-md-4 '>
                  <img src={heroImg} alt='' className='hero__img-2' />
                </div>
              </div>

              {/* <div className='w-50 text-end'>
                <button className='btn'>See All</button>
              </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg='4' md='6' sm='6'>
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
