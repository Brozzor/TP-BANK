module.exports = {
    get: async (req, res) => {
        try {
            const accounts = await Account.find();
            return res.json(accounts);
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    },
    create: async (req, res) => {
        try {
            await Account.create({
                customer: req.body.customer
            });
            return res.sendStatus(201);
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    },
    update: async (req, res) => {
        try {
            await Account.update(req.params.id, req.body);
            return res.sendStatus(200);
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    },
    detail: async (req, res) => {
        try {
            const account = await Account.findOne(req.params.id);
            if (!account) return res.sendStatus(404);

            return res.json(account);
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    },
    send: async (req, res) => {
        if (!req.body.amount) return res.status(400).json({ error: 'amount is required' });
        const from = await Account.findOne(req.body.from);
        if (!from) return res.status(404).json({ error: 'from account not found' });
        if (from.customer !== req.customer.id) return res.sendStatus(403);
        const to = await Account.findOne(req.body.to);
        if (!to) return res.status(404).json({ error: 'to account not found' });
        if (from.balance < req.body.amount) return res.status(400).json({ error: 'insufficient balance' });
        try {
            await Account.update(from.id, { balance: from.balance - req.body.amount });
            await Account.update(to.id, { balance: to.balance + req.body.amount });
            return res.sendStatus(200);
        } catch (err) {
            console.error(err);
            return res.sendStatus(500);
        }
    }
}