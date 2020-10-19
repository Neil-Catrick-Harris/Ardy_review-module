const fs = require('fs');
const faker = require('faker');

let usernames = ['bruce445', 'adam1955', 'seeul8eraligator', 'purpledragon123', 'sk8tergurl89', 'donutluver96', 'gurlpow3rrox', 'stantheman301'];

let titles = ['love ikea furniture', 'nice table but hard assembly', 'love hosting dinner parties with this dining set', 'needed a new lamp and this one works', 'arrived broken out of the box', 'the wood is chipping already', 'so for so good!', 'if you are looking for a comfy arm chair this is it!', 'makes our living room look good', 'Cheap quality do not buy!', 'awesome chair!'];

let digits = [5, 3, 3, 5, 2, 1, 1, 2, 4, 2, 4];
let digits2 = [2, 4, 1, 2, 5, 3, 4, 5, 1, 3, 4];

let startTime = new Date().valueOf();
const writer = fs.createWriteStream(`${__dirname}/reviews.csv`);
writer.write('product_id,user,score,title,body,recommend,date,ease,value,quality,apperance,works\n', 'utf8');

const generateCSVData = function (writer, encoding, callback) {

  let recordCount = 10000000;
  let product_id = 1;
  writeFunction();
  function writeFunction () {
    let ok = true;
    do {
      recordCount -= 1;
      product_id += 1;
      let reviewCount = 12;

      function createCSVString (reviewCount) {
        let csvString;
        for (let i = 0; i < reviewCount; i++) {
          let user = usernames[Math.floor(Math.random() * 8)];
          let score = digits[i];
          let title = titles[i];
          let body = 'body for review regarding reviews about mykea product and how I need nice furniture and for my new apartment that is needed to make it look nice';
          let recommend = digits2[i];
          let date = faker.date.recent();
          let ease = digits[i];
          let value = digits2[i];
          let quality = digits[i];
          let appearance = digits2[i];
          let works = digits[i];

          if (!csvString) {
            csvString = `${product_id},${user},${score},${title},${body},${recommend},${date},${ease},${value},${quality},${appearance},${works}\n`;
          } else {
            csvString += `${product_id},${user},${score},${title},${body},${recommend},${date},${ease},${value},${quality},${appearance},${works}\n`;
          }
        }
        return csvString;
      }
      let data = `${createCSVString(reviewCount)}`;
      if (recordCount === 0) {
        writer.write(data, encoding, callback)
      } else {
        ok = writer.write(data, encoding);
      }

    } while (recordCount > 0 && ok);
    if (recordCount > 0) {
      writer.once('drain', writeFunction)
    }
  }
};

generateCSVData(writer, 'utf-8', () => {
  writer.end();
  let endTime = new Date().valueOf();
  let totalTime = ((endTime - startTime) / 1000);
  console.log(`Done seeding db. Finished in ${totalTime} seconds, with recs-per-sec of ${Math.round(10000000/totalTime)}`);
});
