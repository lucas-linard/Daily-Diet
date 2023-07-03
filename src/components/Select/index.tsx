import React, { useState, useEffect } from "react";
import { Container, Button, Circle } from "./styles";
import { SelectTypeStyleProps } from "./styles";
import { Text } from "@components/Text";
import { useTranslation } from "react-i18next";

type SelectType = "YES" | "NO";

type Props = {
  value: SelectType;
  onChange: (value: SelectType) => void;
};

export function Select({ value, onChange }: Props) {
  const [selectedButton, setSelectedButton] = useState(value);
  const { t } = useTranslation();
  useEffect(() => {
    setSelectedButton(value);
  }, [value]);

  const handleButtonPress = (buttonType: SelectType) => {
    setSelectedButton(buttonType);
    onChange(buttonType);
  };

  return (
    <Container>
      <Button
        selected={selectedButton === "YES"}
        type={"YES"}
        onPress={() => handleButtonPress("YES")}
      >
        <Circle type={"YES"} />
        <Text fontSize="SM" fontFamily="BOLD">
          {t("Common:Yes")}
        </Text>
      </Button>
      <Button
        selected={selectedButton === "NO"}
        type={"NO"}
        onPress={() => handleButtonPress("NO")}
      >
        <Circle type={"NO"} />
        <Text fontSize="SM" fontFamily="BOLD">
          {t("Common:No")}
        </Text>
      </Button>
    </Container>
  );
}
