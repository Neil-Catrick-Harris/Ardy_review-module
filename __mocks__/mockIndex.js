const reviews = [
  {
    id: 1,
    product_id: 0,
    user: 'Elias580',
    score: 2,
    title: 'velit sit voluptatem',
    body: 'Voluptas accusantium rerum corporis aut corrupti rem. Quidem quasi voluptas dolorem at minus. Qui asperiores consequatur aliquid quos rem blanditiis aut. Sint enim deleniti impedit autem aliquid dolor omnis. Aspernatur reprehenderit deserunt provident.',
    recommend: 1,
    date: '2020-04-09T16:02:04.000Z',
    response_id: 0,
    ease: 5,
    value: 1,
    quality: 3,
    appearance: 4,
    createdAt: '2020-09-26T00:42:45.000Z',
    updatedAt: '2020-09-26T00:42:45.000Z',
  },
  {
    id: 2, product_id: 0, user: 'Daphnee250', score: 5, title: 'voluptatem at ut', body: 'Voluptas accusantium rerum corporis aut corrupti rem. Quidem quasi voluptas dolorem at minus. Qui asperiores consequatur aliquid quos rem blanditiis aut. Sint enim deleniti impedit autem aliquid dolor omnis. Aspernatur reprehenderit deserunt provident.', recommend: 1, date: '2020-03-11T21:43:17.000Z', response_id: null, ease: 4, value: 5, quality: 4, appearance: 3, createdAt: '2020-09-26T00:42:45.000Z', updatedAt: '2020-09-26T00:42:45.000Z',
  }, {
    id: 3, product_id: 0, user: 'Alice_Schmeler330', score: 5, title: 'possimus illum debitis', body: 'Voluptas accusantium rerum corporis aut corrupti rem. Quidem quasi voluptas dolorem at minus. Qui asperiores consequatur aliquid quos rem blanditiis aut. Sint enim deleniti impedit autem aliquid dolor omnis. Aspernatur reprehenderit deserunt provident.', recommend: 1, date: '2020-01-22T07:00:12.000Z', response_id: null, ease: 2, value: 1, quality: 5, appearance: 1, createdAt: '2020-09-26T00:42:45.000Z', updatedAt: '2020-09-26T00:42:45.000Z',
  }, {
    id: 4, product_id: 0, user: 'Kenya_Strosin140', score: 1, title: 'delectus natus eos', body: 'Voluptas accusantium rerum corporis aut corrupti rem. Quidem quasi voluptas dolorem at minus. Qui asperiores consequatur aliquid quos rem blanditiis aut. Sint enim deleniti impedit autem aliquid dolor omnis. Aspernatur reprehenderit deserunt provident.', recommend: 1, date: '2020-03-09T13:49:25.000Z', response_id: null, ease: 2, value: 2, quality: 3, appearance: 2, createdAt: '2020-09-26T00:42:45.000Z', updatedAt: '2020-09-26T00:42:45.000Z',
  }, {
    id: 5, product_id: 0, user: 'Madisyn.Rosenbaum0', score: 1, title: 'doloremque suscipit labore', body: 'Voluptas accusantium rerum corporis aut corrupti rem. Quidem quasi voluptas dolorem at minus. Qui asperiores consequatur aliquid quos rem blanditiis aut. Sint enim deleniti impedit autem aliquid dolor omnis. Aspernatur reprehenderit deserunt provident.', recommend: 0, date: '2020-02-24T10:26:36.000Z', response_id: null, ease: 4, value: 1, quality: 3, appearance: 1, createdAt: '2020-09-26T00:42:45.000Z', updatedAt: '2020-09-26T00:42:45.000Z',
  },
];

const Request = (url, method) => new Promise((resolve, reject) => {
  process.nextTick(() => {
    if (url === '/' && method === 'GET') {
      resolve(reviews);
    } else {
      const productId = Number(url.substr(1));
      if (reviews[0].product_id === productId) {
        resolve(reviews);
      } else {
        reject(new Error(`product id ${productId} does not exist`));
      }
    }
    reject(new Error('something went wrong in the test'));
  });
});

const Response = () => {
};

module.exports = {
  mock: (url, method) => ({
    req: new Request(url, method),
    res: new Response(),
  }),
  reviews,
};
