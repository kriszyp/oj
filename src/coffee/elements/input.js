﻿// Generated by CoffeeScript 1.7.1
(function() {
  var __slice = [].slice;

  (function(OJ) {
    'use strict';
    var nodeName;
    nodeName = 'input';
    OJ.nodes.register(nodeName, function(options, owner, calledFromFactory) {
      var defaults, newChange, newClick, newFocusout, oldChange, oldClick, oldFocusout, ret, syncValue, thisType;
      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          type: 'text',
          value: ''
        },
        styles: {},
        events: {
          click: _.noop,
          change: _.noop,
          focusout: _.noop
        }
      };
      OJ.extend(defaults, options, true);
      if (!defaults.props.type || !OJ.enums.inputTypes[defaults.props.type]) {
        throw new Error('No matching input type for {' + defaults.props.type + '} could be found.');
      }
      thisType = OJ.enums.inputTypes[defaults.props.type];
      syncValue = function() {
        switch (thisType) {
          case OJ.enums.inputTypes.checkbox:
            ret.value = ret.$.is(':checked');
            break;
          case OJ.enums.inputTypes.radio:
            ret.value = ret.$.find(':checked').val();
            break;
          default:
            ret.value = ret.val();
        }
        return ret.value;
      };

      /* 
        Click binding. If the caller defined a click handler, 
        wrap it, sync the value of the input first, 
        then call the defined click handler with the latest value.
       */
      oldClick = defaults.events.click;
      if (oldClick && oldClick !== _.noop) {
        newClick = function() {
          var event;
          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          syncValue();
          return oldClick.apply(null, event);
        };
        defaults.events.click = newClick;
      }

      /* 
        Change binding. If the caller defined a change handler, 
        wrap it, sync the value of the input first, 
        then call the defined change handler with the latest value.
       */
      oldChange = defaults.events.change;
      if (oldChange && oldChange !== _.noop) {
        newChange = function() {
          var event;
          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          syncValue();
          return oldChange.apply(null, event);
        };
        defaults.events.change = newChange;
      }

      /* 
        On Focus Out binding. Always use the event to update the internal
        value of the control; and if the caller defined a focusout event,
        wrap it and invoke it with the latest value
       */
      oldFocusout = defaults.events.focusout;
      newFocusout = function() {
        var event;
        event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        syncValue();
        if (oldFocusout && oldFocusout !== _.noop) {
          return oldFocusout.apply(null, event);
        }
      };
      defaults.events.focusout = newFocusout;
      ret = OJ.element(nodeName, defaults.props, defaults.styles, defaults.events, defaults.text);
      ret.value = defaults.props.value;
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=input.js.map