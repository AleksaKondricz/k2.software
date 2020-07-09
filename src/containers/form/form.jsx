import React from 'react'
import {Input, Button} from '../../components/components';
import twitter from '../../../static/twitter.svg';
import whatsup from '../../../static/whatsup.svg';
import discord from '../../../static/discord.svg';
import telegram from '../../../static/telegram.svg';

import styles from './form.module.scss';

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <p>Say 'Hello' on social media or reach out by filling the form bellow.</p>
            <nav>
                <img src={twitter}/>
                <img src={whatsup}/>
                <img src={telegram}/>
                <img src={discord}/>
            </nav>
             <h3>Let's Get in Touch!</h3>
             <p>You have a vision, but you need someone to help you execute it? Search no more.</p>
             <Input placeholder='Full Name'/>
             <div>
                 <Input placeholder='Email'/>
                 <Input placeholder='Phone'/>
             </div>
             <Button type='primary' label='Reach Out'/>
        </div>
      );
}
 
export default ContactForm;