import React from "react";

export const styles: { [key: string]: React.CSSProperties } = {
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
}