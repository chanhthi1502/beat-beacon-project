import express, { Request, Response } from 'express';
import setupUserApi from './userApi';

const routers = express.Router();
const userApi = setupUserApi();
// Login route
routers.post('/login', (req: Request, res: Response) => { userApi.login(req, res) });
routers.post('/register', (req: Request, res: Response) => { userApi.register(req, res) });

export default routers;