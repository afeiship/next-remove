var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-remove');

describe('next-remove', function () {

  it('remove pure items', function () {
    var ary1 = [1,2,3,4,5,6];
    var ary2 = ['a','b','c','d','e'];

    assert.equal(nx.remove(ary1,[1]).join(''),'23456');
    assert.equal(nx.remove(ary2,['d','e']).join(''),'abc');
  });


  it('remove object items', function () {
    var ary1 = [
      {
        key:1,
        value:'value1'
      },
      {
        key:2,
        value:'value2'
      },
      {
        key:3,
        value:'value3'
      },
      {
        key:4,
        value:'value4'
      }
    ];

    var ary2 = [
      {
        key:1,
        value:'value1'
      },
      {
        key:2,
        value:'value2'
      },
      {
        key:3,
        value:'value3'
      },
      {
        key:4,
        value:'value4'
      }
    ];

    var result1 = nx.remove( ary1,[ ary1[0],ary1[1] ] );
    var result2 = nx.remove( ary2,[ ary2[0] ] );

    assert.equal( (result1.map(item=>item.key)).join(''),'34' );
    assert.equal( (result2.map(item=>item.key)).join(''),'234' );
  });


  it('remove pure items use callback', function () {
    var array = [1, 2, 3, 4];
    var evens = nx.remove(array, function(index, item ) {
      return item % 2 == 0;
    });

    assert.deepEqual(evens, [1,3]);
  });







});
