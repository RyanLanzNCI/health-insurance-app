var assert = require('assert');
var {calculate} = require("../modules/insuranceCalculator")

//Tests for ages 18-25
describe('insuranceCalculator', function() {
    describe('Creates a base quote for all ages between 18 - 25', function() {
        it('calculate a quote based on lowest age: 18-25', function() {
            let age = 20;
            let answers = {q1: false, q2:1 , q3: false, q4: 2, q5: false};
            assert.equal(calculate(age,answers), 200);
        });
    });
});

//Tests for ages 26-40
describe('insuranceCalculator', function() {
    describe('Calculates base quote for ages 26-40', function() {
        it('calculate a base quote for age 30', function() {
            let age = 30;
            let answers = {q1: false, q2: 3, q3: false, q4: 3, q5: false}; 
            assert.equal(calculate(age, answers), 130); 
        });
    });
});

//Tests for 40+
describe('insuranceCalculator', function() {
    describe('Calculates base quote for ages above 40', function() {
        it('calculate a base quote for age 45', function() {
            let age = 45;
            let answers = {q1: false, q2: 3, q3: false, q4: 3, q5: false}; 
            assert.equal(calculate(age, answers), 170); 
        });
    });
});

