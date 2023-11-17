const randomstring = require('randomstring')
module.exports = {
    login: async (req, res) => {
        const customer = await Customer.findOne({email: req.body.email})

        try {
            if (!customer) throw new Error('Unauthorized')
            const isMatch = Customer.comparePassword(req.body.password, customer.password)
            if (!isMatch) throw new Error('Unauthorized')
            const token = randomstring.generate(75)
            await Customer.update({id: customer.id}, {token})
            return res.json(token)
        } catch (error) {
            return res.status(401).json({ error: error.message })
        }

    }
}