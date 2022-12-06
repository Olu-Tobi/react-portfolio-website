import React from 'react'
import "./Services.css"
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div class="container services__container">
        <article className='service'>
          <div class="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul class="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Web dev */}

        <article className='service'>
          <div class="service__head">
            <h3>Web Development</h3>
          </div>

          <ul class="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* content creation */}

        <article className='service'>
          <div class="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul class="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services