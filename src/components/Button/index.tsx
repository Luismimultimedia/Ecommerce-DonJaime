import React, { FunctionComponent } from 'react'

// Components
import Badge from '../Badge';

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
    badge?: boolean;
    badgeValue?: string;
    badgeColor?: string;
    onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
    title,
    startIcon,
    endIcon,
    className = "py-4",
    variant = "primary",
    size,
    badge = false,
    badgeValue,
    badgeColor,
    onClick = () => { }
}) => {
    return (
        <StyledButton variant={variant} onClick={onClick} size={size}>
            {startIcon && <StyledStartIcon imgSrc={startIcon} imgAlt="icono" />}
            {title}
            {endIcon && <StyledEndIcon imgSrc={endIcon} imgAlt="icono" />}
            {badge && <Badge badgeValue={badgeValue} badgeColor={badgeColor} />}
        </StyledButton>
    )
}

export default Button;
