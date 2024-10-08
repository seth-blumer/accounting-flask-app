// Hooks
import { useFormik } from 'formik';

// Functions
import { Transaction } from '../../types/Transaction';

// External components
import FormGroup from '../../components/form/formGroup/FormGroup';
import InputField from '../../components/form/inputField/InputField';
import SelectField from '../../components/form/selectField/SelectField';

// Types
import { Category } from '../../types/Category';

// UI components
import { styles } from './styles/modal-styles';

// Props
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (newTransaction: Transaction) => Promise<void>;
    categories: Category[];
};

const Modal = ({ isOpen, onClose, onSubmit, categories }: ModalProps) => {
    // Formik hook to handle form state
    const formik = useFormik({
        initialValues: {
            description: '',
            amount: 0,
            category: categories.length > 0 ? categories[0].category : '',
            type: 'revenue' as 'revenue' | 'expense',
            date: '',
        },
        onSubmit: async (values) => {
            await onSubmit(values);
            onClose(); // Close the modal after submitting
        },
    });

    if (!isOpen) return null; // If the modal is not open, return null

    return (
        <div style={styles.modalOverlay}>
            {/* Modal container for adding a new transaction */}
            <div style={styles.modal}>
                {/* Title of the modal */}
                <h2 style={styles.modalTitle}>Add New Transaction</h2>

                {/* Form for inputting transaction details */}
                <form onSubmit={formik.handleSubmit} style={styles.modalForm}>
                    {/* TODO: Enhance reusability by creating a generic Form component that can handle different input types and configurations */}

                    {/* Description field */}
                    <FormGroup label="Description">
                        <InputField
                            type="text"
                            id="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            required
                        />
                    </FormGroup>

                    {/* Amount field */}
                    <FormGroup label="Amount">
                        <InputField
                            type="number"
                            id="amount"
                            value={formik.values.amount || ''}
                            onChange={formik.handleChange}
                            required
                        />
                    </FormGroup>

                    {/* Category selection */}
                    <FormGroup label="Category">
                        <SelectField
                            id="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            options={categories.map(category => ({
                                value: category.category,
                                label: category.category
                            }))}
                        />
                    </FormGroup>

                    {/* Transaction type selection */}
                    <FormGroup label="Type">
                        <SelectField
                            id="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            options={[
                                { value: 'expense', label: 'Expense' },
                                { value: 'revenue', label: 'Revenue' }
                            ]}
                        />
                    </FormGroup>

                    {/* Date selection */}
                    <FormGroup label="Date">
                        <InputField
                            type="date"
                            id="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            required
                        />
                    </FormGroup>

                    {/* Modal action buttons */}
                    <div style={styles.modalActions}>
                        <button type="submit" style={styles.submitButton}>Add Transaction</button>
                        <button type="button" onClick={onClose} style={styles.cancelButton}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Modal;
