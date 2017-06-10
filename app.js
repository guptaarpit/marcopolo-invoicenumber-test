const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
const marcoPolo = require('./controller/marcoPolo');
const {DecryptInvoice, RetrieveDecryptedInvoice} = require('./controller/invoiceParser');
const notFoundStatus = 'Not Found';

app.use('/marcopolo/:n', marcoPolo);
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.post('/invoiceparser', DecryptInvoice);
app.get('/invoiceparser/:filename', RetrieveDecryptedInvoice);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error(notFoundStatus);
  err.status = 404;
  next(err);
});

// error handler
app.use(errorHandler);
app.listen(3000);
module.exports = app;
