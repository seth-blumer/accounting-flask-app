import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconButtonProps = {
    icon: any; // Font Awesome icon
    onClick: () => void;
    backgroundColor?: string; // Optional background color
    marginLeft?: string; // Optional margin-left
};

const IconButton = ({ icon, onClick, backgroundColor = 'transparent', marginLeft = '0' }: IconButtonProps) => {
    const buttonStyle: React.CSSProperties = {
        marginLeft,
        backgroundColor,
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
    };

    return (
        <button onClick={onClick} style={buttonStyle}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default IconButton;
