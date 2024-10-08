// FormGroup.tsx
import React from 'react';
import { styles } from './styles/form-group-styles';

type FormGroupProps = {
    label: string;
    children: React.ReactNode;
};

const FormGroup = ({ label, children }: FormGroupProps) => {
    return (
        <div style={styles.formGroup}>
            <label style={styles.label}>{label}</label>
            {children}
        </div>
    );
};

export default FormGroup;
