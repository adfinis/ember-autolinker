import Ember from 'ember';

const {
  Handlebars: { Utils: { escapeExpression } },
  Helper: { helper },
  String: { htmlSafe }
} = Ember;

export function autolink([text, disableHtmlSafety]) {
  return htmlSafe(
    Autolinker.link(disableHtmlSafety ? text : escapeExpression(text))
  );
}

export default helper(autolink);
