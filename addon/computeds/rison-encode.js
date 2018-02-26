import { computed } from '@ember/object';
import { risonEncode } from 'ember-cli-rison/helpers/rison-encode';

export default function(dependentKey) {
  return computed(dependentKey, function() {
    return risonEncode( this.get(dependentKey) );
  });
}
