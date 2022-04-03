import express from 'express';
import { landing } from './views/landing';
import { purchase } from './views/purchase';

const app = express();

app.get('*/purchase', purchase);
app.get('*/', landing);

app.listen(3000, () => {
  console.log('listening on port 3000');
});