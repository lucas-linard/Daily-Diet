import { PressableProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";
import { Container } from "./style";
import { ButtonStyleProps } from "./style";

type Props = ButtonStyleProps &
  PressableProps & {
    title?: string;
    Icon?: "Plus" | "PencilSimpleLine " | "Trash";
  };

export function Button({ fullWidth = true, Icon, title, ...rest }: Props) {
  const { COLORS } = useTheme();
  const PhosphorIcon = require("phosphor-react-native")[Icon || "Plus"];

  return (
    <Container fullWidth={fullWidth} {...rest}>
      {Icon && <PhosphorIcon color={COLORS.WHITE} size={24} />}
      <Text fontSize="SM" fontFamily="BOLD" color="WHITE">
        {title}
      </Text>
    </Container>
  );
}
