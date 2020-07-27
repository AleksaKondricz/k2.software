import React from 'react'
import star from '../../../../static/star.svg';
import styles from './__styles.module.scss';

const TestimonailCard = () => {
    const rating = [{id: 1, star: star}, {id: 2, star: star}, {id: 3, star: star}, {id: 4, star: star}, {id: 5, star: star},]
    return ( 
        <article className={styles.testimonial}>
            <div className={styles.rating}>
                 {rating.map(r => <img src={r.star}/>)}
            </div>
            <div className={styles.content}>
                <h4>Fast. Reliable. Professional.</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>
                <p className={styles.author}><em>-- Author</em></p>
            </div>
        </article>
     );
}
 
export default TestimonailCard;