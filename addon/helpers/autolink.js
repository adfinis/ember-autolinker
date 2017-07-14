import Ember from 'ember';

export function autolink([ text ]) {
  return Autolinker.link(text);
}

export default Ember.Helper.helper(autolink);
