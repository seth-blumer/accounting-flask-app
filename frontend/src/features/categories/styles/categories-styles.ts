import React from "react";

export const styles: { [key: string]: React.CSSProperties } = {
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
};