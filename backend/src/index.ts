import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// BASE GET
app.get('/', (req: Request, res: Response) => {
	res.send('GET the base request');
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});