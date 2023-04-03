import { useState, useRef } from "react";
import { TextInput } from "react-native";
import { Container, Card, RowBox, EndBox, DateTimeBox } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";

import { DateTimePicker } from "@components/DateTimePicker";

export function MealForm() {
  const [name, setName] = useState("");
  const [isOnDiet, setIsOnDiet] = useState<"YES" | "NO">("YES");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const nameInputRef = useRef<TextInput>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState({
    date: false,
    time: false,
  });

  const handleSelectChange = (value: "YES" | "NO") => {
    setIsOnDiet(value);
  };

  function handleDatePress(value: "date" | "time") {
    value === "date"
      ? setDatePickerVisibility({ ...isDatePickerVisible, date: true })
      : setDatePickerVisibility({ ...isDatePickerVisible, time: true });
  }

  function handleHideDatePicker() {
    setDatePickerVisibility({ time: false, date: false });
  }

  const handleConfirmDate = (date: Date) => {
    setSelectedDate(date);
    handleHideDatePicker();
  };

  return (
    <Container edges={["top", "left", "right"]}>
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
          <DateTimePicker
            isVisible={isDatePickerVisible.date}
            onPress={() => handleDatePress("date")}
            label="Data"
            value={selectedDate}
            maximumDate={new Date()}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={handleHideDatePicker}
          />
          <DateTimePicker
            isVisible={isDatePickerVisible.time}
            onPress={() => handleDatePress("time")}
            label="Hora"
            value={selectedDate}
            mode="time"
            onConfirm={handleConfirmDate}
            onCancel={handleHideDatePicker}
          />
        </RowBox>
        <Select value={isOnDiet} onChange={handleSelectChange} />
        <EndBox>
          <Button title="Cadastrar refeição" fullWidth />
        </EndBox>
      </Card>
    </Container>
  );
}
