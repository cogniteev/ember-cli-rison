# Ember-cli-rison

Include `rison` in an ember-cli app.

This addon uses [Nanonid/rison](https://github.com/Nanonid/rison) as its NPM rison dependency.

## Usage

### Computed Property Macros

Ships with the following computed property macros: `risonEncode`, `risonDecode`.

```javascript
import Component from '@ember/component';
import risonEncode from 'ember-cli-rison/computeds/rison-encode';

export default Component.extend({
  encoded: risonEncode('value')
});
```

### Handlebars Helpers

```hbs
{{rison-encode value}} {{!-- encode value in RISON --}}
{{rison-decode value}} {{!-- decode RISON value --}}
```

### Helpers in components

```javascript
import Component from '@ember/component';
import { risonEncode } from 'ember-cli-rison/helpers/rison-encode';
import { risonDecode, safeRisonDecode } from 'ember-cli-rison/helpers/rison-decode';

export default Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('decoded', safeRisonDecode(this.get('encoded')));
  },

  actions: {
    update(value) {
      this.get('update')(risonEncode(value));
    }
  }
});
```

### ES6 Rison

This addon provides the ability to import rison as an ES6 module.

```javascript
import rison from 'rison';
```


## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-rison`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
