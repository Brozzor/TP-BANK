const randomstring = require('randomstring');
module.exports = {
    attributes: {
        customer: {
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
        },
        iban: {
            type: 'string',
            unique: true
        },
    },
    beforeCreate: async (account, cb) => {
        account.iban = "FR"+ randomstring.generate({
            charset: ['numeric'],
            length: 10,
          })
        cb();
    },

}