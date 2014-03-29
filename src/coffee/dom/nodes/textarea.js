(function() {
  var __slice = [].slice;

  (function(OJ) {
    'use strict';    OJ.nodes.register('textarea', function(options, owner, calledFromFactory) {
      var change, click, defaults, newChange, newClick, ret, syncValue, value;

      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          name: "",
          placeholder: "",
          value: "",
          text: "",
          maxlength: "",
          autofocus: false,
          isRequired: false,
          rows: 3,
          cols: 25,
          disabled: false,
          readonly: false,
          form: "",
          wrap: ""
        },
        styles: {},
        events: {
          click: _.noop
        }
      };
      OJ.extend(defaults, options);
      value = defaults.props.value;
      syncValue = function() {
        switch (defaults.props.type) {
          case OJ.enums.inputTypes.checkbox:
            return value = ret.$.is(":checked");
          case OJ.enums.inputTypes.radio:
            return value = ret.$.find(":checked").val();
          default:
            return value = ret.val();
        }
      };
      if (defaults.events.click !== _.noop) {
        click = defaults.events.click;
        newClick = function() {
          var event, retval;

          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          retval = click.apply(null, event);
          syncValue();
          return retval;
        };
        defaults.events.click = newClick;
      }
      if (defaults.events.change !== _.noop) {
        change = defaults.events.change;
        newChange = function() {
          var event, retval;

          event = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          retval = change.apply(null, event);
          syncValue();
          return retval;
        };
        defaults.events.change = newChange;
      }
      ret = OJ.element('textarea', defaults.props, defaults.styles, defaults.events);
      if (owner) {
        owner.append(ret);
      }
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);
//@ sourceMappingURL=textarea.js.map