import React, {useEffect} from 'react'
import styles from './__styles.module.scss';


const IconInput = (
    {options,
    label,
    iconSrc,
    value,
    onChange,
    required}
) => {

    useEffect(() => {
        if (required && !value) {
          onChange({ inputValue: value, hasError: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return ( 

        <div className={styles.iconInputWrapper}>
        <span className={styles.label}>{label}</span>
        <div className={styles.root}>
          {options.map(opt => (
            <div
              className={
                value === opt.value ? styles.optionSelected : styles.option
              }
              aria-hidden="true"
              key={opt.label}
              onClick={() => onChange({ inputValue: opt.value, hasError: false })}
            >
              <span>{opt.label}</span>
              {iconSrc[opt.icon]()}
            </div>
          ))}
        </div>
      </div>
     );
}
 
export default IconInput;