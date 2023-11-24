module.exports = {
    create : async (req, res) => {
        try {
            await Customer.create(req.body).fetch()
            return res.sendStatus(201)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    },
    me : async (req, res) => {
        return res.json({
            id: req.customer.id,
            firstname: req.customer.firstname,
            lastname: req.customer.lastname,
            email: req.customer.email,
            status: req.customer.status
        })
    },
    // admin only
    update : async (req, res) => {
        try {
            const customer = await Customer.update({id: req.params.id}, req.body).fetch()
            return res.json(customer)
        } catch (error) {
            return res.status(500).json({error: error.message})
        }
    },
}