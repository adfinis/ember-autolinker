import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupComponentTest } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import { find, findAll } from 'ember-native-dom-helpers'

describe('Integration | Helper | autolink', function() {
  setupComponentTest('autolink', {
    integration: true
  })

  it('creates links with escaping', function() {
    this.set(
      'text',
      'Hello test, let me google that for you: http://lmgtfy.com/?q=ember+testing'
    )

    this.render(hbs`{{autolink text}}`)

    expect(findAll('a')).to.have.length(1)

    expect(find('a').href).to.equal('http://lmgtfy.com/?q=ember+testing')
  })

  it('creates links without escaping', function() {
    this.set(
      'text',
      'Hello test, let me <strong>google</strong> that for you: http://lmgtfy.com/?q=ember+testing'
    )

    this.render(hbs`{{autolink text true}}`)

    expect(findAll('strong')).to.have.length(1)
    expect(findAll('a')).to.have.length(1)

    expect(find('a').href).to.equal('http://lmgtfy.com/?q=ember+testing')
  })

  it('creates multiple links', function() {
    this.set('text', 'https://google.com is way better than https://bing.com!')

    this.render(hbs`{{autolink text}}`)

    expect(findAll('a')).to.have.length(2)
  })
})
