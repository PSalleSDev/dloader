**DLoader**

[![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/Y69FPrt9Na)

DLoader is an api that downloads videos and audios from various streaming platforms
-

> Functions

- download
- progress

```javascript
dloader.download({
    url: "",
    format: "",
    callback: data => {
        /*
            data = {
                id: process id,
                title: video title
            }
        */
    }
})
```

```javascript
dloader.progress({
    id: "",
    callback: data => {
        /*
            data = {
                url: download url,
                progress: download progress
                status: download status
            }
        */
    }
})
```

> File formtas


| Audio | Video |
|----------|:-------------:|
| mp3 | mp4 (360) |
| m4a | mp4 (480) |
| webm | mp4 (720) |
| aac | mp4 (1080) |
| flac | mp4 (1440) |
| opus | webm (4k) |
| ogg | webm (8k) |
| wav |


This api was built based on the website [loader.to](https://loader.to/)
