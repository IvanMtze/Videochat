const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const fs = require('fs')
const server = require('https').Server({cert: fs.readFileSync('my_cert.crt'),
	key:fs.readFileSync('my_cert.key')},app)
const io = require('socket.io')(server,{
  cors: {
    origin: '*',
  }
});
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/uuid', (req, res) => {
  res.json({'uuid':`${uuidV4()}`})
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    //Connect to room
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)
    console.log("user joined")

	/*
    * Send a message to room
    */
    socket.on('message', (message) => {
        console.log(`message:  ${message}`);
        socket.to(roomId).broadcast.emit('message',message);
    });

    /*
    * Someone has disconnected from room
    */
    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})

server.listen(3000)
