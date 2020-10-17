const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

let usernames = ['bruce445', 'adam1955', 'seeul8eraligator', 'purpledragon123', 'sk8tergurl89', 'donutluver96', 'gurlpow3rrox', 'stantheman301'];

let recordCount = 1;
let product_id = 1;

const generateCSVData = function () {

  writer.pipe(fs.createWriteStream(`${__dirname}/reviews.csv`));
  while (recordCount < 100000) {
    let reviewCount = 0;
    reviewCount = Math.floor(Math.random() * 21);
    if (reviewCount === 0) {
      product_id++;
      reviewCount = Math.floor(Math.random() * 21);
    }
    // debugger;
    for (let i = 0; i < reviewCount; i++) {
      let user = usernames[Math.floor(Math.random() * 8)];
      let score = Math.floor(Math.random() * 6);
      let title = faker.lorem.text();
      let body = faker.lorem.paragraph();
      let recommend = Math.floor(Math.random() * 6);
      let date = new Date(2019, Math.floor(Math.random() * 12), Math.floor(Math.random() * 29));
      let ease = Math.floor(Math.random() * 6);
      let value = Math.floor(Math.random() * 6);
      let quality = Math.floor(Math.random() * 6);
      let appearance = Math.floor(Math.random() * 6);
      let works = Math.floor(Math.random() * 6);

      // create write stream with above data
      writer.write({
        product_id: product_id,
        user: user,
        score: score,
        title: title,
        body: body,
        recommend: recommend,
        date: date,
        ease: ease,
        value: value,
        quality: quality,
        appearance: appearance,
        works: works
      })
    }
    product_id++;
    recordCount++;
    // debugger;
  }
  writer.end();
  console.log('data generated');
}

// debugger;
generateCSVData();
// '1, title, body, rating \n'

// const file = fs.createWriteStream(`${__dirname}/example.txt`);
// file.write('hello, ');
// file.end('world!');

// // stream

// fs.writeFile(`${__dirname}/example.txt`, 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('file was created');
// })
