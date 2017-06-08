/**
 * Created by arpit.gupta on 06-07-2017.
 */
const environmentConst = 'env',
    devEnvironmentConst = 'development'
module.exports = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get(environmentConst) === devEnvironmentConst ? err : {};

    // render the error page
    res.status(err.status || 500);
};