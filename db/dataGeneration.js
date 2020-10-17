const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

let usernames = ['bruce445', 'adam1955', 'seeul8eraligator', 'purpledragon123', 'sk8tergurl89', 'donutluver96', 'gurlpow3rrox', 'stantheman301'];

let recordCount = 1;
let product_id = 1;

const generateCSVData = function () {
  let startTime = new Date().valueOf();
  writer.pipe(fs.createWriteStream(`${__dirname}/reviews.csv`));
  while (recordCount < 10000000) {
    let reviewCount = 0;
    reviewCount = Math.floor(Math.random() * 12);
    if (reviewCount === 0) {
      product_id++;
      reviewCount = Math.floor(Math.random() * 12);
    }

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
  }
  writer.end();
  let endTime = new Date().valueOf();
  let totalTime = ((endTime - startTime) / 1000);
  console.log(`Done seeding db. Finished in ${totalTime} seconds, with recs-per-sec of ${Math.round(10000000/totalTime)}`);
};

generateCSVData();




// let endTime = new Date().valueOf(); let totalTime = ((endTime - startTime) / 1000);  console.log(`Done seeding db of ${dataSize} records with chunks of ${chunkSize}. Finished in ${totalTime} seconds, with recs-per-sec of ${Math.round(dataSize/totalTime)}`);