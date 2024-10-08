import axiosInstance from '../../axiosInstance';

// Function to get both transactions and categories
export const getTransactionsAndCategories = async () => {
    const response = await axiosInstance.get('/transactions-and-categories');
    return response.data;
};
