import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assests/images/web-design.png';
import courseImg2 from '../../assests/images/students-working-on-a-project-plan-KH7U83J.jpg';
import courseImg3 from '../../assests/images/Cover-Image-2.png';
import heroImg from '../../assests/images/studclass.jpg';
import './courses.css';
import CourseCard from './CourseCard';

const coursesData = [
  {
    id: '01',
    title: 'Holistic Curriculum Integration:',
    lesson:
      'At Bench Mark High School,we oﬀer a holistic curriculum that seamlessly integrates academics, arts, sports, and character development to shape well-rounded students.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: '02',
    title: 'Small Class Sizes for Personalized Learning',
    lesson:
      'With small class sizes, our dedicated teachers at Bench Mark High School provide personalized attention and tailored instruction to ensure every student receives the support they need to succeed.',
    // students: 12.5,
    // rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: '03',
    title: 'Project-Based Learning Initiatives',
    lesson:
      'Bench Mark High School empowers students through project-based learning initiatives, where they tackle real-world challenges, develop critical thinking skills, and collaborate eﬀectively for future success.',
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
                  <h2>Bench Mark High School</h2>
                  <p>
                    Discover Bench Mark Educational Center, where every child's
                    journey from preschool to high school is nurtured with care
                    and excellence. Our dedicated educators and modern
                    facilities ensure a supportive environment where students
                    thrive and succeed.
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
