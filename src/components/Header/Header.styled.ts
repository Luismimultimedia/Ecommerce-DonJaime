import styled from "styled-components";
import tw from "twin.macro";

export const NavStyled = styled.nav.attrs({
    className: "NavStyled "
})`
    ${tw`flex h-20 w-full px-8 shadow bg-white`}
`

export const LogoContainerStyled = styled.div.attrs({
    className: "LogoContainerStyled"
})`
    ${tw`flex items-center`}
`

export const ItemsContainerStyled = styled.div.attrs({
    className: "ItemsContainerStyled"
})`
    ${tw`flex flex-1 justify-end`}
`

export const UlContainerStyled = styled.ul.attrs({
    className: "UlContainerStyled"
})`
    ${tw`flex space-x-4 items-center`}
`

