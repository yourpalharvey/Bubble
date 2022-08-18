# Video streaming backend

This branch is to facilitate the streaming of video. Due to the complex nature of streaming from the browser, I have created this branch to handle the associated code.

The signal path will be:
+-------------------------------+
|             Webcam            |   Next.js app
+-------------------------------+
                ||
                ||          websockets
               \  /
                \/
+-------------------------------+
|           express.js          |
| (ffmpeg to send video chunks) |
|               || rtmp         |   This Directory
|               \/              |
|           nginx server        |
+-------------------------------+
                ||
                ||          HLS
               \  /
                \/
+-------------------------------+
|            video player       |   Next JS app
+-------------------------------+


## Development
Once set up, this will not require constant updating, maybe a fix here or there. Therefore, I will exclude it from the pipeline.

