// Hooks
import { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// Functions
import { getTransactionsAndCategories } from '../../services/api/transactions-and-categories/get-all-data';
import { getTotalRevenuesAndExpenses } from "./functions/getTotalRevenuesAndExpenses";
import { logoutInitiate } from '../../redux/actions';

// External components
import Button from '../../components/buttons/Button';
import Transactions from '../transactions/Transactions';
import Categories from '../categories/Categories';
import IncomeStatement from '../income-statement/IncomeStatement';


// Types
import { Transaction } from '../../types/Transaction';
import { Category } from '../../types/Category';

// Styles
import { styles } from './styles/dashboard-styles';

const Dashboard = () => {
    // For the 3 possible views in the dashboard component
    const [activeView, setActiveView] = useState<'transactions' | 'categories' | 'income'>('transactions');

    // For the list of categories; this is being fetched in the Dashboard component rather then just Categories component because 
    // it is also used by the Transactions component.
    const [categories, setCategories] = useState<Category[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // For dispatching the logout action
    const dispatch = useDispatch();

    // Fetch categories + transactions when the component mounts
    useEffect(() => {
        const fetchTransactionsAndCategories = async () => {
            try {
                const data = await getTransactionsAndCategories(); // Call the imported function

                setTransactions(data.transactions); // Set the transactions state
                setCategories(data.categories); // Set the categories state directly
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchTransactionsAndCategories();
    }, []);

    // Memoize revenues and expenses to prevent recalculating on net income on every render to use on income statement;
    // at scale (if there are a lot of revenues and expenses) this would sow performance of app
    const { revenues, expenses } = useMemo(() => getTotalRevenuesAndExpenses(transactions), [transactions]);

    return (
        <div style={styles.dashboard}>
            <div style={styles.header}>
                <h1 style={styles.title}>SlowBooks</h1>
                <Button
                    onClick={() => dispatch(logoutInitiate())}
                    text="Sign Out"
                    padding="8px 16px"
                    backgroundColor="#f0f0f0"
                    color="#333"
                />
            </div>
            <div style={styles.navigation}>
                {/* TODO: Implement Button.tsx and map after creating an external file that holds all tabs, as this may change */}
                <button
                    style={activeView === 'transactions' ? { ...styles.navButton, ...styles.activeNavButton } : styles.navButton}
                    onClick={() => setActiveView('transactions')}
                >
                    Transactions
                </button>
                <button
                    style={activeView === 'categories' ? { ...styles.navButton, ...styles.activeNavButton } : styles.navButton}
                    onClick={() => setActiveView('categories')}
                >
                    Categories
                </button>
                <button
                    style={activeView === 'income' ? { ...styles.navButton, ...styles.activeNavButton } : styles.navButton}
                    onClick={() => setActiveView('income')}
                >
                    Income Statement
                </button>
            </div>

            {activeView === 'transactions' && (
                <Transactions categories={categories} transactions={transactions} setTransactions={setTransactions} />
            )}

            {activeView === 'categories' && (
                <Categories categories={categories} setCategories={setCategories} />
            )}

            {activeView === 'income' && (
                <IncomeStatement revenues={revenues} expenses={expenses} />
            )}
        </div>
    );
}

export default Dashboard;
