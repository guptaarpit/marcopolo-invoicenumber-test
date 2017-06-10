/**
 * Created by arpit.gupta on 06-07-2017.
 */

const {readFile, processFile} = require("../service/invoiceParserService");
const _ = require('lodash');
const filePathSeparator = "/",
    fileName = "output_" + new Date().getTime(),
    fileNameConst = "filename",
    tempFileConst = "output_user_story_1";
class InvoiceParser {
    InvoiceParser() {

    }

    DecryptInvoice(req, res, next) {
        let buf = '';
        req.setEncoding('utf8');
        req.on('data', function (chunk) {
            buf += chunk
        });
        req.on('end', function () {
            req.rawBody = buf;
            processFile(req.rawBody, fileName, next).then(() => {
                res.writeHead(201, {'Location': req.protocol + '://' + req.get('host') + req.originalUrl + filePathSeparator + fileName});
                res.end();
            });
        });
    }

    RetrieveDecryptedInvoice(req, res, next) {
        readFile(_.get(req.params, fileNameConst, tempFileConst), next).then((data) => {
            res.send(data);
        });
    }
}

const invoiceParser = new InvoiceParser();
module.exports = invoiceParser;