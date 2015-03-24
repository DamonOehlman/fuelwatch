var test = require('tape');
var fs = require('fs');
var fuelwatch = require('..');
var JSONStream = require('JSONStream');
var samples;

test('can download the file', function(t) {
  t.plan(1);
  fuelwatch()
    .pipe(JSONStream.stringify())
    .pipe(fs.createWriteStream(__dirname + '/sample.json'))
    .on('finish', t.pass.bind(t, 'file downloaded'));
});

test('can open the samples file', function(t) {
  t.plan(1);
  t.doesNotThrow(function() {
    samples = require('./sample.json');
  });
});

test('we have some samples', function(t) {
  t.plan(1);
  t.ok(samples.length > 1);
});
