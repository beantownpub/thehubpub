import express from "express"
import { urls } from "../utils/network.js"
import * as axios from "axios"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const LOCAL_MENU_PATH = path.join(__dirname, "../../data/menus/thehubpub.json")

const router = express.Router()

if (process.env.NODE_ENV === "development") {
  console.log(urls)
}

const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
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
    console.warn(`Menu API unavailable (${error.message}), falling back to local JSON`)
    try {
      const raw = fs.readFileSync(LOCAL_MENU_PATH, "utf8")
      const data = JSON.parse(raw)
      res.status(200).json({"status": 200, "data": data})
    } catch (fileError) {
      console.error("Failed to load local menu fallback:", fileError)
      res.status(500).json({"title": "Menu unavailable", "status": 500})
    }
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
