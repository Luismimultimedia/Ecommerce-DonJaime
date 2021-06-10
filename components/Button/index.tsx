import React, { FunctionComponent } from 'react'

// styles
import { StyledButton } from './Button.styled';

type ButtonProps = {
    title?: string;
    startIcon?: string;
    endIcon?: string;
    className?: string;
    variant?: string;
    onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
    title = "titulo",
    startIcon = "",
    endIcon = "",
    className = "py-4",
    variant = "primary",
    onClick = () => { }
}) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            {startIcon && <img className="w-6 h-6" src={startIcon} alt="icono" />}
            {title}
            {startIcon && <img className="w-6 h-6" src={endIcon} alt="icono" />}
        </StyledButton>
    )
}

export default Button;
