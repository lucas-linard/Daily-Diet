import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import { Container, ContainerItem, Card, Tag, Dot, EndBox } from "./styles";
import { Text } from "@components/Text";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import { mealDeleteById } from "@storage/meal/mealDeleteById";
import { MealType } from "src/@types/Meal";
import { useTranslation } from "react-i18next";

export default function Details() {
  const navigation = useNavigation();
  const route  = useRoute();
  const params = route.params as MealType;
  const { t } = useTranslation(); 
  const type = params.isOnDiet === "YES" ?  'EDIT-ON-DIET' : 'EDIT-OFF-DIET';  

  const formattedDate = moment(params.date).format('DD/MM/YYYY HH:mm');

  function handleEditMeal() {
    navigation.navigate("MealForm", { type, ...params });
  }

  async function handleDeleteMeal() {
    await mealDeleteById(params.id);
    navigation.navigate("Home");
  }

  return (
    <Container type={type} edges={["top", "left", "right"]}>
      <Header title={t('Common:Meal')} />
      <Card>
        <ContainerItem style={{ marginTop: 16 }}>
          <Text fontFamily="BOLD" fontSize="XL">
            {params.name}
          </Text>
          <Text>{params.description}</Text>
        </ContainerItem>
        <ContainerItem>
          <Text fontFamily="BOLD" fontSize="SM">
          {t('Forms:DateAndTime')}
          </Text>
          <Text>{formattedDate}</Text>
        </ContainerItem>
        <Tag>
          <Dot isOnDiet={params.isOnDiet}/>
          <Text fontSize="SM">
            {params.isOnDiet === "YES" ? t('Common:OnDiet') :t('Common:OffDiet') }
            </Text>
        </Tag>
        <EndBox>
          <Button
            Icon="PencilSimpleLine"
            title={t('Button:Meal.Edit')}
            fullWidth
            onPress={handleEditMeal}
          />
          <Button
            type="OUTLINE"
            Icon="Trash"
            title={t('Button:Meal.Delete')}
            fullWidth
            onPress={handleDeleteMeal}
          />
        </EndBox>
      </Card>
      <Modal
        title={t('Feedback:WantToDeleteMeal')}
        visible={false}
        transparent
        ConfirmButtonTitle={t('Button:DeleteConfirmation')}
        CancelButtonTitle={t('Button:Cancel')}
      />
    </Container>
  );
}
