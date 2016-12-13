# Ember-cli-rison

Include `rison` in an ember-cli app.

When the addon is installed, it will add rison as a bower dependency.

## Usage

### Computed Property Macros

Ships with the following computed property macros: `risonEncode`, `risonDecode`.

```javascript
import Ember from 'ember';
import risonEncode from 'ember-cli-rison/computeds/rison-encode';

export default Ember.Component.extend({
  encoded: risonEncode('value')
});
```

### Handlebars Helpers

```hbs
{{rison-encode value}} {{!-- encode value in RISON --}}
{{rison-decode value}} {{!-- decode RISON value --}}
```

### Helpers in components
import { risonEncode } 


### ES6 Rison

This addon provides the ability to import rison as an ES6 module.

```javascript
import Ember from 'ember';
import { risonEncode } from 'ember-cli-rison/helpers/rison-encode';
import { risonDecode, safeRisonDecode } from 'ember-cli-rison/helpers/rison-decode';

export default Ember.Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('decoded', safeRisonDecode(this.get('encoded')));
  },

  actions: {
    update(value) {
      this.attrs.update(risonEncode(value));
    }
  }
});
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-rison`
* `npm install`
* `bower install`

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
