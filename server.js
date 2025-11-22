const io = require('socket.io')(4000, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('progress', (data) => {
    socket.emit('progress', data);
  });
});