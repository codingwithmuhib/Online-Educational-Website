import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assests/images/safe-learning-environment-2.png';
import courseImg2 from '../../assests/images/play-based-learning.jpg';
import courseImg3 from '../../assests/images/Students-Need-Personal-Attention.jpg';
import heroImg from '../../assests/images/academics.png';
import './courses.css';
import CourseCard from './CourseCard';

const coursesData = [
  {
    id: '01',
    title: 'Play-based Learning Environment',
    lesson:
      'At Blue Cubs Preschool, we foster a love for learning through playful exploration and hands-on activities.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: '02',
    title: 'Individualized Attention and Care',
    lesson:
      'Our experienced teachers provide personalized support to ensure every child thrives at Blue Cubs Preschool.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: '03',
    title: 'Safe and Stimulating Environment',
    lesson:
      'At Blue Cubs Preschool, we prioritize safety and provide a nurturing environment where children can grow and explore with conﬁdence.',
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
                  <h2>Blue cubs Pre-school</h2>
                  <p>
                    Blue Cubs Preschool: Where Curiosity Meets Creativity! Our
                    dynamic learning environment sparks imaginations, fosters
                    independence, and cultivates a love for learning from the
                    very start. Join us as we ignite the brightest futures for
                    our little explorers!
                  </p>
                </div>
                <div className='col-md-4 '>
                  <img src={heroImg} alt='' className='hero__img' />
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
