import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 60,
  duration: '1800s'
};

export default function () {
  const before = new Date().getTime();
  const T = 6; // this is the time needed to complete a VU iteration

  for (let i = 0; i < 10; i++) {
    http.get(`http://localhost:3000/api/reviews/products/${Math.floor(Math.random()*10000000)}`);
  }

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(
      `Timer exhausted! The execution time of the best took longer than ${T} seconds`
    );
  }
}
