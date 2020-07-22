import React from 'react'
import {IconInput} from '../../components/components';

import icons from '../../configuration/icons/'
import styles from './__styles.module.scss';

const QuestionScreen = ({
    
        screenLabel,
        description,
        elements,
        updateApplicationState,
        application,
      
}) => {
    return (
    <div className={styles.questionsScreen}>
         
      <div className={styles.screenInfo}>
      <h1 className={styles.screenLabel}>{screenLabel}</h1>
      <p>{description}</p>
      </div>
      <div className={styles.optionsWrapper}>
      {elements.map(element =>
      
          (<IconInput
            onChange={props =>
              updateApplicationState({ ...props, id: element.id })
            }
            value={application[element.id] || ""}
            key={element.id}
            {...element}
            iconSrc={icons}
          />
        )
      )}
      </div>
    
    </div>  );
}
 
export default QuestionScreen;