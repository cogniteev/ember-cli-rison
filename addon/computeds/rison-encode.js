import Ember from 'ember';
import { risonEncode } from 'ember-cli-rison/helpers/rison-encode';

const { computed } = Ember;

export default function(dependentKey) {
  return computed(dependentKey, function() {
    return risonEncode(( this.get(dependentKey) ));
  });
}
