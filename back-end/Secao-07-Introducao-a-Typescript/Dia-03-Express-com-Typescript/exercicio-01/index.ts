import express from 'express';
import userRouter from './src/routes/user.routes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'xablau' });
});

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});