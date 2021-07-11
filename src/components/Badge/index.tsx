import React, { FC } from 'react'

// Styles
import {
    StyledContainer,
} from "./Badge.styled"

type BadgeProps = {
    badgeValue: string;
    badgeColor: string;
}

const Badge: FC<BadgeProps> = ({
    badgeValue = "0",
    badgeColor = "var(--color-primary-500)"
}) => {
    return (
        <>
            {parseInt(badgeValue) > 0 && <StyledContainer badgeColor={badgeColor}>{badgeValue}</StyledContainer>}
        </>
    )
}

export default Badge
