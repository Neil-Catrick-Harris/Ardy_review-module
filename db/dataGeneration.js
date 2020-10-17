const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();

let usernames = ['bruce445', 'adam1955', 'seeul8eraligator', 'purpledragon123', 'sk8tergurl89', 'donutluver96', 'gurlpow3rrox', 'stantheman301'];

writer.pipe(fs.createWriteStream(`${__dirname}/reviews.csv`));


const generateCSVData = function (writer) {

  let recordCount = 1000000;
  let product_id = 1;
  writeFunction();
  function writeFunction () {
    let startTime = new Date().valueOf();
    let ok = true;
    do {
      recordCount -= 1;
      product_id += 1;
      let reviewCount = 0;
      reviewCount = Math.ceil(Math.random() * 12);

      for (let i = 0; i < reviewCount; i++) {
        // cut out math.random (use array of 10 nums 5, 2, 3, 3, 3, 1, 4)
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

        if (recordCount === 0 && i === reviewCount - 1) {
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
          writer.end();
          let endTime = new Date().valueOf();
          let totalTime = ((endTime - startTime) / 1000);
          console.log(`Done seeding db. Finished in ${totalTime} seconds, with recs-per-sec of ${Math.round(10000000/totalTime)}`);

        } else {
          ok = writer.write({
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
      }

    } while (recordCount > 0 && ok);
    if (recordCount > 0) {
      writer.once('drain', writeFunction)
    }
  }
};

generateCSVData(writer);




// let endTime = new Date().valueOf(); let totalTime = ((endTime - startTime) / 1000);  console.log(`Done seeding db of ${dataSize} records with chunks of ${chunkSize}. Finished in ${totalTime} seconds, with recs-per-sec of ${Math.round(dataSize/totalTime)}`);

// function writeOneMillionTimes(writer, data, encoding, callback) {
//   let i = 1000000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // Last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // Had to stop early!
//       // Write some more once it drains.
//       writer.once('drain', write);
//     }
//   }
// }

bash cat less

give only first 10 lines of csv file