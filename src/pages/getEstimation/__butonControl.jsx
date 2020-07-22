import React from "react"
import {Button} from '../../components/components';

import styles from "./__styles.module.scss"

export default ({ navigation, setNavigation, combinedSteps}) => (
  <div className={styles.navigationButtons}>
    <div>
      {navigation ? (
        <Button
          onClick={() => setNavigation(navigation - 1)}
          type="formBack"
          label="Back"
        />
      ) : (
        <div />
      )}
      {navigation !== combinedSteps.length ? (
        <Button
          onClick={() => setNavigation(navigation + 1)}
          type="form"
          label="Next"
          
        />
      ) : (
        <div />
      )}
    </div>
  </div>
)
