import Amplify, { Auth } from "aws-amplify";


export const signInHandler = (user, password) => {
    console.log('Signing in...')
    Auth.signIn(user, password)
    .then(user => {

    })
    .catch(e => {
    console.log('error signing up: ', e)
    })
}
  
export const signUpHandler = () => {
    console.log('This feature will work soon...')
}
  
export const verifyHandler = () => {
    console.log('This feature will be removed')
}