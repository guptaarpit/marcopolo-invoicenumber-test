/**
 * Created by arpit.gupta on 06-08-2017.
 */
const expect = require('chai').expect;
const fs = require('fs');
const marcoPoloService = require('./marcoPoloService');
const invoiceParserService = require('./invoiceParserService');

describe('marcopolo', () => {
    describe('getResult', () => {
        it('has expected output', () => {
            const marcoPoloFirst = marcoPoloService(30);
            expect(marcoPoloFirst.getResult().toString()).to.include("1,2,3,marco,5,6,polo,marco,9,10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30");

        });

        it('should marcoPolo on lac', () => {
            const marcoPoloFirst = marcoPoloService(100000);
            expect(marcoPoloFirst.getResult().length).to.equal(100);

        });
        it('should marcopolo on 100', () => {
            const marcoPoloFirst = marcoPoloService(100);
            expect(marcoPoloFirst.getResult().length).to.equal(1);

        });
    });
});

describe('invoiceparser', () => {
    describe('processFile', () => {
        it('Process File has expected output', () => {
            return fs.readFile(`${__dirname}/input_user_story_1.txt`, (err, data) => {
                invoiceParserService.processFile(data.toString(), "output_12", undefined).then((data) => {
                    expect(data).to.include("6001431");
                });
            });
        });
    });

    describe('readFile', () => {
        it('File Read has expected output', () => {
            return invoiceParserService.readFile("output_1234", undefined).then((data) => {
                expect(data).to.include("6001431");
            });
        });
    });
});