import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import proxy from 'express-http-proxy';

const PORT = 3000 || process.env.PORT

const app = express();

app.use('/account', proxy('http://localhost:1337/account'));
app.use('/customer', proxy('http://localhost:1338/customer'));

app.listen(PORT, () => console.info('✅ http://localhost:3000'));