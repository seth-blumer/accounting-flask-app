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
};