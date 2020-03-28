/*!
 * name: @feizheng/next-remove
 * description: Remove a item from array based on next.
 * url: https://github.com/afeiship/next-remove
 * version: 1.0.0
 * date: 2020-03-28 13:37:54
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var FUNCTION = 'function';

  //todo: Polyfill -> Array.prototype.indexOf(el)

  nx.remove = function(inArray, inTarget) {
    var index, length;
    var idx;

    if (typeof inTarget === FUNCTION) {
      length = inArray.length;
      for (index = 0; index < length; index++) {
        if (inTarget.call(inArray, index, inArray[index], inArray)) {
          inArray.splice(index, 1);
          length--;
          index--;
        }
      }
    } else {
      length = inTarget.length;
      for (index = 0; index < length; index++) {
        value = inTarget[index];
        idx = inArray.indexOf(value);
        inArray.splice(idx, 1);
      }
    }

    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.remove;
  }
})();

//# sourceMappingURL=next-remove.js.map
