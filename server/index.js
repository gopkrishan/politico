import '@babel/polyfill';
import express from 'express';
import officeRoutes from './routes/office.routes';
import partyRoutes from './routes/party.routes';
import authRoutes from './routes/auth.routes';
import voteRoutes from './routes/votes.routes';

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the politico API');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', officeRoutes);
app.use('/api/v1', partyRoutes);
app.use('/api/v1', voteRoutes);


// invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'check documentation on routes' });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App has started on ${port}`);
});

export default app;
