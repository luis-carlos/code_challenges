const request = require('request');
const cheerio = require('cheerio');
request(process.argv[2], function (error, response, body) {
  console.error(`Is error null? ${!error}`);
  console.error('error:', error); // Print the error if one occurred
  
  console.log(`Request body`);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const $ = cheerio.load(body, null, false);
  console.log('body:', $('item').html()); // Print the HTML for the Google homepage.
  if ($('item').html() === null)
    console.log('Not parseable');
  else
    console.log('Parseable');

  if (!$('item').html())
    console.log('Not parseable either');
});