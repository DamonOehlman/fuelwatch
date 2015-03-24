var request = require('request');
var FeedParser = require('feedparser');

/**
  # fuelwatch

  A simple module for extracting current fuel price information from the WA
  [fuelwatch site](http://www.fuelwatch.wa.gov.au/).

  ## RSS Endpoint Docs

  <http://www.fuelwatch.wa.gov.au/fuelwatch/pages/public/contentholder.jspx?key=fuelwatchRSS.html>

**/

var FUELTYPES = [
  [],
  [ 'Unleaded Petrol' ],
  [ 'Premium Unleaded' ],
  [],
  [ 'Diesel' ],
  [ 'LPG' ],
  [ '98 RON' ],
  [ 'B20 diesel' ],
  [ 'E10' ],
  [ 'P100' ],
  [ 'E85' ]
];

module.exports = function(opts) {
  var url = (opts || {}).url || 'http://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS';
  var type = (opts || {}).type;

  return request(url).pipe(new FeedParser());
};
