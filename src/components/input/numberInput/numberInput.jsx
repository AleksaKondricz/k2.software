/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useEffect } from "react"

import styles from "./__styles.module.scss"

const Component = ({
  value,
  onChange,
  beforeSymbol,
  afterSymbol,
  placeholder,
  label,
}) => {


  useEffect(() => {
    if (value) {
      onChange({ inputValue: value })
    }
  }, [])



  const onInputChange = e => {
    const { value: inputValue } = e.target
    onChange({ inputValue })
  }

 
  const baseWrapperClass = [styles.numberInputWrapper].join(" ")

  return (
    <div className={baseWrapperClass}>
      <span className={styles.label}>{label}</span>
      <div className={styles.numberInputFrame}>
        <span>{beforeSymbol}</span>
        <input
          className={styles.baseInputClasses}
          value={value}
          onChange={onInputChange}
          type="number"
          placeholder={placeholder}
        />
        <span className={styles.endSymbol}>{afterSymbol}</span>
      </div>
    
    </div>
  )
}




export default Component
