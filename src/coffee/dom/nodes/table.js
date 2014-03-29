(function() {
  (function(OJ) {
    'use strict';    OJ.nodes.register('table', function(options, owner, calledFromFactory) {
      var defaults, firstRow, ret, rows, tbody;

      if (owner == null) {
        owner = OJ.body;
      }
      if (calledFromFactory == null) {
        calledFromFactory = false;
      }
      defaults = {
        props: {
          cellpadding: 0,
          cellspacing: 0,
          align: "",
          width: "",
          cellalign: "left",
          cellvalign: "top"
        },
        styles: {},
        events: {
          click: _.noop
        },
        cells: {
          "class": "",
          align: '',
          'vertical-align': '',
          cellpadding: '',
          margin: ''
        },
        firstAlignRight: false,
        oddAlignRight: false
      };
      rows = [];
      OJ.extend(defaults, options);
      ret = OJ.element('table', defaults.props, defaults.styles, defaults.events);
      tbody = OJ.nodes.tbody({}, ret, false);
      firstRow = OJ.node.tr({}, tbody, false);
      rows.push(firstRow);
      ret.add('cell', function(row, col) {
        var cell;

        row = rows[row];
        if (!row) {
          while (rows.length < row) {
            row = OJ.node.tr({}, tbody, false);
            rows.push(row);
          }
        }
        cell = row.cells[col];
        if (!cell) {
          while (rows.cells.length < col) {
            cell = OJ.node.td({
              props: defaults.cells
            }, row, false);
          }
        }
        OJ.nodes.factory(cell, row);
        return cell;
      });
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
//@ sourceMappingURL=table.js.map