import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container, TextField } from "./styles";

import { Text } from "@components/Text";


type InputProps = TextInputProps & {
  label: string;
  inputRef?: React.RefObject<TextInput>;
  numberOfLines?: number;
};

function handleIsFilled(value: string) {
  return value.trim().length > 0;
}

export const Input = ({ label, value = "", inputRef, numberOfLines = 1 , ...rest }: InputProps) => {
  const [active, setActive] = useState(false);
  
  function handleIsActive (){
    setActive(!active);
  }

  if(numberOfLines > 3){
    throw new Error("Number of lines must be less than 3");
  }

  return (
    <Container numberOfLines={numberOfLines}>
      <Text fontSize="SM" fontFamily="BOLD" color="GRAY200">
        {label}
      </Text>
      <TextField 
        ref={inputRef}
        active={active}
        filled={handleIsFilled(value)}
        value={value}
        onEndEditing={handleIsActive}
        onFocus={handleIsActive}
        multiline={numberOfLines > 1}
        numberOfLines={numberOfLines}
        {...rest} 
      />
    </Container>
  );
};
