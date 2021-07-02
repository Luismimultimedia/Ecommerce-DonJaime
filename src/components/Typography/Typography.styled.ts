import styled from "styled-components";
import tw from "twin.macro";

type StyledTypographyProps = {
  variant: string;
};

export const StyledTypography = styled.p.attrs<StyledTypographyProps>({
  className: `StyledTypography`,
})`

  ${(props: StyledTypographyProps) => {
    switch (props.variant) {
      case "titleSection":
        return tw`text-2xl font-bold text-black`;

      case "descriptionSection":
        return tw`text-lg text-gray-500`;

      case "titleCard":
        return tw`text-lg text-gray-500 font-bold`;

      case "descriptionCard":
        return tw`text-base text-gray-500`;

      case "descriptionCardSm":
        return tw`text-sm text-gray-500`;

      case "priceCard":
        return tw`text-lg text-black font-bold`;

      case "buttonCard":
        return tw`text-base text-white`;

      case "titleProductCard":
        return tw`text-base text-primary-500 font-bold`;

      default:
        break;
    }
  }}
`;
