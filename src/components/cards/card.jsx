import React from 'react'

import styles from './card.module.scss';


const Card = ({title, paragraph, type}) => {
    return (<article className={styles[type]}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <span className={styles.circle}></span>
    </article>  );
}
 
export default Card;