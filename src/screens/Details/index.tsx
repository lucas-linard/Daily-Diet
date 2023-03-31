import { Container, ContainerItem, Card, Tag, Dot, EndBox } from "./styles";
import { Text } from "@components/Text";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Modal } from "@components/Modal";

export default function Details() {
  return (
    <Container type="HEALTHY" edges={["top", "left", "right"]}>
      <Header title="Refeição" />
      <Card>
        <ContainerItem style={{ marginTop: 16 }}>
          <Text fontFamily="BOLD" fontSize="XL">
            Sanduíche
          </Text>
          <Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Text>
        </ContainerItem>
        <ContainerItem>
          <Text fontFamily="BOLD" fontSize="SM">
            Data e hora
          </Text>
          <Text>12/12/2020 12:00</Text>
        </ContainerItem>
        <Tag>
          <Dot />
          <Text fontSize="SM">dentro da dieta</Text>
        </Tag>
        <EndBox>
          <Button Icon="PencilSimpleLine" fullWidth title="Editar refeição" />
          <Button
            type="OUTLINE"
            Icon="Trash"
            fullWidth
            title="Excluir refeição"
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
