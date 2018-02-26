import { computed } from '@ember/object';
import { safeRisonDecode } from 'ember-cli-rison/helpers/rison-decode';

export default function(dependentKey) {
  return computed(dependentKey, function() {
    return safeRisonDecode( this.get(dependentKey) );
  });
}
