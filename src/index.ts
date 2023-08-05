import express from 'express';
import cors from 'cors';
import { getMaidHentai } from './controllers/hentaiController';

const app = express();
const port: number = 5001;

app.use(express.json());
app.use(cors())

app.get("/hentai/maid", getMaidHentai);

app.listen(port, () => console.log(`App is listening on port ${port}`));

