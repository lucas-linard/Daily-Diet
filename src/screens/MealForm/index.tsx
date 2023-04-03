import { useState, useRef } from "react";
import { TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Container, Card, RowBox, EndBox } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { DateTimePicker } from "@components/DateTimePicker";
import { Text } from "@components/Text";

type FormData = {
  name: string;
  description: string;
  isOnDiet: "YES" | "NO";
  date: Date;
  time: Date;
};

export function MealForm() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      isOnDiet: "YES",
      date: new Date(),
      time: new Date(),
    },
  });

  const watchDate = watch("date");
  const watchTime = watch("time");

  const nameInputRef = useRef<TextInput>(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState({
    date: false,
    time: false,
  });

  function validateTime() {
    let dataTime = new Date(
      watchDate.getFullYear(),
      watchDate.getMonth(),
      watchDate.getDate(),
      watchTime.getHours(),
      watchTime.getMinutes(),
      watchTime.getSeconds()
    );

    return dataTime <= new Date();
  }

  function handleSubmitForm(data: any) {
    console.log(data);
  }

  function handleDatePress(value: "date" | "time") {
    value === "date"
      ? setDatePickerVisibility({ ...isDatePickerVisible, date: true })
      : setDatePickerVisibility({ ...isDatePickerVisible, time: true });
  }

  function handleHideDatePicker() {
    setDatePickerVisibility({ time: false, date: false });
  }

  return (
    <Container edges={["top", "left", "right"]}>
      <Header title="Nova refeição" />
      <Card>
        <Controller
          control={control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                inputRef={nameInputRef}
                label="Nome"
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />
        {errors.name && (
          <Text
            fontFamily="BOLD"
            fontSize="SM"
            color="RED_DARK"
            style={{ marginTop: -15 }}
          >
            Preencha o nome da sua refeição*
          </Text>
        )}
        <Controller
          control={control}
          name="description"
          rules={{
            required: false,
            maxLength: 100,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Descrição"
              value={value}
              onChangeText={onChange}
              numberOfLines={3}
            />
          )}
        />

        <RowBox>
          <Controller
            control={control}
            name="date"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                isVisible={isDatePickerVisible.date}
                onPress={() => handleDatePress("date")}
                label="Data"
                value={value}
                maximumDate={new Date()}
                mode="date"
                onConfirm={(e) => {
                  onChange(e);
                  handleHideDatePicker();
                }}
                onCancel={handleHideDatePicker}
              />
            )}
          />

          <Controller
            control={control}
            name="time"
            rules={{
              required: true,
              validate: validateTime,
            }}
            render={({ field: { onChange, value } }) => (
              <DateTimePicker
                isVisible={isDatePickerVisible.time}
                onPress={() => handleDatePress("time")}
                label="Hora"
                value={value}
                mode="time"
                onConfirm={(e) => {
                  onChange(e);
                  handleHideDatePicker();
                }}
                onCancel={handleHideDatePicker}
              />
            )}
          />
        </RowBox>
        {errors.time && (
          <Text
            fontFamily="BOLD"
            fontSize="SM"
            color="RED_DARK"
            style={{ marginTop: -5 }}
          >
            Informe uma data/hora valida!
          </Text>
        )}
        <Controller
          control={control}
          name="isOnDiet"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onChange={onChange} />
          )}
        />
        <EndBox>
          <Button
            title="Cadastrar refeição"
            fullWidth
            onPress={handleSubmit(handleSubmitForm)}
          />
        </EndBox>
      </Card>
    </Container>
  );
}
