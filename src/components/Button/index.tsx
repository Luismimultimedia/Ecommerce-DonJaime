import React, { FunctionComponent } from 'react'

// styles
import { 
    StyledButton,
    StyledStartIcon,
    StyledEndIcon
 } from './Button.styled';

type ButtonProps = {
    title?: string;
    startIcon?: string;
    endIcon?: string;
    className?: string;
    variant?: string;
    size?: string;
    onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
    title,
    startIcon,
    endIcon,
    className = "py-4",
    variant = "primary",
    size,
    onClick = () => { }
}) => {
    return (
        <StyledButton variant={variant} onClick={onClick} size={size}>
            {startIcon && <StyledStartIcon imgSrc={startIcon} imgAlt="icono" />}
            {title}
            {endIcon && <StyledEndIcon imgSrc={endIcon} imgAlt="icono" />}
        </StyledButton>
    )
}

export default Button;
