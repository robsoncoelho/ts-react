
export const emailValidation = (value: string) => {
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) === false) {
    return 'Invalid email'
  }
}

export const passwordValidation = (value: string) => {
  if(!value || value?.length < 6) {
    return 'Password too short'
  } else if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value) === false) {
    return 'Password must contains at least 1 letter, 1 number and 1 special character'
  }
}

export const requiredValidation = (value: boolean) => {
  return !value && 'required'
} 
