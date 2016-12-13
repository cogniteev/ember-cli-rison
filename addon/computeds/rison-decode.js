import Ember from 'ember';
import { safeRisonDecode } from 'ember-cli-rison/helpers/rison-decode';

const { computed } = Ember;

export default function(dependentKey) {
  return computed(dependentKey, function() {
    return safeRisonDecode(( this.get(dependentKey) ));
  });
}
