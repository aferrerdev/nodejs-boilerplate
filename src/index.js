import express from 'express';

// Routes
import authRouter from './routes/auth'
import expensesRoutes from './routes/expenses'

// Create Express Server
var app = express();

// Register routes
app.use('/auth', authRouter);
app.use('/expenses', expensesRoutes);
  
// Listen on port 3000
app.listen(3000);
