import * as app from '../src/app.js'
import http from 'http'
import debugLib from 'debug'
const debug = debugLib('thehubpub:server')

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3037')
app.default.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app.default)

/**
 * Listen on provided port, on all network interfaces.
 */
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`GIT_HASH: ${process.env.GIT_HASH}`)
console.log(`VERSION: ${process.env.VERSION}`)

server.listen(port, () => console.log(`listening on - http://localhost:${port}`))
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break;
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug(`Listening on ${bind}`)

}
