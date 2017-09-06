(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  //todo: Polyfill -> Array.prototype.indexOf(el)

  nx.remove = function(inArray,inItems){
    var length = inItems.length;
    for (var index = 0; index < length; index++) {
      var value = inItems[index];
      var idx = inArray.indexOf(value);
      inArray.splice(idx, 1);
    }
    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.remove;
  }

}());
