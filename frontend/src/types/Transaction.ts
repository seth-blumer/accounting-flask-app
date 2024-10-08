export type Transaction = {
    id: number;
    user_id: number;
    description: string;
    amount: number;
    category: string;
    type: 'revenue' | 'expense'; // Limited to 'revenue' or 'expense' for now
    date: string; // Assuming date format is a string, will adjust
};
