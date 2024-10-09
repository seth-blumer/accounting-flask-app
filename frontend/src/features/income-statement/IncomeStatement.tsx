

// Types
import { Transaction } from "../../types/Transaction"

// Styles
import { styles } from "./styles/income-statement-styles";

type IncomeStatementProps = {
    revenues: number;
    expenses: number;
}

const IncomeStatement = ({ revenues, expenses }: IncomeStatementProps) => {
    const netIncome = revenues - expenses;

    return (
        <div style={styles.incomeStatement}>
            <h2 style={styles.sectionTitle}>Income Statement</h2>
            <div style={styles.statementItem}>
                <span>Total Revenue</span>
                <span style={styles.amount}>${revenues.toFixed(2)}</span>
            </div>
            <div style={styles.statementItem}>
                <span>Total Expenses</span>
                <span style={styles.amount}>${expenses.toFixed(2)}</span>
            </div>
            <div style={{ ...styles.statementItem, ...styles.netIncome }}>
                <span>Net Income</span>
                <span style={styles.amount}>${netIncome.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default IncomeStatement