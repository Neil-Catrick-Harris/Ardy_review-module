import http from 'k6/http';
import { sleep } from 'k6';
export default function () {
  http.get('http://localhost:3000/api/reviews/products/1');
  sleep(1);
}
