'use strict';

//var jest = require('jest');

jest.dontMock('../scripts/utils');

describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var sum = require('../scripts/utils');
        expect(sum(1, 2)).toBe(3);
    });
});
