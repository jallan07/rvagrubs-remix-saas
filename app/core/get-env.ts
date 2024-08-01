import dotenv from 'dotenv'
import isBrowser from '#app/core/generic/is-browser'

if (!isBrowser()) {
  // Load environment variables from .env file in server environment
  dotenv.config()
}

// Function to get environment variables
function getEnv() {
  if (isBrowser()) {
    // For the browser, use window.ENV set during server-side rendering or build process
    return window.ENV || {}
  } else {
    // For the server, use process.env loaded by dotenv
    return process.env || {}
  }
}

export default getEnv
