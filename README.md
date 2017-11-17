# ember-autolinker

[![Build Status](https://travis-ci.org/adfinis-sygroup/ember-autolinker.svg?branch=master)](https://travis-ci.org/adfinis-sygroup/ember-autolinker)
[![codecov](https://codecov.io/gh/adfinis-sygroup/ember-autolinker/branch/master/graph/badge.svg)](https://codecov.io/gh/adfinis-sygroup/ember-autolinker)

This addon wraps [Autolinker.js](https://github.com/gregjacobs/Autolinker.js) for use in Ember apps.

## Usage

```Handlebars
{{autolink 'Your text containing URLs like google.com or http://www.something-else.xyz?whatever=you#like'}}
```

## Options

If your text contains HTML, you can disable HTML safety by passing `true` as second argument:

```Handlebars
{{autolink "fancy html<br>with <strong>emberjs.com</strong>" true}}
```

## Installation

* `git clone git@github.com:adfinis-sygroup/ember-autolinker.git`
* `cd ember-autolinker`
* `yarn`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
