import express, { Request, Response } from 'express';
import setupUserApi from './userApi';

const routers = express.Router();

// Basic test route
routers.get('/', (req: Request, res: Response) => { res.send('Hello Beat Beacon Project Creators, the backend setup is working !') });

// Login route
const userApi = setupUserApi();
routers.post('/login', (req: Request, res: Response) => { userApi.login(req, res) });
routers.post('/register', (req: Request, res: Response) => { userApi.register(req, res) });

export default routers;