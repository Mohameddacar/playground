import express from 'express';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '../../.env' });

const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send("Hellow World!");
});


app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Environment variables loaded:', process.env.OPENAI_API_KEY ? 'API key found' : 'API key not found');
});