import React, { FunctionComponent } from 'react'
import { StyledTypography } from "./Typography.styled"

type TypographyProps = {
    text: string;
    variant: string;
}

const Typography: FunctionComponent<TypographyProps> = ({
    text = "",
    variant = "title",
}) => {
    return (
        <StyledTypography variant={variant}>
            {text}
        </StyledTypography>
    )
}

export default Typography
