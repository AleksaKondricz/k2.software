

import React,{useState} from "react"
import {navigate} from 'gatsby';
import { Link, animateScroll as scroll } from "react-scroll"

import linkProps from "./header.config"
import navLinksData from "../../constants/navLinksData";
import {Menu} from '../../svg/svg';
import logo from '../../images/logo-gradient.svg'
import objects from '../../images/objects.svg'
import styles from './header.module.scss';

const Header = ({type}) => {
   const [mobHeader, toggleMobHeader] = useState(false)
   const scrollToTop = () => {
    scroll.scrollToTop()
   }
 

return(
  <>
  <header className={styles.headerLanding}>
    <img src={logo} onClick={() => scrollToTop()}/>
    {type==='formHeader'? '' : 
    <nav>
      {navLinksData.map(l => <Link {...linkProps} to={l.id} className={styles.Link}>{l.label}</Link>)}
    </nav>
    }
     {type==='formHeader' ? '' : <div className={styles.mobMenu} onClick={()=>toggleMobHeader(!mobHeader)}>{!mobHeader? <Menu/> : <span className={styles.closeMenu}>X</span>}</div>}
     {mobHeader && 
        <div className={styles.mobMenuExtended}>
          <span onClick={()=>toggleMobHeader(!mobHeader)} className={styles.closeMenu}>X</span>
          <nav>
          {navLinksData.map(l => <Link {...linkProps} offset={-200} onClick={() => toggleMobHeader(!mobHeader)} key={l.id} className={styles.Link} to={l.id}>{l.label}</Link>)}
          </nav>
          <img src={objects}/>
        </div>
     }
    {type==='formHeader' ? <span className={styles.formHeader} onClick={()=>navigate('/')}>X</span> : <Link to='cta' className={styles.estimate} {...linkProps}><span  /*onClick={()=>navigate('/getEstimation')}*/>Nice to have you here. &#128526;  </span></Link>}
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
