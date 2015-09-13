var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('vimLinkSnippets sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("vimLinkSnippets");
        result.should.equal("vimLinkSnippets");
    });

    // =========== [ start ] ===========
    it('error: should ...', function error() {
        var result = require('./../index.js').start("vimLinkSnippets");
        result.should.equal("falsevimLinkSnippets");
    });

});
