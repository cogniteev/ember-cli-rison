import { risonEncode } from 'dummy/helpers/rison-encode';
import { module, test } from 'qunit';

module('Unit | Helper | rison encode');

test('it encode an array', function(assert) {
  assert.equal(risonEncode([42, 12, 'test']), '!(42,12,test)');
});

test('it encode an empty array', function(assert) {
  assert.equal(risonEncode([]), '!()');
});

test('it encode an object', function(assert) {
  assert.equal(risonEncode({
    a: 'test',
    b: 42,
    c: true
  }), '(a:test,b:42,c:!t)');
});

test('it encode an empty object', function(assert) {
  assert.equal(risonEncode({}), '()');
});

test('it return an empty string if undefined', function(assert) {
  assert.equal(risonEncode(), '');
});

test('it omit an undefined value', function(assert) {
  assert.equal(risonEncode({
    a: 'test',
    b: 42,
    c: {
      d: 'value',
      e: undefined
    }
  }), '(a:test,b:42,c:(d:value))');
});

test('it encode a string', function(assert) {
  assert.equal(risonEncode('string'), 'string');
});

test('it encode a number', function(assert) {
  assert.equal(risonEncode(42), 42);
});

test('it encode a boolean', function(assert) {
  assert.equal(risonEncode(true), '!t');
});
