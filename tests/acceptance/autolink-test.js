import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import { findAll, fillIn } from 'ember-native-dom-helpers'

describe('Acceptance | autolink', function() {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can use autolink helper with escaping', function() {
    visit('/')

    andThen(() => {
      fillIn(
        '.example textarea',
        'Your text containing URLs like google.com or http://www.something-else.xyz?whatever=you#like'
      )
    })

    andThen(() => {
      expect(findAll('.example a')).to.have.length(2)
    })
  })

  it('can use autolink helper without escaping', function() {
    visit('/')

    andThen(() => {
      click('.example input')
    })

    andThen(() => {
      fillIn(
        '.example textarea',
        'fancy html<br><strong>with emberjs.com</strong>'
      )
    })

    andThen(() => {
      expect(findAll('.example strong')).to.have.length(1)
      expect(findAll('.example a')).to.have.length(1)
    })
  })
})
