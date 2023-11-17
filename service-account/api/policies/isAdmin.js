module.exports = function (req, res, next){
    if(req.customer.status === 'ADMINISTRATOR'){
        return next()
    }else{
        return res.sendStatus(403)
    }
}