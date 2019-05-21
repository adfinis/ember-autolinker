import { module, test } from 'qunit';
import { click, visit, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | autolink', function(hooks) {
  setupApplicationTest(hooks);

  test('can use autolink helper with escaping', async function(assert) {
    await visit('/');

    await fillIn(
      '.example textarea',
      'Your text containing URLs like google.com or http://www.something-else.xyz?whatever=you#like'
    );

    assert.dom('.example a').exists({ count: 2 });
  });

  test('can use autolink helper without escaping', async function(assert) {
    await visit('/');

    await click('.example input');

    await fillIn(
      '.example textarea',
      'fancy html<br><strong>with emberjs.com</strong>'
    );

    assert.dom('.example strong').exists();
    assert.dom('.example a').exists();
  });
});
