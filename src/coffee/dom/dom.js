// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    OJ.register('dom', function(el, parent) {
      var enabled, isControlStillValid;
      if (parent == null) {
        parent = OJ.body;
      }
      'use strict';
      enabled = true;
      el.add('isValid', function() {
        return el && el.el instanceof HTMLElement;
      });
      isControlStillValid = function() {
        var valid;
        valid = false === OJ.is.nullOrEmpty(el) && el.isValid();
        if (false === valid) {
          OJ.error.throwException('el is null. Event bindings may not have been GCd.');
        }
        return valid;
      };
      el.add('addClass', function(name) {
        if (isControlStillValid()) {
          el.$.addClass(name);
        }
        return el;
      });
      el.add('bind', function(eventName, event) {
        if (isControlStillValid()) {
          el.$.on(eventName, event);
        }
        return el;
      });
      el.add('on', function(eventName, event) {
        if (isControlStillValid()) {
          el.$.on(eventName, event);
        }
        return el;
      });
      el.add('off', function(eventName, event) {
        if (isControlStillValid()) {
          el.$.off(eventName, event);
        }
        return el;
      });
      el.add('keyboard', function(keys, event) {
        if (isControlStillValid()) {
          Mousetrap.bind(keys, el[event]);
        }
        return el;
      });
      el.add('disable', function() {
        if (isControlStillValid()) {
          enabled = false;
          el.attr('disabled', 'disabled');
          el.addClass('disabled', 'disabled');
        }
        return el;
      });
      el.add('empty', function() {
        if (isControlStillValid()) {
          el.$.empty();
        }
        return el;
      });
      el.add('enable', function() {
        if (isControlStillValid()) {
          enabled = true;
          el.removeAttr('disabled');
          el.removeClass('disabled');
        }
        return el;
      });
      el.add('getId', function() {
        var id;
        if (isControlStillValid()) {
          id = el[0].id;
        }
        return id;
      });
      el.add('hide', function() {
        if (isControlStillValid()) {
          el.css('display', 'none');
        }
        return el;
      });
      el.add('length', function() {
        var len;
        len = 0;
        if (isControlStillValid()) {
          len = OJ.to.number(el.$.length);
        }
        return len;
      });
      el.add('parent', parent);
      el.add('remove', function() {
        if (el && el.$) {
          el.$.remove();
          el = null;
        }
        return null;
      });
      el.add('removeClass', function(name) {
        if (isControlStillValid()) {
          el.$.removeClass(name);
        }
        return el;
      });
      el.add('removeProp', function(name) {
        if (isControlStillValid()) {
          el.$.removeProp(name);
        }
        return el;
      });
      el.add('removeAttr', function(name) {
        if (isControlStillValid()) {
          el.$.removeAttr(name);
        }
        return el;
      });
      el.add('required', function(truthy, addLabel) {
        if (isControlStillValid()) {
          switch (OJ.to.bool(truthy)) {
            case true:
              el.attr('required', true);
              el.addClass('required');
              break;
            case false:
              el.removeProp('required');
              el.removeClass('required');
          }
        }
        return el;
      });
      el.add('root', el.root || parent);
      el.add('show', function() {
        if (isControlStillValid()) {
          el.$.show();
        }
        return el;
      });
      el.add('toggle', function() {
        if (isControlStillValid()) {
          el.$.toggle();
        }
        return el;
      });
      el.add('toggleEnable', function() {
        if (isControlStillValid()) {
          if (enabled) {
            el.disable();
          } else {
            el.enable();
          }
        }
        return el;
      });
      el.add('trigger', function(eventName, eventOpts) {
        if (isControlStillValid()) {
          el.$.trigger(eventName, eventOpts);
        }
        return el;
      });
      el.add('unbind', function(eventName, event) {
        if (isControlStillValid()) {
          el.$.off(eventName, event);
        }
        return el;
      });
      el.add('val', function(value) {
        if (isControlStillValid()) {
          if (arguments.length === 1 && false === OJ.isNullOrUndefined(value)) {
            el.$.val(value);
            return el;
          } else {
            return OJ.to.string(el.$.val());
          }
        }
      });
      el.add('valueOf', function() {
        return el.val();
      });
      el.add('toString', function() {
        return el.val();
      });
      return el;
    });
    OJ.register('isElementInDom', function(elementId) {
      return false === OJ.is.nullOrEmpty(OJ.getElement(elementId));
    });
    OJ.register('getElement', function(id) {
      if (typeof document !== 'undefined') {
        return document.getElementById(id);
      } else {
        return void 0;
      }
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=dom.map
