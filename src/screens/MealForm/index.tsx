import { useState, useRef } from "react";
import { TextInput } from "react-native";
import { Container , Card, RowBox, EndBox } from "./styles";

import { Text } from "@components/Text";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";

export function MealForm() {
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const nameInputRef = useRef<TextInput>(null);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log(value);
  };
  return (
    <Container edges={['top','left',"right"]}>
      <Header title="Nova refeição" />
      <Card>
        <Input
          inputRef={nameInputRef}
          label="Nome"
          value={name}
          onChangeText={setName}
        />
        <Input
          label="Descrição"
          value={name}
          onChangeText={setName}
          numberOfLines={3}
        />
        <RowBox>
          <Input
            inputRef={nameInputRef}
            label="Data"
            value={name}
            onChangeText={setName}
          />
          <Input
            inputRef={nameInputRef}
            label="Hora"
            value={name}
            onChangeText={setName}
          />
        </RowBox>
        <Select value={selectedValue} onChange={handleSelectChange} />
        <EndBox>
          <Button title="Cadastrar refeição" fullWidth />
        </EndBox>
      </Card>
      </Container>
  );
}
