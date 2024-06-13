import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import CompanySection from '../components/Company-section/Company';

import AboutUs from '../components/About-us/AboutUs';
import Courses from '../components/Courses-section/Courses';
import Courses2 from '../components/Courses-section/Courses2';
import Courses3 from '../components/Courses-section/Courses3';

import ChooseUs from '../components/Choose-us/ChooseUs';
// import Features from '../components/Feature-section/Features';
// import FreeCourse from '../components/Free-course-section/FreeCourse';

import Testimonials from '../components/Testimonial/Testimonials';

// import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <Courses2 />
      <Courses3 />

      <ChooseUs />
      {/* <Features /> */}
      {/* <FreeCourse /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
