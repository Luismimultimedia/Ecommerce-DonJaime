import styled from "styled-components";
import tw from "twin.macro";

// Components
import Image from '../Image'
import Typography from '../Typography'

type StyledProductCard = {
  variant?: string;
};

export const StyledProductCard = styled.div.attrs({
  className: "StyledProductCard"
})`
    ${tw`flex flex-col items-center justify-center w-60 p-4 shadow space-y-4 rounded-lg`}

    ${(props: StyledProductCard) => {
    if (props.variant === "lg") {
      return `
          max-width: 37rem;
          min-width: 37rem;
          flex-direction: row;
        `
    }
  }}
`

export const StyledImageProductCard = styled(Image).attrs({
  className: "StyledImageProductCard"
})`
    ${tw`w-28`}
`

export const StyledContainerInfo = styled.div.attrs({
  className: "StyledContainerInfo"
})`
  ${tw`flex flex-col w-full`}
`

export const StyledTitleProduct = styled(Typography).attrs({
  className: "StyledTitleProduct"
})`

    ${(props: StyledProductCard) => {
    if (props.variant === "lg") {
      return tw`text-left`
    }
    if (props.variant === "sm") {
      return tw`text-center`
    }
  }}
`

export const StyledDescriptionProduct = styled(Typography).attrs({
  className: "StyledDescriptionProduct"
})`

      ${(props: StyledProductCard) => {
    if (props.variant === "lg") {
      return tw`text-left`
    }

    if (props.variant === "sm") {
      return tw`text-center`
    }

  }}
`

export const StyledPriceProduct = styled(Typography).attrs({
  className: "StyledPriceProduct"
})`

      ${(props: StyledProductCard) => {
    if (props.variant === "lg") {
      return tw`text-left`
    }

    if (props.variant === "sm") {
      return tw`text-center`
    }

  }}
`
