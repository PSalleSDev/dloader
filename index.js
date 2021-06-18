const cheerio = require('cheerio')
const axios = require('axios');

const api = {
    "mp3": "https://www.yt-download.org/api/button/mp3/",
}

async function mp3(id) {
    var res;
    var config = {
        method: 'get',
        url: `${api.mp3}${id}`,
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            var site = response.data
            res = site
        })
        .catch(function (error) {
            console.log(error);
        });

    return res
}

function getVIdeoId(videoUrl) {

    if(videoUrl.includes('v=') && !videoUrl.includes('&')) {
      formatedUrl = videoUrl.split('v=');

      return formatedUrl[1];
    } else if(videoUrl.includes('&')) {
      formatedUrl = videoUrl.split('v=');
      formatedUrl = formatedUrl[1].split('&');

      return formatedUrl[0];
    }

    formatedUrl = videoUrl.split('/');
    
    return formatedUrl[formatedUrl.length - 1];
}

async function ytdl(id) {
    if (id == '') {
        throw new Error('Give me valid args')
    } else {
        var $ = cheerio.load(await mp3(getVIdeoId(id)))
        var arr = []
        var a = await $('a').each((index, elem) => {
            arr.push({"url":elem.attribs.href, "quality":$(elem.children[3]).text()})
        })
        return arr
    }
}

module.exports = ytdl
