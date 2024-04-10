var assert = require('assert');
var insuranceCalculator = require("../modules/insuranceCalculator")

describe('insuranceCalculator', function() {
    describe('Creates a base quote for all ages between 18 - 25', function() {
        it('calculate a quote based on lowest age: 18-25', function() {
            let age = 20;
            let answers = {q1: false, q2:1 , q3: false, q4: 2, q5: false};
            assert.equal(insuranceCalculator(age,answers), 150);
        });
    });
});