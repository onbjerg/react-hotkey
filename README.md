# react-key

Simple hotkeys for React components.

    npm i --save react-hotkey


#### Higher-Order Component

```js
import React from 'react'
import hotkey from 'react-key'

class MyComponent extends React.Component {
  // Bind your keys in the constructor
  // They are automagically removed when the component
  // is unmounted.
  constructor (props) {
    super(props)

    // For ``combo`` any valid key combination for keyboardjs will work.
    // This also includes an array of combos.
    // For ``fn`` any method will work. The method will receive no parameters.
    props.bindKey('b', this.beep)
  }
  beep () {
    // Dispatch an action. Have a beer.
  }
  render () {
    // ...
  }
}


export default hotkey(MyComponent)
```

#### Mixin

```js
var React = require('react')
var hotkeys = require('react-key').mixin

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
