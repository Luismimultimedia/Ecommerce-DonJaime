import styled from "styled-components";
import tw from "twin.macro";

type StyledContainerProps = {
    badgeColor: string;
}

export const StyledContainer = styled.div.attrs({
    className: "StyledContainer"
})`
    ${tw`absolute h-6 w-6 top-0 right-0 rounded-full text-white font-bold`}

    ${(props: StyledContainerProps) => {
        if(props.badgeColor) {
            return `background-color: ${props.badgeColor};`
        }
    }}
`

export const StyledNumber = styled.div.attrs({
    className: "StyledContainer"
})`
    ${tw`absolute h-4 w-4 top-0 right-0 rounded`}
`