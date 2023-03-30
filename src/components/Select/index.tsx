import React, { useState, useEffect } from 'react';
import { Container, Button ,Circle } from "./styles";
import { SelectTypeStyleProps } from "./styles";
import { Text } from "@components/Text";

type Props = {
  value: string,
  onChange: (value: string) => void
};

export function Select({value, onChange}: Props) {
  const [selectedButton, setSelectedButton] = useState(value);

  useEffect(() => {
    setSelectedButton(value);
  }, [value]);

  const handleButtonPress = (buttonType: string) => {
    setSelectedButton(buttonType);
    onChange(buttonType);
  }

  return (
    <Container>
      <Button
        selected={selectedButton === 'YES'}
        type={"YES"}
        onPress={() => handleButtonPress('YES')}
      >
        <Circle type={"YES"}/>
        <Text fontSize="SM" fontFamily="BOLD">
          Sim
        </Text>
      </Button>
      <Button
        selected={selectedButton === 'NO'}
        type={"NO"}
        onPress={() => handleButtonPress('NO')}
      >
        <Circle type={"NO"}/>
        <Text fontSize="SM" fontFamily="BOLD">
          Não
        </Text>
      </Button>
    </Container>
  );
}
