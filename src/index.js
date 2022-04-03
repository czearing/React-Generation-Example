import express from 'express';
import { landing } from './views/landing.js';
import { purchase } from './views/purchase.js';

const app = express();

app.get('*/purchase', purchase);
app.get('*/', landing);

app.listen(3000, () => {
  console.log('listening on port 3000');
});