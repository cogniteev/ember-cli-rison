import Ember from 'ember';
import rison from 'rison';

const { Helper } = Ember;

export function risonEncode(value) {
  return value === null || value === undefined ? null : rison.encode(value);
}

export default Helper.helper(function([ value ]) {
  return risonEncode(value);
});
