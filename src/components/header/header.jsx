

import React,{useState} from "react"
import {navigate} from 'gatsby';


import {Menu} from '../../svg/svg';
import logo from '../../images/logo-gradient.svg'

import styles from './header.module.scss';

const Header = ({type}) => {
   const [mobHeader, toggleMobHeader] = useState(false)
return(
  <>
  <header className={styles.headerLanding}>
    <img src={logo}/>
    {type==='formHeader'? '' : 
    <nav>
      <li>Approach</li>
      <li>Services</li>
      <li>Technologies</li>
      <li>Clients</li>
    </nav>
    }
     {type==='formHeader' ? '' : <div className={styles.mobMenu} onClick={()=>toggleMobHeader(!mobHeader)}>{!mobHeader? <Menu/> : <span className={styles.closeMenu}>X</span>}</div>}
     {mobHeader && 
        <div className={styles.mobMenuExtended}>
          <nav>
          <li>Approach</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>Clients</li>
          </nav>
        </div>
     }
    {type==='formHeader' ? <span className={styles.formHeader} onClick={()=>navigate('/')}>X</span> : <span className={styles.estimate} onClick={()=>navigate('/getEstimation')}>get an estimation</span>}
  </header>
  {
    mobHeader && 
    <header className={styles.headerMobile}>
        <img src={logo}/>
        <Menu/>
    </header>
  }
  </>
)
}


export default Header
