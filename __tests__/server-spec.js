//const jest = require('jest');
//require('iconv-lite').encodingExists('foo')
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
const server = require('../__mocks__/mockIndex.js')
const axios = require('axios');

jest.mock('axios');


describe('server responses', () => {
  it('should respond to a GET request with no param', (done) => {
    let {req, res} = server.mock('/', 'GET');
    axios.get.mockResolvedValue({data: server.reviews})
    return axios.get('/').then(result => {
      expect(result.data).toEqual(server.reviews);
      done();
    });

  })

  it('should respond to a GET request with a product id', (done) => {
    let {req, res} = server.mock('/0', 'GET');
    axios.get.mockResolvedValue({data: server.reviews})
    return axios.get('/0').then(result => {
      expect(result.data[0]).toEqual(server.reviews[0]);
      done();
    });
  })
})
