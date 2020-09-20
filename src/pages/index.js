import React, {useState} from "react"
import {navigate} from 'gatsby'
import {  animateScroll as scroll } from "react-scroll"

import Layout from "../layout/layout";
import {Button, Card, TestimonialCard, HeadContainer} from '../components/components';
import {ContactForm} from '../containers/containers';

import {MainCube, Map} from '../svg/svg';

import techStackData from '../constants/techLogos';

import flag from '../images/cube.svg';
import footerCubes from '../images/objects.svg'
import climbers from '../images/tech-cubes.svg';



import styles from './styles/_styles.module.scss'; 

const IndexPage = () => {

  const scrollToBottom = () => {
    scroll.scrollToBottom()
   }

  return(
 
  <Layout>
     <HeadContainer/>
  <div className={styles.homePage}>
    <div id='hero' className={styles.hero}>

      <MainCube/>
     
      <div className={styles.heroContent}>
      <h1>We turn visions into reality,<br/> your problems into dust.</h1>
      <p>K2 Software is reliable, refreshing and ready to tackle any issue you may fence <br/>onto the road of launching your business idea into the internet space.</p>
      <div className={styles.actions}>
      <Button label='Step into our Office' type='primary' onClick={() => scrollToBottom()}/>

      </div>

      </div>
      </div>

      <div id='methods' className={styles.methods}>
              <div className={styles.title}><img src={flag}/> Our Approach.</div>
              <div className={styles.methodsCards}>
                <Card type='white'  title='Simplicity.' paragraph='Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody. Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody.'/>
                <Card type='white' title='Inovation.' paragraph='Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody. Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody.'/>
                <Card type='white' title='Realibility.' paragraph='Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody. Simple is better. Simple means clean and easy to use. We are building simple producst loved by everybody.'/>
              </div>
      </div>
      <div id='services' className={styles.services}>
              <div className={styles.title}><img src={flag}/> Our Services.</div>
              <div className={styles.servicesCards}>
                <Card title='Web Development' type='wide' paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'/>
                <Card title='Mobile Development' type='wide' paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'/>
                <Card title='Consulting' type='wide' paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'/>
               
              </div>
              <img src={climbers}/>
      </div>
      <div id='tech' className={styles.tech}>
              <div className={styles.title}><img src={flag}/> Our Tech Stack.</div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <div className={styles.techCards}>
                {techStackData.map( tech => (<div className={styles.iconFrame}>
                  <a target='_blank' href={tech.httpUrl}>
                    <img src={tech.url}/>
                  </a>
                </div>))}
                </div>
      </div>
      <div id='clients' className={styles.clients}>
              <div className={styles.title}><img src={flag}/> Our Clients Said.</div>
              <div className={styles.testimonials}>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
              </div>
      </div>
      <div id='cta' className={styles.callToAction}>
        <h1>Our biggest pleasure is having clients from <mark>all over the world.</mark></h1>
        <Map/>
      </div>
      <div id='contact' className={styles.contact}>
   
      <ContactForm/>
      <img src={footerCubes}/>
      </div>
  </div>

  </Layout>
)}

export default IndexPage
