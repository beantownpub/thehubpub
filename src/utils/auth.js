const API_USERNAME = process.env.API_USERNAME || 'wtf'
const API_PASSWORD = process.env.API_PASSWORD || 'wtf'
const AUTH = 'Basic ' + Buffer.from(API_USERNAME.trim() + ':' + API_PASSWORD.trim()).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

module.exports = HEADERS
