var moment = require('moment');

console.log(moment().format());

var now2;
var now = moment().unix();
console.log('first time', now);

setTimeout(() => {
  now2 = moment().unix();
  console.log('next time', now2);

  var tn = moment.unix(now2);
  console.log('moment ', moment.unix(now2).format('MMMM Do, YYYY @ hh:mm A'));

}, 3000);
