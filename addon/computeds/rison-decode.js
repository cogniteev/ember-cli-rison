import Ember from 'ember';
import { safeRisonDecode } from 'ember-cli-rison/helpers/rison-decode';

export default function(dependentKey) {
  return Ember.computed(dependentKey, function() {
    return safeRisonDecode(([ this.get(dependentKey) ]));
  });
}
