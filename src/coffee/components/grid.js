// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var className, nodeName;
    nodeName = 'x-grid';
    className = 'grid';
    OJ.components.members[nodeName] = className;
    OJ.components.register(className, function(options, owner) {
      var cmpnt, defaults, fillMissing, ret, rows, tiles;
      defaults = {
        props: {
          "class": 'grid'
        }
      };
      OJ.extend(defaults, options);
      cmpnt = OJ.component(defaults, owner, nodeName);
      ret = cmpnt.div();
      rows = [];
      tiles = OJ.array2D();
      fillMissing = function() {
        return tiles.each(function(rowNo, colNo, val) {
          var row;
          if (!val) {
            row = ret.row(rowNo);
            return row.tile(colNo, {});
          }
        });
      };
      ret.add('row', function(rowNo) {
        var nuRow;
        if (rowNo == null) {
          rowNo = rows.length - 1 || 1;
        }
        nuRow = rows[rowNo - 1];
        if (!nuRow) {
          while (rows.length < rowNo) {
            nuRow = ret.div({
              props: {
                "class": 'row'
              }
            });
            rows.push(nuRow);
          }
          nuRow.add('tile', function(colNo, opts) {
            var nuTile;
            nuTile = OJ.components.tile(opts, nuRow);
            tiles.set(rowNo, colNo, nuTile);
            return nuTile;
          });
        }
        return nuRow;
      });
      ret.add('tile', function(rowNo, colNo, opts) {
        var row, tile;
        if (!rowNo || rowNo < 1) {
          rowNo = 1;
        }
        if (!colNo || colNo < 1) {
          colNo = 1;
        }
        row = ret.row(rowNo);
        tile = tiles.get(rowNo, colNo);
        if (!tile) {
          tile = row.tile(colNo, opts);
        }
        fillMissing();
        return tile;
      });
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=grid.map
