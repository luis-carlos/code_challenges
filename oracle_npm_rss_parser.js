let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL(process.argv[2]);
  console.log(feed.title);

  console.log(feed.items.length);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();