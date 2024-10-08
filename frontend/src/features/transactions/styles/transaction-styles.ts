import React from "react";

export const styles: { [key: string]: React.CSSProperties } = {
    content: {
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
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
    addTransactionSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
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
};
