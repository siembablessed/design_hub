import './pages.css';
import './fonts.css';
import './fonts/fonts.css';
import homeImage from '../images/home-img.png';
import aboutImage from '../images/who_we_are.png';
import React from 'react';
import Tabs from './Tabs'
import ContactForm from './components/Contact';
import Footer from './components/Footer'

const Services = () => {
  return (
<div>
    <section id='home-abt-section'>
        <div className="myContainer">
        <h1>About Design Hub</h1>
        <p>Your One-Stop Solution for Websites, Web Apps, and Mobile Apps</p>
        </div>    
    </section>
    
    <section id='about-section'>
        <div className="myContainer">
        <div>
          <img src={aboutImage} alt="aboutimage" className='genImages' />
        </div>
        </div>
        <div className="myContainer">
        <h2 className='smallTitles'>Who We Are</h2>
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

    <section>

    </section>
      <ContactForm />
    <section>
      <Footer />
    </section>
    
</div>
);
}

export default Services;