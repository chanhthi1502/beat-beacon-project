import { Request, Response } from 'express';

interface LoginRequestBody {
	userName: string;
	password: string;
}

const adminUser: LoginRequestBody = {
	userName: 'admin',
	password: 'admin'
};

export default function setupUserApi() {
	function login(req: Request, res: Response): Response{
		const { userName, password }: LoginRequestBody = req.body;
		if (userName === adminUser.userName && password === adminUser.password) {
			return res.status(200).json({ message: 'Logged in'});
		}
		return res.status(401).send('Not Implemented');
	}

	function register(req: Request, res: Response): Response {
		return res.status(401).send('Not Implemented');
	}

	return {
        login,
        register,
    };
};