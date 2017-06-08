/**
 * Created by arpit.gupta on 06-07-2017.
 */

const service = require("../service/invoiceParserService");

module.exports = (req, res, next) => {
    let buf = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ buf += chunk });
    req.on('end', function() {
        req.rawBody = buf;
        res.send(service.processFile(req.rawBody));
    });
};