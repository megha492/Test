import { generateAuthActions } from 'redux-token-auth'
// import { authUrl } from './constants'

const config = {
  authUrl: 'http://localhost:4000/auth/sign_in',
  // userAttributes: {
  //   firstName: 'first_name',
  //   imageUrl: 'image',
  // },
  userRegistrationAttributes: {
    email: 'email',
    password: 'password',
    password_confirmation: 'password_confirmation'
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
