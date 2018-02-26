import Helper from '@ember/component/helper';
import rison from 'rison';

export function risonEncode(value) {
  return value === null || value === undefined ? null : rison.encode(value);
}

export default Helper.helper(function([ value ]) {
  return risonEncode(value);
});
