import React from 'react';
import {navigate} from 'gatsby';

import logo from '../images/logo-gradient.svg'
import start from '../../static/start.svg';
import maintain from '../../static/maintain.svg';

import styles from './getEstimation.module.scss'
import { Button } from '../components/components';

const GetEstimation = () => {
    return (
  
    <div className={styles.getEstimate}>
     <img className={styles.logo} src={logo}/>
     <span onClick={()=>navigate('/')}>X</span>
     <div>
     <div className={styles.getEstimateForm}>
             <h3>Hello! Nice to have you here.</h3>
             <p>After answering our questions we will estimate the price of your product and will get back to you with an offer.</p>
    <div className={styles.wizardStart}>
        <p><strong>01. I need help with a project from?</strong></p>
        <div>
        <div>
        <img src={start}/>
        <p>I am starting this project from scratch.</p>
        </div>
         <div>
          <img src={maintain}/>
          <p>I already started the project.</p>
          </div>
          </div>
    </div>
             
     </div>
    <div className={styles.continueButtonWrapper}> <Button onClick={()=>navigate('/getEstimationStepTwo')} label='Continue' type='primary'/></div>
     </div>
    </div> 
    );
}
 
export default GetEstimation;