var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = pages.index
  res.render("main", home.metadata)
})

router.get('/healthz', function(req, res, next) {
  console.log(`[GET] Health | ${req.path}`)
  res.sendStatus('ok')
})

router.get('/index', function(req, res, next) {
  const home = pages.home
  res.render("main", home.metadata)
})

router.get('/about', function (req, res, next) {
  const about = pages.about
  res.render("main", about.metadata)
})

router.get('/menu', function (req, res, next) {
  const menu = pages.menu
  res.render("main", menu.metadata)
})

router.get('/about.html', function (req, res, next) {
  const about = pages.about
  res.render("main", about.metadata)
})

router.get('/contact', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/contact.html', function (req, res, next) {
  const contact = pages.contact
  res.render("main", contact.metadata)
})

router.get('/parties', function (req, res, next) {
  const parties = pages.parties
  res.render("main", parties.metadata)
})

router.get('/parties.html', function (req, res, next) {
  const parties = pages.parties
  res.render("main", parties.metadata)
})

module.exports = router
