var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('test1 sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("test1");
        result.should.equal("test1");
    });

    // =========== [ start ] ===========
    it('error: should ...', function error() {
        var result = require('./../index.js').start("test1");
        result.should.equal("falsetest1");
    });

});
