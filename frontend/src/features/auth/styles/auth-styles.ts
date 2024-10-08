import React from 'react';

export const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f0f2f5',
    },
    formContainer: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '100%',
        maxWidth: '400px',
    },
    tabContainer: {
        display: 'flex',
        marginBottom: '20px',
    },
    tab: {
        flex: 1,
        padding: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#65676b',
        borderBottom: '2px solid transparent',
    },
    activeTab: {
        color: '#1877f2',
        borderBottom: '2px solid #1877f2',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
    },
    input: {
        marginBottom: '15px',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #dddfe2',
    },
    button: {
        backgroundColor: '#1877f2',
        color: '#ffffff',
        padding: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    terms: {
        fontSize: '12px',
        color: '#65676b',
        textAlign: 'center',
        marginTop: '20px',
    },
};