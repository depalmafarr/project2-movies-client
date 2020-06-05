'use strict'

// prodiction link should have no / at end of url
let apiUrl
const apiUrls = {
  production: 'https://movie-logs-09.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
