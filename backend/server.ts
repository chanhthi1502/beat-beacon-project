import express from 'express';
import bodyParser from 'body-parser';

import { globalUtil } from './options.global';
import routers from './lib/api/web';

const app = express();
const PORT = process.env.PORT || globalUtil.port;

// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(routers)

// Start server
async function startServer() {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

startServer().catch(error => {
	console.error('Error starting server:', error);
	process.exit(1);
})