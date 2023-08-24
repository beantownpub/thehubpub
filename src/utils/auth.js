import * as AWS from "@aws-sdk/client-secrets-manager"
const client = new AWS.SecretsManagerClient({ region: "us-east-2" })
const input = {
  SecretId: "production-use2-app-creds"
}
const command = new AWS.GetSecretValueCommand(input)
async function asyncCall() {
  const data = await client.send(command)
  return JSON.parse(data.SecretString)
}
const creds = await asyncCall()

const API_USERNAME = creds.api_user
const API_PASSWORD = creds.api_pass
console.log(`API_USERNAME: ${API_USERNAME}`)
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}
export default HEADERS

