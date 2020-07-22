import React,{useState, useEffect} from 'react'
import FormLayout from '../../layout/formLayout';
import steps from '../../configuration/steps/';

import ButtonControl from "./__butonControl";
import QuestionScreen from './__questionScreen';

import styles from './__styles.module.scss';

const combinedSteps = [
    steps.projectStatus,
    steps.projectType,
    steps.projectDuration
  ]



const Page = ({location}) => {
    const [navigation, setNavigation] = useState(0)
    const [application, setApplication] = useState({})

    
    useEffect(() => {
      setApplication(state => ({
        ...state
      }))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateApplicationState = ({ inputValue,  id }) => {
      setApplication(state => ({ ...state, [id]: inputValue }))
    }

    const screenConfig = {
        screenLabel: combinedSteps[navigation].label || "",
        description: combinedSteps[navigation].description || "",
        elements: combinedSteps[navigation].elements || [],
        updateApplicationState,
        application
      }

      const buttonConfig = {
        navigation,
        setNavigation,
        combinedSteps
      }


    return ( 
      <FormLayout>

            <QuestionScreen {...screenConfig}/>
            <ButtonControl {...buttonConfig} />
      </FormLayout>
     );
}
 
export default Page;