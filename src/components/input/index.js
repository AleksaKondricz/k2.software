import React from "react"
import PropTypes from "prop-types"


import IconInput from "./iconInput/iconInput";
import TextInput from "./textInput/input";
import NumberInput from './numberInput/numberInput';


const rootInput = ({ variant, ...props }) => {
  switch (variant) {
    case "number":{
        return <NumberInput {...props}/>
    }
    case "select-icon":
      return <IconInput {...props} />
    default:
    case "text":
      return <TextInput {...props} />
  }
}

rootInput.propTypes = {
  variant: PropTypes.oneOf([
    "number",
    "select-icon",
    "text",
  ]).isRequired,
}

export default rootInput