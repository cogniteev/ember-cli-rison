import Ember from 'ember';
import rison from 'rison';

export function risonEncode(value) {
  return value === undefined ? '' : rison.encode(value);
}

export default Ember.Helper.helper(function([ value ]) {
  return risonEncode(value);
});
