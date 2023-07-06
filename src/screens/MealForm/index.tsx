import { useState, useRef } from "react";
import { TextInput, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import uuid from 'react-native-uuid';
import { useTranslation } from "react-i18next";
import Toast from 'react-native-toast-message';

import { Container, Card, RowBox, EndBox } from "./styles";

import { MealType } from "src/@types/Meal";
import { MealFormType } from "src/@types/Meal";
import { mealCreate } from "@storage/meal/mealCreate";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Select } from "@components/Select";
import { Button } from "@components/Button";
import { DateTimePicker } from "@components/DateTimePicker";
import { Text } from "@components/Text";
import { mealUpdate } from "@storage/meal/mealUpdate";
type FormData = MealType & {
  type: MealFormType;
  time: Date;
};

export function MealForm() {
  const navigation = useNavigation();
  const route = useRoute();
  const {t, i18n} = useTranslation();
  const params = route.params as FormData;
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      id: params.id || uuid.v4().toString(),
      name: params.name || "",
      description: params.description || "",
      isOnDiet: params.isOnDiet || "YES",
      date: params.date ? new Date(params.date) : new Date(),
      time: params.date ? new Date(params.time) : new Date(),
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

  async function handleSubmitForm(data: FormData) {
    const hours = watchTime.getHours();
    const minutes = watchTime.getMinutes();
    const seconds = watchTime.getSeconds();

    data.date.setHours(hours, minutes, seconds);
    try {
      params.type === "NEW" ? await mealCreate(data) : await mealUpdate(data);
      navigation.navigate("Feedback", { isOnDiet: data.isOnDiet });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: t('Feedback:Error'),
        autoHide: false,
      });
    }
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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Container type={params.type} edges={["top", "left", "right"]}>
        <Header
          title={params.type === "NEW" ? t('Common:Meal') : t('Common:EditMeal')}
        />
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
                  label={t('Forms:Name')}
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
              {t('Forms:Error.Name')}
            </Text>
          )}
          <Controller
            control={control}
            name="description"
            rules={{
              required: false,
              maxLength: 200,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t('Forms:Description')}
                value={value}
                onChangeText={onChange}
                numberOfLines={3}
              />
            )}
          />
          {errors.description && (
            <Text
              fontFamily="BOLD"
              fontSize="SM"
              color="RED_DARK"
              style={{ marginTop: -15 }}
            >
              {t('Forms:Error.Description')}
            </Text>
          )}

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
                  label={t('Forms:Date')}
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
                  label={t('Forms:Time')}
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
              {t('Forms:Error.DateAndTime')}
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
              title={
                params.type === "NEW"
                  ? t('Button:Meal.Save')
                  : t('Button:SaveChanges')
              }
              fullWidth
              onPress={handleSubmit(handleSubmitForm)}
            />
          </EndBox>
        </Card>
      </Container>
    </ScrollView>
  );
}
