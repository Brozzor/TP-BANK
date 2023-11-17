const crypto = require('crypto');
module.exports = {
    attributes: {
        firstname: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
            isEmail: true
        },
        password: {
            type: 'string',
            required: true
        },
        token : {
            type: 'string'
        },
        status: {
            type: 'string',
            isIn: ['CUSTOMER', 'ADMINISTRATOR'],
            defaultsTo: 'CUSTOMER'
        },
    },
    comparePassword: function (password, customerPassword) {
        let hash = crypto.createHash('sha256').update(password).digest('base64');
        if (hash == customerPassword) return true
        return false
    },

    beforeUpdate: function (customer, cb) {
        Customer.checkPassword(customer);
        cb();
    },

    beforeCreate: function (customer, cb) {
        Customer.checkPassword(customer);
        cb();
    },

    checkPassword : (customer) => {
        if (customer.password) {
            customer.password = crypto.createHash('sha256').update(customer.password).digest('base64');
        }else{
            delete user.password;
        }
    },
    
        
}