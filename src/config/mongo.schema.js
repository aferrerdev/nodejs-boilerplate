import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    recurrence: ['daily', 'monthly', 'yearly']
});

const depositSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true }
});