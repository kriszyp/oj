(function() {
  var __slice = [].slice;

  (function(OJ) {
    'use strict';    OJ.nodes.register('select', function(options, owner, calledFromFactory) {
      var change, click, defaults, hasEmpty, newChange, newClick, ret, syncValue, value, values;

      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          selected: '',
          multiple: false
        },
        styles: {},
        values: [],
        events: {
          click: _.noop,
          change: _.noop
        }
      };
      OJ.extend(defaults, options);
      value = '';
      values = [];
      hasEmpty = false;
      syncValue = function() {
        return value = ret.val();
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
      ret = OJ.element('select', defaults.props, defaults.styles, defaults.events);
      ret.add('selectedData', function(propName) {
        var dataset;

        ret = '';
        if (ret.$.find('option:selected') && ret.$.find('option:selected')[0]) {
          dataset = ret.$.find('option:selected')[0].dataset;
          if (dataset) {
            ret = dataset[propName];
          }
        }
        return ret;
      });
      ret.add('selectedText', function() {
        return ret.$.find('option:selected').text();
      });
      ret.add('selectedVal', function() {
        value = ret.val();
        return value;
      });
      ret.add('addOption', function(value, text, selected, disabled) {
        var add, isEmpty, option, val;

        if (selected == null) {
          selected = false;
        }
        if (disabled == null) {
          disabled = false;
        }
        isEmpty = _.isEmpty(value);
        add = false;
        if (isEmpty && false === hasEmpty) {
          hasEmpty = true;
          add = true;
        }
        if (false === add && false === isEmpty) {
          add = true;
        }
        if (add) {
          val = {
            props: {
              value: value,
              text: text,
              selected: selected,
              disabled: disabled
            }
          };
          option = ret.option(val);
          return option;
        }
      });
      ret.add('addOptions', function(options) {
        values = _.union(values, options);
        OJ.each(options, (function(val) {
          value = ret.addOption(val);
          values.push(value);
        }), false);
        return values;
      });
      ret.add('resetOptions', function(values) {
        ret.empty();
        values = values;
        return ret.addOptions(values);
      });
      OJ.tryExec(ojInternal.onComplete, ret.selectedVal());
      ret;
      ret.add('removeOption', function(valueToRemove) {
        var i, selectControl;

        values.splice(values.indexOf(valueToRemove), 1);
        selectControl = ret[0];
        i = 0;
        while (i < selectControl.length) {
          if (selectControl.options[i].value === valueToRemove) {
            selectControl.remove(i);
          }
          i++;
        }
      });
      if (owner) {
        owner.append(ret);
      }
      if (defaults.values.length > 0) {
        ret.addOptions(defaults.values);
      }
      if (false === calledFromFactory) {
        OJ.nodes.factory(ret, owner);
      }
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);
//@ sourceMappingURL=select.js.map