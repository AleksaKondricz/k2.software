

import React from "react"
import {Button} from '../components';

import logo from '../../images/logo-gradient.svg'

import styles from './header.module.scss';

const Header = () => (
  <header className={styles.headerLanding}>
    <img src={logo}/>
    <nav>
      <li>Approach</li>
      <li>Services</li>
      <li>Technologies</li>
      <li>Clients</li>
    </nav>
    <span>get an estimate</span>
  </header>
)



export default Header
