
// Button props
type ButtonProps = {
    padding?: string;
    backgroundColor?: string;
    color?: string;
    text: string;
    onClick: () => void;
}

// Reusable Button component
const Button = ({
    padding = '8px 16px', // Default padding
    backgroundColor = '#f0f0f0', // Default background color
    color = '#333', // Default text color
    text,
    onClick,
}: ButtonProps) => {
    // Styles for the button
    const styles = {
        padding,
        backgroundColor,
        color,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <button onClick={onClick} style={styles}>
            {text}
        </button>
    );
};

export default Button;
