var keyboard = require('keyboardjs')
import React from 'react'

// The HOC
// TODO Docs
const hotkey = (ComposedComponent) => {
  return class HotkeyedComponent extends React.Component {
    constructor (props) {
      super(props)
      this.keyBindings = []
    }
    bindKey (combo, fn) {
      keyboard.on(combo, (e) => {
        // We don't want to trigger hotkeys in input fields.
        if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) === -1) fn()
      })
      this.keyBindings.push(combo)
    }
    componentWillUnmount () {
      this.keyBindings.forEach((combo) => keyboard.unbind(combo))
    }
    render () {
      return <ComposedComponent {...this.props} bindKey={this.bindKey.bind(this)} />
    }
  }
}
export default hotkey

// The mixin
// TODO Docs
export const mixin = {
  keyBindings: [],
  bindKey: function (combo, fn) {
    this.keyBindings.push(keyboard.on(combo, e => {
      // We don't want to trigger hotkeys in input fields.
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) === -1) fn()
    }))
  },
  componentWillUnmount: () => this.keyBindings.forEach(binding => binding.clear())
}
