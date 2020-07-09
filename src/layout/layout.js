
import React from "react"
import PropTypes from "prop-types"

import { Footer, Header } from "../components/components"

import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout} >
      <Header />
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout