const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["212", [['2', 2], ['1', 1 ]]],
];

describe("Sample Tests", function(){
    for (const [text, expected] of examples) {
        it('text: ' + JSON.stringify(text), function() {
            assert.deepEqual(orderedCount(text), expected);
        });
    }
});