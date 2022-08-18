const express = require('express');
const { createServer } = require('http');
const WebSocket = require('ws');
const child_process = require('child_process');
const url = require('url');


// create server app
const app = express();
const server = createServer(app);
const transcode = process.env.SMART_TRANSCODE || true;

// create websocket server
const wss = new WebSocket.Server({server});

// on connection
wss.on('connection', (ws) => {
    /*
    const queryString = url.parse(req.url).search;
    const params = new URLSearchParams(queryString);
    const video = params.get('video');
    const audio = params.get('audio');
    */
    /*
    const videoCodec = video === 'h264' && !transcode ? 
      [ '-c:v', 'copy'] :
      // video codec config: low latency, adaptive bitrate
      ['-c:v', 'libx264', '-preset', 'veryfast', '-tune', 'zerolatency', '-vf', 'scale=w=-2:0'];

    const audioCodec = audio === 'aac' && !transcode ? 
      [ '-c:a', 'copy'] :
      // audio codec config: sampling frequency (11025, 22050, 44100), bitrate 64 kbits
      ['-c:a', 'aac', '-ar', '44100', '-b:a', '64k'];
    */

    const ffmpeg = child_process.spawn('ffmpeg', [
        // ingest
        '-i', '-',

        // video codec
        //...videoCodec,
        '-c:v', 'libx264',

        // audio codec
        // ...audioCodec,
        '-c:a', 'aac', '-ar', '44100',

        // other options
        //'-bufsize', '1000',
        '-f', 'flv',
    
        // final argument should be the output, which in this case is our RTMP endpoint
        `rtmp://10.72.100.232/live/test`,
    ]);

    // If our ffmpeg process goes away, end the WebSocket connection
    ffmpeg.on('close', (code, signal) => {
        ws.terminate();
    });

    ffmpeg.stderr.on('data', (data) => {
        ws.send('ffmpeg got some data');
        console.log('FFmpeg STDERR:', data.toString());
    });

    ws.on('message', (msg) => {
        // If we're using this WebSocket for other messages, check 
        // and make sure before piping it to our ffmpeg process
        if (Buffer.isBuffer(msg)) {
            ffmpeg.stdin.write(msg);
        }
    });

    // ws.on('message', (message) => {
    //     ws.send(`You sent this message: ${message}`);
    // });

    // If the WebSocket connection goes away, clean up the ffmpeg process
    ws.on('close', (e) => {
        try {
            ffmpeg.kill('SIGINT')
        }
        catch (err) {
            console.error(err);
        }
    });

})

// start the server
server.listen(8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});