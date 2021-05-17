const cheerio = require('cheerio')
const axios = require('axios');
const {
    each
} = require('cheerio/lib/api/traversing');

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

async function ytdl(id, type) {
    if (id == '') {
        throw new Error('Give me valid args')
    } else {
        var $ = cheerio.load(await mp3(id))
        var arr = []
        var a = await $('a').each((index, elem) => {
            arr.push(elem.attribs.href)
        })
        return arr
    }
}

module.exports = ytdl