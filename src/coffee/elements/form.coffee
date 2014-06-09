# # form

((OJ)->
  'use strict'
  
  nodeName = 'form'
  
  OJ.nodes.register nodeName, (options, owner = OJ.body, calledFromFactory = false) ->
    
    defaults =
      props: 
        action: ''
        method: ''
        name: ''
      styles: {}
      events:
        click: OJ.noop
    
    OJ.extend defaults, options, true
    ret = OJ.element nodeName, defaults.props, defaults.styles, defaults.events, defaults.text
    
    ret.add 'validator', ret.$.validate(
      highlight: (element) ->
        $elm = $(element)
        $elm.attr 'OJ_invalid', '1'
        $elm.animate backgroundColor: 'red'
        return

      unhighlight: (element) ->
        $elm = $(element)
        if $elm.attr('OJ_invalid') is '1'
          $elm.css 'background-color', 'yellow'
          $elm.attr 'OJ_invalid', '0'
          setTimeout (->
              $elm.animate backgroundColor: 'transparent'
              return
          ), 500
        return
    )
      
    ret.add 'isFormValid', ->
      ret.$.valid() and (not ret.validator.invalidElements() or ret.validator.invalidElements().length is 0)
    
    
    
    if false is calledFromFactory then OJ.nodes.factory ret, owner

    ret

  return

) ((if typeof global isnt 'undefined' and global then global else ((if typeof window isnt 'undefined' then window else this)))).OJ

