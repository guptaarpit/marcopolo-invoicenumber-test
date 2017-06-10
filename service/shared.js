/**
 * Created by arpit.gupta on 06-10-2017.
 */
const {readFile, writeFile} = require('fs');
const path = require('path');
const filePathSeparator = "/",
    fileTypeConst = ".txt",
    utfFormatting = "utf8";
class Shared {
    Shared() {

    }

    readFileAsync(fileName, next) {
        return new Promise((resolve, reject) => {
            const completeFilePath = `${__dirname}${filePathSeparator}${fileName}${fileTypeConst}`;
            readFile(completeFilePath, utfFormatting, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        }).catch(
            (err) => {
                return next(err);
            });
    }

    writeFileAsync(fileName, data, next) {
        return new Promise((resolve, reject) => {
            const completeFilePath = `${__dirname}${filePathSeparator}${fileName}${fileTypeConst}`;
            writeFile(completeFilePath, data, utfFormatting, (err) => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        }).catch(
            (err) => {
                return next(err);
            });
    }
}

const shared = new Shared();

module.exports = shared;