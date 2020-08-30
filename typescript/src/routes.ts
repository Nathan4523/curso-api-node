import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'nicolas@gotec.com', 
        password: '12345',
        techs: ['NodeJS', 'ReactJS', 'React Native', { title: 'Javascript', experience: 100 }]
    });
    console.log(user.name);
    return response.json({ message: user });
}