import express from 'express'
const router = express.Router()
import getRequest from '../utils/request.js'
import network from '../utils/network.js'

function makeRequest(uri, res) {
  try {
    const apiUrl = `${network.urls.menuApi}${uri}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('makeRequest Failure: ' + error)
    res.status(500).json({
      'title': 'makeRequest Failure',
      'status': 500
    })
  }
}

router.get('/categories', function (req, res, next) {
  const uri = `/v1/menu?location=thehubpub`
  console.log(`CATEGORIES | GET | ${uri}`)
  makeRequest(uri, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
