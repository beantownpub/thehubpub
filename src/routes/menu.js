import express from 'express'
import makeRequest from '../utils/request.js'
import { urls } from '../utils/network.js'
const router = express.Router()

console.log(urls)

function sendRequest(uri, res) {
  try {
    const apiUrl = `${urls.menuApi}${uri}`
    makeRequest(apiUrl, res)
  } catch(error) {
    console.log('makeRequest Error: ' + error)
    res.status(500).json({
      'title': 'makeRequest Failure',
      'status': 500
    })
  }
}

router.get('/categories', function (req, res, next) {
  const uri = `/v1/menu?location=thehubpub`
  sendRequest(uri, res)
})

router.get('/sides', function (req, res, next) {
  const uri = `/v1/menu?location=thehubpub`
  sendRequest(uri, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
