import { TextProps } from "react-native";

import { Content, ContentProps } from "./styles";

type Props = TextProps & ContentProps;

export function Text({ fontSize, fontFamily, color, ...rest }: Props) {
  return (
    <Content
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...rest}
    >
      {rest.children}
    </Content>
  );
}
