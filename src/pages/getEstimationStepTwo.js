import React from 'react';
import {navigate} from 'gatsby';

import logo from '../images/logo-gradient.svg'
import web from '../images/web.svg';
import mobile from '../images/mobile.svg';
import consulting from '../images/consulting.svg';

import styles from './getEstimation.module.scss'
import { Button } from '../components/components';


const GetEstimation = () => {
    return (
  
    <div className={styles.getEstimate}>
     <img className={styles.logo} src={logo}/>
     <span onClick={()=>navigate('/')}>X</span>
     <div>
     <div className={styles.getEstimateForm}>
            
    <div className={styles.wizardStart}>
        <p><strong>02.Your project belongs to the following field of expertise.</strong></p>
        <div>
              <div>
                  <img src={web}/>
                  <p>Web Development</p>
              </div>
              <div>
                  <img src={mobile}/>
                  <p>Mobile Development</p>
              </div>
              <div>
                  <img src={consulting}/>
                  <p>Consulting Services</p>
              </div>
       
          </div>
    </div>
             
     </div>
    <div className={styles.continueButtonsWrapper}> 
    <Button label='Back' type='outlined' onClick={()=>navigate('/getEstimation')}/>
    <Button label='Continue' type='primary'/>
    </div>
     </div>
    </div> 
    );
}
 
export default GetEstimation;