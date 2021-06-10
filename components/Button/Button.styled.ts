import styled from "styled-components";
import tw from "twin.macro"

type StyledButtonProps = {
    variant: string,
}

export const StyledButton = styled.button.attrs({
    className: "StyledButton "
})`
    ${tw`w-full flex p-4 rounded-xl justify-center focus:outline-none`}

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    ${(props: StyledButtonProps) => {
        switch (props.variant) {
            case "primary":
                return tw`bg-primary-500 hover:bg-primary-600 focus:bg-primary-400 text-white`

            case "secondary":
                return tw`bg-white hover:bg-gray-100 focus:bg-white shadow text-primary-500`

            default:
                break;
        }
    }}
`