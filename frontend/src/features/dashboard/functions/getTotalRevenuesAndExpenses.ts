// Types
import { Transaction } from "../../../types/Transaction"

export const getTotalRevenuesAndExpenses = (transactions: Transaction[]) => {
    const revenues = transactions.filter(t => t.type === 'revenue').reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    return { revenues, expenses };
}