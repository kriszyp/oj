OJ = require '../oj'
require '../core/object'
require '../dom/nodeFactory'
input = require '../dom/input'

inputName = 'range'

inpt = (options, owner = OJ.body) ->

  defaults =
    props:
      type: inputName
      min: 0
      max: 100
      value: 50
      step: 1
    styles: {}
    events:
      click: OJ.noop

  OJ.extend defaults, options, true

  ret = input defaults, owner
  ret

OJ.inputs.register inputName, inpt
module.exports = inpt
