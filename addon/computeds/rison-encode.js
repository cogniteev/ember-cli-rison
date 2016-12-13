import Ember from 'ember';
import { risonEncode } from 'ember-cli-rison/helpers/rison-encode';

export default function(dependentKey) {
  return Ember.computed(dependentKey, function() {
    return risonEncode(( this.get(dependentKey) ));
  });
}
