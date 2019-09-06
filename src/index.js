import express from 'express';

// Routes
import authRouter from './routes/auth.routes'
import expensesRoutes from './routes/expenses.routes'
import mongoose from 'mongoose';

// Create Express Server
var app = express();

// Register routes
app.use('/auth', authRouter);
app.use('/expenses', expensesRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/database', { useNewUrlParser: true })
    .then(() => {
        console.log('Database connection successful')
    })
    .catch(err => {
        console.error('Database connection error')
    })


// Listen on port 3000
app.listen(3000);
