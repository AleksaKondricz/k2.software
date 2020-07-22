

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
    <span className={type==='formHeader'? styles[type] : styles.estimate} onClick={()=>navigate('/getEstimation')}>{type==='formHeader'? 'X' : 'get an estimate'}</span>
  </header>
)



export default Header
