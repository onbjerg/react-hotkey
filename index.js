var keyboard = require('keyboardjs')

module.exports = {
  keyBindings: [],
  bindKey: function (combo, fn) {
    this.keyBindings.push(keyboard.on(combo, e => {
      // We don't want to trigger hotkeys in input fields.
      if (['INPUT', 'TEXTAREA'].indexOf(e.target.tagName) === -1) fn()
    }))
  },
  componentWillUnmount: () => this.keyBindings.forEach(binding => binding.clear())
}
