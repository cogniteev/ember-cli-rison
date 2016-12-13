import Ember from 'ember';
import rison from 'rison';

export function risonDecode(value) {
  // cannot decode falsy or empty value
  if (!value || value === '') {
    return value;
  }

  // enforce string value
  if (Ember.typeOf(value) !== 'string') {
    value = String(value);
  }

  try {
    return rison.decode(value);
  } catch (e) {
    // error not catched by the rison parser
    if (e.name === 'TypeError' || e.name === 'RangeError') {
      throw new Error(`rison decoded error: ${e.message}`);
    } else {
      throw e;
    }
  }
}

export function safeRisonDecode(value) {
  try {
    return risonDecode(value);
  } catch (e) {
    return '';
  }
}

export default Ember.Helper.helper(function([ value ]) {
  return safeRisonDecode(value);
});
