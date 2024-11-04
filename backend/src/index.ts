import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// BASE GET
app.get('/', (req: Request, res: Response) => {
	res.send('GET the base request');
});

// GET
app.get('/items', (req: Request, res: Response) => {
	res.send('Get all items');
});

// POST
app.post('/items', (req: Request, res: Response) => {
	const newItem = req.body;
	res.status(201).send(`Item created: ${JSON.stringify(newItem)}`);
});

// PUT
app.put('/items/:id', (req: Request, res: Response) => {
	const { id } = req.params;
	res.send(`Item with ID ${id} updated`);
});

// DELETE
app.delete('/items/:id', (req: Request, res: Response) => {
	const { id } = req.params;
	res.send(`Item with ID ${id} deleted`);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});