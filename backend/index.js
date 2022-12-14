require('dotenv').config()

const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

const handler = require('./handlers/handler')
const events = require('./utils/events')

const { PORT } = process.env

io.on(events.CONNECTION, handler)

httpServer.listen(PORT, () => {
    console.log('Server listening on port:', PORT)
})