
import React from "react"
import PropTypes from "prop-types"

import { Footer, Header } from "../components/components"

import styles from './layout.module.scss';

const FormLayout = ({ children }) => {
  return (
    <div className={styles.estimationFormLayout} >
      <Header type='formHeader'/>
      {children}
     
    </div>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormLayout