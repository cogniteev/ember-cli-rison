import EmberObject from '@ember/object';
import { module, test } from 'qunit';
import risonEncode from 'ember-cli-rison/computeds/rison-encode';

module('Unit | Computed | rison encode');

test('it encode rison value', function(assert) {
  const subject = EmberObject.extend({
    encoded: risonEncode('value')
  }).create({ value: undefined });

  assert.equal(subject.get('encoded'), null, 'no value set');

  subject.set('value', {
    a: 'test',
    b: 42
  });

  assert.equal(subject.get('encoded'), '(a:test,b:42)');
});
