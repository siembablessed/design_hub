import './pages.css';
import './fonts.css';
import './fonts/fonts.css';
import homeImage from '../images/home-img.png';
import aboutImage from '../images/who_we_are.png';
import React from 'react';
import Tabs from './Tabs'
import ContactForm from './components/Contact';
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
      <section id='home-section'>
        <div className='myContainer'>
          <h1 className='headingTitles'>
          Innovative Designs.<br></br>
          Seamless Development. <br></br>
          Elevate Your Digital Presence.
          </h1>
          <p>Your One-Stop Solution for Websites, Web Apps, and Mobile Apps</p>
          <a href="./" className='myBtn'>Get Started Today</a>
        </div>
        <div className='myContainer'>
          <img src={homeImage} alt="landingimage" className='homeImage' />
        </div>
      </section>

{/* ABOUT SECTION */}

      <section id='about-section'>
        <div className="myContainer">
        <div>
          <img src={aboutImage} alt="aboutimage" className='genImages' />
        </div>
        </div>
        <div className="myContainer">
        <h2 className='headingTitles'>Who We Are</h2>
        <p>During the month of June, students were engaged in a Digital Marketing 
          course, and I assisted with conducting lessons whenever the digital marketing 
          instructors were unavailable. I was reassigned to the Mbare hub two weeks before 
          the end of the month. When I arrived in Mbare, the students had already completed 
          the Digital Marketing crash course. I then began working with students who had decided 
          
          to specialize in UX/UI design. I guided them through the specialization curriculum and 
          
          discussed potential career paths available aftercompleting the specialization. Additionally, 
          I focused on my department's 
          monthly design challenge.
        </p>
        <a href="./" className='myBtn'>Our Offers</a>
        </div>
      </section>

      <section id='services-section'>
        <h2 className='headingTitles'>Our Services</h2>
        <p>Your One-Stop Solution for Websites, Web Apps, and Mobile Apps</p>
        <div className="cardContainer">
          
          <div className="cardOne">
            <h3>Engineering Designs</h3>
            <ul>
              <li>Mechanical Engineering</li>
              <li>Civil Engineering</li>
              <li>Agricultural Engineering</li>
              <li>House Plans</li>
              <li>Interior Design</li>
              <li>Wooden Furniture Design</li>
            </ul>
          </div>

          <div className="cardOne">
            <h3>Corporate Designs</h3>
            <ul>
              <li>Websites Design</li>
              <li>App Development</li>
              <li>Agricultural Engineering</li>
              <li>Logo Design</li>
              <li>Business Card Design</li>
              <li>Flyer Design</li>
            </ul>
          </div>

          <div className="cardOne">
            <h3>Digital Marketing</h3>
            <ul>
              <li>Social Media Marketing</li>
              <li>S.E.O</li>
              <li>Agricultural Engineering</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Affiliate Marketing</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='price-section'>
        <div className="myContainer">
          <h2 className='headingTitles'>Price List</h2>
          <p>Your One-Stop Solution for Websites, Web Apps, and Mobile Apps</p>
          <Tabs/>
        </div>
      </section>
      <section id='contact-section'>
        <div className="myContainer">
         <ContactForm />
        </div>
      </section>
      <section id='footer-section'>
          <Footer />
      </section>


  {/*RENDERING DIV*/}
    </div>
  );
}

export default Home;
