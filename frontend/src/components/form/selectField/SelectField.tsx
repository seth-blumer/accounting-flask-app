import { styles } from "./styles/select-field-styles";

type SelectFieldProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
};

const SelectField = ({ id, value, onChange, options }: SelectFieldProps) => {
    return (
        <select id={id} value={value} onChange={onChange} style={styles.select}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectField;