// const request = require('request');

// request(process.argv[2], (error, response, body) => {
//     console.error('error: ', error);
//     console.log('status: ', response && response.statusCode);
//     console.log(body);
// });



fetch("https://www.autoevolution.com/rss/backend.xml", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}); ;
fetch("https://www.autoevolution.com/favicon.ico", {
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET"
});