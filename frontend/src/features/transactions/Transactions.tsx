// Hooks
import { useState } from 'react';

// Functions
import { addTransaction, deleteTransaction } from '../../services/api/transactions/transactions-crud';

// Types
import { Transaction } from '../../types/Transaction';
import { Category } from '../../types/Category';

// External components
import IconButton from '../../components/buttons/IconButton';
import Modal from '../modal/Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// UI components
import { styles } from './styles/transaction-styles';
type TransactionProps = {
    transactions: Transaction[];
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    categories: Category[];
};

const Transactions = ({ transactions, setTransactions, categories }: TransactionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

    const handleAddTransaction = async (newTransaction: Transaction) => {
        try {
            // Optimistic update - update local state before calling the API
            // TODO: Implement useQuery + add validation for the new transaction
            setTransactions([...transactions, newTransaction]);
            await addTransaction(newTransaction);
        } catch (error) {
            // TODO: Show an error message to the user on DOM
            console.error('Error adding transaction:', error);
        }
    };

    const handleDeleteTransaction = async (transactionId: number) => {
        try {
            // Optimistic update - update local state before calling the API
            // TODO: Implement useQuery + add validation for the new transaction
            setTransactions(transactions.filter(transaction => transaction.id !== transactionId));
            await deleteTransaction(transactionId); // Delete transaction
        } catch (error) {
            // TODO: Show an error message to the user on DOM
            console.error('Error deleting transaction:', error);
        }
    };

    return (
        <div style={styles.content}>
            <div style={styles.transactionsSection}>
                {/* Iterate through transactions and display them */}
                {transactions.map(transaction => (
                    // TODO: Create a separate component for the transaction item, which shows the description, amount, and category
                    <div key={transaction.id} style={styles.transaction}>
                        <span style={styles.transactionDescription}>{transaction.description}</span>
                        <span style={{
                            ...styles.transactionAmount,
                            color: transaction.type === 'revenue' ? '#5D6658' : '#F44336'
                        }}>
                            ${transaction.amount ? transaction.amount.toFixed(2) : '0.00'}
                        </span>
                        <span style={styles.transactionCategory}>{transaction.category}</span>

                        {/* Delete transaction button */}
                        <IconButton
                            icon={faTrash}
                            onClick={() => handleDeleteTransaction(transaction.id)}
                            backgroundColor="transparent" // Customize as needed
                            marginLeft="10px" // Customize as needed
                        />
                    </div>
                ))}
            </div>

            {/* Add transaction button */}
            <div style={styles.addTransactionSection}>
                {/* TODO: Implement Button component with props */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    style={styles.addTransactionButton}
                >
                    Add Transaction
                </button>
            </div>
            {/* Modal for adding a new transaction */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddTransaction}
                categories={categories} // Pass your categories as needed
            />
        </div>
    );
};

export default Transactions;
