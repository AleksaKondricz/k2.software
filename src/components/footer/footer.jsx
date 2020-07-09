import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
            © {
            new Date().getFullYear()
        }. K2 Software.
        </footer>
    );
}

export default Footer;
