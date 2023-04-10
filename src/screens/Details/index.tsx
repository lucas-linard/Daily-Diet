import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import { Container, ContainerItem, Card, Tag, Dot, EndBox } from "./styles";
import { Text } from "@components/Text";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import { mealDeleteById } from "@storage/meal/mealDeleteById";
import { MealType } from "src/@types/Meal";

export default function Details() {
  const navigation = useNavigation();
  const route  = useRoute();
  const params = route.params as MealType;
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
      <Header title="Refeição" />
      <Card>
        <ContainerItem style={{ marginTop: 16 }}>
          <Text fontFamily="BOLD" fontSize="XL">
            {params.name}
          </Text>
          <Text>{params.description}</Text>
        </ContainerItem>
        <ContainerItem>
          <Text fontFamily="BOLD" fontSize="SM">
            Data e hora
          </Text>
          <Text>{formattedDate}</Text>
        </ContainerItem>
        <Tag>
          <Dot isOnDiet={params.isOnDiet}/>
          <Text fontSize="SM">
            {params.isOnDiet === "YES" ? "dentro da dieta" : "fora da dieta" }
            </Text>
        </Tag>
        <EndBox>
          <Button
            Icon="PencilSimpleLine"
            title="Editar refeição"
            fullWidth
            onPress={handleEditMeal}
          />
          <Button
            type="OUTLINE"
            Icon="Trash"
            title="Excluir refeição"
            fullWidth
            onPress={handleDeleteMeal}
          />
        </EndBox>
      </Card>
      <Modal
        title={"Deseja realmente excluir o registro da refeição?"}
        visible={false}
        transparent
      />
    </Container>
  );
}
