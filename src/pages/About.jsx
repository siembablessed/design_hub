import './pages.css';
import './fonts.css';
import './fonts/fonts.css';
import homeImage from '../images/home-img.png';
import aboutImage from '../images/who_we_are.png';
import React from 'react';
import Tabs from './Tabs'
import ContactForm from './components/Contact';
import Footer from './components/Footer'
import Cards from './components/Cards'

const About = () => {
  return (
    <div>
        <section id='home-abt-section'>
          <div className="myContainer">
          <h1>Packages By Service</h1>
          <p>Your One-Stop Solution for Websites, Web Apps, and Mobile Apps</p>
          </div>
          {/* <div className="cardContainer">
          
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
        </div> */}
          <Cards />

        </section>
        <section id='contact-section'>
          <div className="myContainer">
            <ContactForm />
          </div>
        </section>

        <section id='footer-section'>
          <Footer />
      </section>
    </div>

  );
}

export default About;