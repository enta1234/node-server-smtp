const SMTPServer = require('smtp-server').SMTPServer
const PORT = 8086

const options = {
  // disable STARTTLS to allow authentication in clear text mode
  disabledCommands: ['STARTTLS', 'AUTH'],
  // By default only PLAIN and LOGIN are enabled
  authMethods: ['PLAIN', 'LOGIN', 'CRAM-MD5'],
  banner: 'Welcome to Enta1234 SMTP Server',
  socketTimeout: 10000,
  logger: true,

  onData (stream, session, callback) {
    stream.pipe(process.stdout) // print message to console
    stream.on('end', callback)
  }

}

const server = new SMTPServer(options)

server.listen(PORT)
