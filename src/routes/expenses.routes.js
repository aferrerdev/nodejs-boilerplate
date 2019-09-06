import express from 'express';
import ExpensesController from '../controllers/expenses.controller';
let expensesRouter = express.Router();
let expenses = new ExpensesController();

expensesRouter.post('/', expenses.create);
expensesRouter.put('/', expenses.update);
expensesRouter.get('/view', expenses.view);
expensesRouter.get('/', expenses.list);

export default expensesRouter;