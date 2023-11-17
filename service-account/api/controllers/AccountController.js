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
            await Account.create(req.body);
            return res.sendStatus(201);
        } catch (err) {
            console.err(err);
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
    }
}