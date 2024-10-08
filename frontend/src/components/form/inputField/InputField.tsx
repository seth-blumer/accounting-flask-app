import { styles } from "./styles/input-field-styles";

type InputFieldProps = {
    type: 'text' | 'number' | 'date';
    id: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const InputField = ({ type, id, value, onChange, required }: InputFieldProps) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            style={styles.input}
        />
    );
};

export default InputField;