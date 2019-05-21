import Autolinker from 'autolinker';
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import Ember from 'ember';

const { Handlebars: { Utils: { escapeExpression } } } = Ember;

export function autolink([text, disableHtmlSafety], autolinkerOptions) {
  return htmlSafe(
    Autolinker.link(
      disableHtmlSafety ? text : escapeExpression(text),
      autolinkerOptions
    )
  );
}

export default helper(autolink);
