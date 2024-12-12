import HttpError from 'http-errors'
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import * as indexRouter from './routes/index.js'
import * as contactRouter from './routes/contact.js'
import * as menuRouter from './routes/menu.js'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// new shit
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// end new shit

const LOG_LEVEL = process.env.LOG_LEVEL || 'dev'

app.use(morgan(LOG_LEVEL))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist/public')))
// app.use(express.static(staticUrl));

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter.default)
app.use(urlRoot + 'contact', contactRouter.default)
app.use(urlRoot + 'menu', menuRouter.default)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(HttpError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
