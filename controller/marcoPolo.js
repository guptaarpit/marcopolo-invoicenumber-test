/**
 * Created by arpit.gupta on 06-07-2017.
 */

const service = require("../service/marcoPoloService");

module.exports = (req, res, next) => {
    res.send(service(req.params.n).getResult());
};