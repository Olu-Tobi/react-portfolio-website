import React from 'react'
import "./About.css";
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
    <h5>
      Get To Know
    </h5>
    <h2>
      About Me
    </h2>
    <div class="container about__container">
      <div class="about__me">
      <img src={ME} alt='img'/>
      </div>
      <div class="about__content">
      <div class="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5> Experience</h5>
        <small>3+ Years Working</small>
        </article>

        <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5> Clients</h5>
        <small>300+ Worldwide</small>
        </article>

        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5> Projects</h5>
        <small>80+ Completed</small>
        </article>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quod ad autem nisi, molestias odio, 
        quos quidem cupiditate consequuntur, nesciunt consequatur dolorem voluptatibus dolore dolores assumenda cum. 
        Suscipit, non facere.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About