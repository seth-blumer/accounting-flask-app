import React from "react";

export const styles: { [key: string]: React.CSSProperties } = {
    dashboard: {
        width: '500px',
        minHeight: '370px',
        maxHeight: 'min-content',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    title: {
        color: '#333',
        fontSize: '24px',
        margin: '0',
    },
    signOutButton: {
        padding: '8px 16px',
        fontSize: '14px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    navButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#fff',
        border: 'none',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        transition: 'border-color 0.3s',
    },
    activeNavButton: {
        borderBottom: '2px solid #2196F3',
        color: '#2196F3',
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
    },
    addTransactionSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
    },
    fileInput: {
        display: 'none',
    },
    addTransactionButton: {
        padding: '10px 10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    transactionsSection: {
        marginBottom: '20px',
    },
    transaction: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
    },
    transactionDescription: {
        flex: '1',
    },
    transactionAmount: {
        flex: '0 0 100px',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    transactionCategory: {
        flex: '0 0 100px',
        textAlign: 'right',
        color: '#757575',
    },
    addCategoryForm: {
        display: 'flex',
        marginBottom: '20px',
    },
    input: {
        flex: '1',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginRight: '10px',
    },
    addButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    categoriesList: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '10px',
    },
    categoryItem: {
        padding: '5px 10px',
        backgroundColor: '#e0e0e0',
        borderRadius: '15px',
        fontSize: '14px',
    },
    incomeStatement: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '5px',
    },
    sectionTitle: {
        color: '#333',
        fontSize: '20px',
        marginTop: '0',
        marginBottom: '15px',
    },
    statementItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    netIncome: {
        fontWeight: 'bold',
        fontSize: '18px',
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
    },
    amount: {
        fontWeight: 'bold',
    },
};