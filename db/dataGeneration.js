const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

let usernames = ['bruce445', 'adam1955', 'seeul8eraligator', 'purpledragon123', 'sk8tergurl89', 'donutluver96', 'gurlpow3rrox', 'stantheman301'];

let beginningDate = new Date(2019, 0, 0);
debugger;
let recordCount = 1;
const product_id = 1;
let data = '';
while (recordCount < 30) {
  let reviewCount = 0;
  reviewCount = Math.floor(Math.random() * 21);
  if (reviewCount === 0) {
    product_id++;
    reviewCount = Math.floor(Math.random() * 21);
  }
  for (let i = 0; i < recordCount; i++) {
    let user = usernames[Math.floor(Math.random() * 8)];
    let score = Math.floor(Math.random() * 6);
    let title = faker.lorem.text();
    let body = faker.lorem.paragraph();
    let recommend = Math.floor(Math.random() * 6);
    // let date =
    let ease = Math.floor(Math.random() * 6);
    let value = Math.floor(Math.random() * 6);
    let quality = Math.floor(Math.random() * 6);
    let appearance = Math.floor(Math.random() * 6);
    let works = Math.floor(Math.random() * 6);

  }
  recordCount += reviewCount;
}

// '1, title, body, rating \n'

const file = fs.createWriteStream(`${__dirname}/example.txt`);
file.write('hello, ');
file.end('world!');

// // stream

// fs.writeFile(`${__dirname}/example.txt`, 'Hello World!', function (err) {
//   if (err) return console.log(err);
//   console.log('file was created');
// })
