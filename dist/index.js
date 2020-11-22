/*!
 * name: @jswork/next-remove
 * description: Remove a item from array based on next.
 * homepage: https://github.com/afeiship/next-remove
 * version: 1.0.0
 * date: 2020-11-22 13:50:49
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var FUNCTION = 'function';

  //todo: Polyfill -> Array.prototype.indexOf(el)
  nx.remove = function (inArray, inTarget) {
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
