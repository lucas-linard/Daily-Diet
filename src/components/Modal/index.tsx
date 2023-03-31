import { ModalProps } from "react-native";

import { Button } from "@components/Button";

import {
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  ModalOptions,
  ModalBackground,
} from "./styles";

import { Text } from "@components/Text";

export function Modal({...rest}: ModalProps) {
  return (
    <ModalWrapper {...rest}>
      <ModalBackground>
        <ModalContainer>

          <ModalHeader>
            <Text
              fontFamily="BOLD"
              fontSize="LG"
              style={{ textAlign: "center" }}
            >
              Deseja realmente excluir o registro da refeição?
            </Text>
          </ModalHeader>

          <ModalOptions>
            <Button type="OUTLINE" title="Cancelar" />
            <Button title="Sim, excluir" />
          </ModalOptions>

        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
}
