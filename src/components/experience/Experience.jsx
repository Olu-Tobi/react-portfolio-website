import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
    <h5>Skills I Have</h5>
    <h2>My Experience</h2>
    <div class="container experience__container">

    {/* FRONTEND */}
      <div class="experience__frontend">
      <h3>Frontend Development</h3>
      <div class="experience__content">
        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>JavaScript</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>React JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Redux JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Next JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Tailwind</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
      </div>
      </div>

      {/* BACKEND */}
      <div class="experience__backend">
      <h3>Backend Development</h3>
      <div class="experience__content">
        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Node JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>EJS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>Next JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
       <div>
       <h4>SQL</h4>
        <small className='text-light'>Experienced</small>
       </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>NoSQL</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className= "icon"/>
        <div>
        <h4>MongoDB</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Experience