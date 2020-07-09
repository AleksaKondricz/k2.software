import React from 'react';
import styles from './button.module.scss'

const Button = ({label, type, onClick}) => {
return (<button className={styles[type]}>{label}</button>  );
}
 
export default Button;