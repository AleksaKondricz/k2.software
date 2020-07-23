

import React from "react"
import {navigate} from 'gatsby';



import logo from '../../images/logo-gradient.svg'

import styles from './header.module.scss';

const Header = ({type}) => (
  <header className={styles.headerLanding}>
    <img src={logo}/>
    {type==='formHeader'? '' : 
    <nav>
      <li>Approach</li>
      <li>Services</li>
      <li>Technologies</li>
      <li>Clients</li>
    </nav>}
    {type==='formHeader' ? <span className={styles.formHeader} onClick={()=>navigate('/')}>X</span> : <span className={styles.estimate} onClick={()=>navigate('/getEstimation')}>get an estimation</span>}
   
  </header>
)



export default Header
