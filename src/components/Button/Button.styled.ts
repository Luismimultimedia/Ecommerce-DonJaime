import styled from "styled-components";
import tw from "twin.macro";

// Components
import Image from "../Image";

type StyledButtonProps = {
  variant: string;
  className: string;
  size?: string;
};

export const StyledButton = styled.button.attrs({
  className: "StyledButton ",
})`
  ${tw`w-full flex p-4 rounded-xl justify-center relative items-center focus:outline-none text-base`}

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${(props: StyledButtonProps) => {
    switch (props.variant) {
      case "primary":
        return tw`bg-primary-500 hover:bg-primary-600 focus:bg-primary-400 text-white`;

      case "secondary":
        return tw`bg-white hover:bg-gray-100 focus:bg-white shadow text-primary-500`;

      case "iconButton":
        return tw`bg-white hover:bg-gray-100 focus:bg-white shadow text-primary-500 w-12 h-12`;

      default:
        break;
    }
  }}

  ${(props: StyledButtonProps) => {
    switch (props.size) {
      case "sm":
        return tw`w-auto`

      default:
        break;
    }
  }}
`;

export const StyledStartIcon = styled(Image).attrs({
  className: "StyledStartIcon ",
})`
  ${tw`w-6 h-6`}
`;

export const StyledEndIcon = styled(Image).attrs({
  className: "StyledEndIcon ",
})`
  ${tw`w-6 h-6`}
`;
