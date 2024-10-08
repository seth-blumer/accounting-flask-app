import axiosInstance from '../../axiosInstance';
import { Transaction } from '../../../types/Transaction';

// Function to get all transactions
export const getTransactions = async () => {
    const response = await axiosInstance.get('/transactions');
    return response.data;  // Returns a list of transactions
};

// Function to add a new transaction
export const addTransaction = async (transactionData: Transaction) => {
    const response = await axiosInstance.post('/transactions/add', transactionData);
    return response.data;  // Returns the newly added transaction
};

// Function to delete a transaction
export const deleteTransaction = async (transactionId: number) => {
    const response = await axiosInstance.delete(`/transactions/${transactionId}`);
    return response.data;  // Returns success/failure message
};
