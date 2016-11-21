import Ember from 'ember';
import { module, test } from 'qunit';
import risonDecode from 'ember-cli-rison/computeds/rison-decode';

module('Unit | Computed | rison decode');

test('it decode rison value', function(assert) {
  const subject = Ember.Object.extend({
    decoded: risonDecode('value')
  }).create({ value: undefined });

  assert.equal(subject.get('decoded'), undefined, 'no value set');

  subject.set('value', '(a:test,b:42)');

  assert.deepEqual(subject.get('decoded'), {
    a: 'test',
    b: 42
  });
});
