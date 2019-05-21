import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | autolink', function(hooks) {
  setupRenderingTest(hooks);

  test('creates links with escaping', async function(assert) {
    this.set(
      'text',
      'Hello test, let me google that for you: http://lmgtfy.com/?q=ember+testing'
    );

    await render(hbs`{{autolink text}}`);

    assert.dom('a').exists();
    assert.dom('a').hasAttribute('href', 'http://lmgtfy.com/?q=ember+testing');
  });

  test('creates links without escaping', async function(assert) {
    this.set(
      'text',
      'Hello test, let me <strong>google</strong> that for you: http://lmgtfy.com/?q=ember+testing'
    );

    await render(hbs`{{autolink text true}}`);

    assert.dom('strong').exists();
    assert.dom('a').exists();
    assert.dom('a').hasAttribute('href', 'http://lmgtfy.com/?q=ember+testing');
  });

  test('creates multiple links', async function(assert) {
    this.set('text', 'https://google.com is way better than https://bing.com!');

    await render(hbs`{{autolink text}}`);

    assert.dom('a').exists({ count: 2 });
  });

  test('set autolinker options', async function(assert) {
    this.set(
      'text',
      'Hello test, let me google that for you: http://lmgtfy.com/?q=ember+testing'
    );

    await render(hbs`{{autolink text newWindow=false}}`);

    assert.dom('a').exists();
    assert.dom('a').hasAttribute('href', 'http://lmgtfy.com/?q=ember+testing');
    assert.dom('a').doesNotHaveAttribute('target');
    assert.dom('a').doesNotHaveAttribute('rel');
  });
});
