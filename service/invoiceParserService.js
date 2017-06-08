/**
 * Created by arpit.gupta on 06-07-2017.
 */

const _ = require('lodash');
const    emptyStringConst = '',
    zeroSegmentConst = ' _ | ||_|',
oneSegmentConst = '     |  |',
twoSegmentConst = ' _  _||_ ',
threeSegmentConst = ' _  _| _|',
fourSegmentConst = '   |_|  |',
fiveSegmentConst = ' _ |_  _|',
sixSegmentConst =' _ |_ |_|',
sevenSegmentConst = ' _   |  |',
eightSegmentConst = ' _ |_||_|',
nineSegmentConst = ' _ |_| _|',
queryStringConst = '?',
illegalStringConst = ' ILLEGAL',
newLineConst = '\n';
class InvoiceParser {
    constructor() {
    }

    /**
     *
     * @param file
     */
    processFile(file) {
        const lines = file.split('\n'), // split file into lines
            length = lines.length, // calculate the total number of lines
            amount = _.floor(length / 4), // calculate the number of invoice numbers (4 lines per invoice number)
            numbers = []; // this will store our output numbers

        _.times(amount, (index) => {

            const position = index * 4, // we advance by 4 since we use 4 lines for each number
                invoiceNumber = lines[position].substr(0, 27) + lines[position + 1].substr(0, 27) + lines[position + 2].substr(0, 27); // our number is now represented as a one liner string

            // use our magic parse number helper to convert our string representation of a number
            numbers.push(InvoiceParser.parseNumber(invoiceNumber));

        });
        let data = emptyStringConst;
        _.each(numbers, (number) => {
            data += number + (_.includes(number, queryStringConst) ? illegalStringConst : emptyStringConst) + newLineConst;
        });
        return data;
    }

    /**
     *
     * @param number
     * @returns {string}
     */
    static parseNumber(number) {

        const digits = [];

        _.times(9, (index) => {

            // advance the position since we're using 3 chars per line per number
            const position = index * 3;

            // use our magic parse digit helper to convert our string representation of a digit
            digits[index] = InvoiceParser.parseDigit(number.substr(position, 3) + number.substr(position + 27, 3) + number.substr(position + 54, 3));

        });

        return digits.join(emptyStringConst);
    }

    /**
     *
     * @param digit
     * @returns {*}
     */
    static parseDigit(digit) {
        switch (digit) {
            case zeroSegmentConst:
                return 0;
            case oneSegmentConst:
                return 1;
            case twoSegmentConst:
                return 2;
            case threeSegmentConst:
                return 3;
            case fourSegmentConst:
                return 4;
            case fiveSegmentConst:
                return 5;
            case sixSegmentConst:
                return 6;
            case sevenSegmentConst:
                return 7;
            case eightSegmentConst:
                return 8;
            case nineSegmentConst:
                return 9;
            default:
                return queryStringConst;

        }

    }
}

const invoiceParser = new InvoiceParser();

module.exports = invoiceParser;