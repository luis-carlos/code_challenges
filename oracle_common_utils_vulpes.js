const lo = require('lodash');

const children = [
  {
    "company": "5130efc78989846a36000ad8"
  },
  {
    "company": "55887190cf1e140e4b000155"
  },
  {
    "company": "5dba656a10ebcfda05e3f878"
  }
];
const result = lo.map(children, 'company');




console.log(result);