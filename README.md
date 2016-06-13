# react-key

> **NOTE** For higher order components, check the ``next`` branch, or simply install the package with
>
>     npm i --save react-key@next
>

Simple hotkeys mixin for React components.

    npm i --save react-key

```js
var React = require('react')
var hotkeys = require('react-key')

var Component = React.createClass({
  // Simply add the mixin and you will have
  // access to ``this.bindKey(combo, fn)``.
  mixins: [hotkeys],

  // ProTip(tm): Bind your keys in ``componentWillMount``.
  // They are automagically removed when the component is unmounted.
  componentWillMount: function () {
    // For ``combo`` any valid key combination for keyboardjs will work.
    // For ``fn`` any method will work. The method will receive no parameters.
    this.bindKey('b', this.beep)
  },
  // ...
  beep: function () {
    // Preferably dispatch an action
    // Also, preferably this is the same method as you use for the
    // actual buttons that perform the same function (if applicable)
    // ...
  }
})
```
