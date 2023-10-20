import express from "express"
import { urls } from "../utils/network.js"
import * as axios from "axios"
const router = express.Router()
import { appSecret } from "../utils/secrets.js"

if (process.env.NODE_ENV === "development") {
  console.log(appSecret)
  console.log(urls)
}

const AUTH = 'Basic ' + Buffer.from(appSecret.api_user + ':' + appSecret.api_pass).toString('base64')
const axiosInstance = axios.default.create({
  baseURL: urls.menuApi,
  timeout: 1000,
  headers: {'Content-Type': 'application/json', 'Authorization': AUTH}
})

async function getMenu(uri, res) {
  try {
    const response = await axiosInstance.get(uri)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.log(`getMenu: ${error}`)
    res.status(500).json({
      "title": "Failed to get menu",
      "status": 500
    })
  }
}

router.get("/categories", function (req, res, next) {
  const uri = `/v1/menu?location=thehubpub`
  getMenu(uri, res)
})

router.get("/sides", function (req, res, next) {
  const uri = `/v1/menu?location=thehubpub`
  getMenu(uri, res)
})

router.get("/:page", function(req, res, next) {
  res.redirect(`/${req.params["page"]}`)
})

export default router
