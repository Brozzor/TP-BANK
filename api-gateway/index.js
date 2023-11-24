import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import proxy from 'express-http-proxy';

import createProxy from './utils/createProxy.js';

const PORT = 3000 || process.env.PORT

const app = express();

app.use('/account', proxy('http://localhost:1337', { proxyReqPathResolver: createProxy('/account') }));
app.use('/customer', proxy('http://localhost:1338', { proxyReqPathResolver: createProxy('/customer') }));

app.listen(PORT, () => console.info('✅ http://localhost:3000'));