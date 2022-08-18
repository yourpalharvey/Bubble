// import the websocket library
const WebSocket = require('ws')

// create a new server instance
const server = new WebSocket.Server({port: 1000});


// on connection
server.on('connection', (ws) => {
    const ffmpeg = child_process.spawn('ffmpeg', [
        // ingest
        '-re', '-i', '-',

        // video codec
        '-c:v', 'libx264',

        // audio codec
        'c:a', 'aac',
        '-ar', '44100',
        '-ac', '1',

        // other options
        '-bufsize', '1000',
        '-f', 'flv',
    
        // final argument should be the output, which in this case is our RTMP endpoint
        `rtmp://10.72.100.232/live/test`,
    ]);

    // If our ffmpeg process goes away, end the WebSocket connection
    ffmpeg.on('close', (code, signal) => {
        ws.terminate();
    });

    ws.on('message', (msg) => {
        // If we're using this WebSocket for other messages, check 
        // and make sure before piping it to our ffmpeg process
        if (Buffer.isBuffer(msg)) {
            ffmpeg.stdin.write(msg);
        }
    });

    // If the WebSocket connection goes away, clean up the ffmpeg process
    ws.on('close', (e) => {
        ffmpeg.kill('SIGINT');
    });

})
