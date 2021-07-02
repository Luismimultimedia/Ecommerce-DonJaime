import React, { FunctionComponent } from 'react'
import { StyledTypography } from "./Typography.styled"

type TypographyProps = {
    text: string;
    variant: string;
    className?: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
    text = "",
    variant = "title",
    className = "",
}) => {
    return (
        <StyledTypography className={className} variant={variant}>
            {text}
        </StyledTypography>
    )
}

export default Typography
