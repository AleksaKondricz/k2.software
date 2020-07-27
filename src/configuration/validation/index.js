// regular expressions

const emailRegexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  
 
  
  // validations

  const emailAddress = input => emailRegexp.test(input)
  const defaultText = input => input.length > 1
  const defaultNumber = input => input > 2
  const defaultDate = input => dateRegexp.test(input)
  
  export default {
    emailAddress,
    defaultText,
    defaultNumber,
    defaultDate,
  }