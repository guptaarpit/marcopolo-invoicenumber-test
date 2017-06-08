/**
 * Created by arpit.gupta on 06-07-2017.
 */

const fourConst = 4,
    sevenConst = 7,
    zeroConst = 0,
    marcoPoloConst = "marcopolo",
    marcoConst = "marco",
    poloConst = "polo",
    commaSeparator = ",";
module.exports = (n) => {
    return {
        getResult: () => {
            const result = [], x = n > 1000 ? n / 1000 : 1;
            let y = 1;

            for (let i = 1; i <= x; i++) {
                result.push(processThousand(y, i * 1000, n));
                y = 1 + (i * 1000);
            }
            return result;
        }
    }
};

const isMarcoPolo = (number) => {
        return number % fourConst === zeroConst && number % sevenConst === zeroConst;
    },
    isMarco = (number) => {
        return number % fourConst === zeroConst;
    },
    isPolo = (number) => {
        return number % sevenConst === zeroConst;
    },
    checkNumber = (number) => {
        return isMarcoPolo(number) ? marcoPoloConst : isMarco(number) ? marcoConst : isPolo(number) ? poloConst : number;
    },
    processThousand = (x, y, n) => {
        let result = [];
        while (x <= y && x <= n) {
            result.push(checkNumber(x));
            x++;
        }

        return result.join(commaSeparator);
    };