import { risonDecode, safeRisonDecode } from 'dummy/helpers/rison-decode';
import { module, test } from 'qunit';

module('Unit | Helper | rison decode');

test('it decode an array', function(assert) {
  assert.deepEqual(risonDecode('!(42,12,test)'), [42, 12, 'test']);
});

test('it decode an empty array', function(assert) {
  assert.deepEqual(risonDecode('!()'), []);
});

test('it decode an object', function(assert) {
  assert.deepEqual(risonDecode('(a:test,b:42,c:!t)'), {
    a: 'test',
    b: 42,
    c: true
  });
});

test('it decode an empty object', function(assert) {
  assert.deepEqual(risonDecode('()'), {});
});

test('it return an empty string if empty string', function(assert) {
  assert.deepEqual(risonDecode(''), '');
});

test('it return undefined if undefined', function(assert) {
  assert.deepEqual(risonDecode(), undefined);
});

test('it decode a nested objects', function(assert) {
  assert.deepEqual(risonDecode('(a:test,b:42,c:(d:value))'), {
    a: 'test',
    b: 42,
    c: {
      d: 'value'
    }
  });
});

test('it decode a string', function(assert) {
  assert.deepEqual(risonDecode('string'), 'string');
});

test('it decode a number', function(assert) {
  assert.deepEqual(risonDecode(42), 42);
});

test('it decode a boolean', function(assert) {
  assert.deepEqual(risonDecode('!t'), true);
});

test('it throw exception for invalid expressions', function(assert) {
  assert.expect(2);

  try {
    risonDecode('(');
  } catch (e) {
    assert.equal(e.message, 'rison decoded error: Maximum call stack size exceeded.');
  }

  try {
    risonDecode('(test:');
  } catch (e) {
    assert.equal(e.message, 'rison decoded error: null is not an object (evaluating \'m.length\')');
  }
});

test('safe version does not throw exception', function(assert) {
  try {
    assert.equal(safeRisonDecode('('), '');
  } catch (e) {
    assert.ok(false, 'exception should not be thrown');
  }
});
