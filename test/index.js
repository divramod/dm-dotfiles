var should = require('chai').should();
var index = require('../index').index;
var colors = require("colors");

// =========== [ dm-dotfiles TESTS ] ===========
describe('dm-dotfiles', function() {

    console.log("run dm-dotfiles tests".blue);

    // =========== [ help ] ===========
    it('job undefined', function* testUndefined() {
        process.env.dmnJob = "paskdjföalskdjflk";
        var result =
            yield index();
        result.job.should.equal("undefined");
        result.success.should.equal(true);
    });

    // =========== [ start ] ===========
    it('job start', function* testStart() {
        process.env.dmnJob = "start";
        var result =
            yield index();
        result.job.should.equal("start");
        result.success.should.equal(true);
    });

});
