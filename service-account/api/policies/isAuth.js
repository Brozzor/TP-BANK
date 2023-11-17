module.exports = async function (req, res, next) {
    if (req.headers.authorization) {
        const bearer = req.headers.authorization.split(" ")[1];
        const customer = await Customer.findOne({ token: bearer });
        req.customer = customer;
        return next();
    } else {
        return res.sendStatus(401);
    }
}