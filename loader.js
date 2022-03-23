const request = require("request")

module.exports = {
    progress: params => {
        request.get(`https://loader.to/ajax/progress.php?id=${params.id}`, (err, response, body) => {
            let data = JSON.parse(body)
            params.callback({ url: data.download_url == null ? "Unavailable" : data.download_url, progress: data.progress, status: data.text })
        })
    },

    download: params => {
        request.get(`https://loader.to/ajax/download.php?format=${params.format}&url=${params.url}`, (err, response, body) => {
            let data = JSON.parse(body)
            params.callback({ id: data.id, title: data.title })
        })
    }
}

/*
Api

Download url: https://loader.to/ajax/download.php?format= <File Format> & url= <Youtube Link>
Check Progess: https://loader.to/ajax/progress.php?id= <Download Id>

Audio Formats   Video Formats

- mp3           mp4 (360p)
- m4a           mp4 (480p)
- webm          mp4 (720p)
- aac           mp4 (1080p)
- flac          mp4 (1440p)
- opus          webm (4k)
- ogg           webm (8k)
- wav
*/
