import express from 'express'
const router = express.Router()
import * as config from '../utils/config.js'
var sections = config.default.sections
import * as axios from 'axios'
import HEADERS from '../utils/auth.js'

console.log(Object.keys(axios))


router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.post('/send-message', function (req, res, next) {
  console.log(req.body)
  try {
    const host = process.env.CONTACT_API_HOST || 'contact-api'
    const protocol = process.env.CONTACT_API_PROTOCOL || 'http'
    const api_url = `${protocol}://${host}/v1/contact/hubpub`

    axios.default({
      method: 'post',
      url: api_url,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          res.status(200).json({
            'status': 200,
            'msg': 'Request Received! We will respond to you as soon as we can. Thanks!'
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Contact API Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Contact Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Contact auth Failure',
      'status': 500
    })
  }
})

router.get('/about', function(req, res, next) {
  res.redirect('/about')
})

router.get('/menu', function(req, res, next) {
  res.redirect('/menu')
})

router.get('/parties', function(req, res, next) {
  res.redirect('/parties')
})

router.get('/contact', function(req, res, next) {
  res.redirect('/contact')
})

export default router
