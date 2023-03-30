import { useState } from "react";
import { PressableProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";
import { Container } from "./style";
import { ButtonStyleProps } from "./style";

type Props = ButtonStyleProps &
  PressableProps & {
    title?: string;
    Icon?: "Plus" | "PencilSimpleLine" | "Trash";
  };

export function Button({
  fullWidth = false,
  Icon,
  type = "SOLID",
  title,
  ...rest
}: Props) {
  const [isActive, setIsActive] = useState(false);
  const { COLORS } = useTheme();
  const PhosphorIcon = require("phosphor-react-native")[Icon || "Plus"];

  return (
    <Container
      fullWidth={fullWidth}
      {...rest}
      type={type}
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      active={isActive}
    >
      {Icon && <PhosphorIcon color={COLORS.WHITE} size={24} />}
      <Text fontSize="SM" fontFamily="BOLD" color={type === "SOLID"? "WHITE" : "GRAY100"}>
        {title}
      </Text>
    </Container>
  );
}
