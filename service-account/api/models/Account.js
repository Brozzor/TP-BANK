module.exports = {
    attributes: {
        customerID: {
            model: 'customer',
            required: true
        },
        balance: {
            type: 'number',
            defaultsTo: 0
        },
        type: {
            type: 'string',
            isIn: ['current', 'savings'],
            defaultsTo: 'current'
        }
    }
}