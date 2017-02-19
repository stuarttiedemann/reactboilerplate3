var moment = require('moment');

console.log(moment().format());

// Unix epoch January 1st 1970 @ 12:00am -> 0
var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1487448269;

var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));
