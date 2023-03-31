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
// the Button title could be more flexible, but for now it's ok
type Props = ModalProps & {
  title: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

export function Modal({ title, onCancel, onConfirm, ...rest }: Props) {
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
              {title}
            </Text>
          </ModalHeader>
          <ModalOptions>
            <Button type="OUTLINE" title="Cancelar" onPress={onCancel} />
            <Button title="Sim, excluir" onPress={onConfirm} />
          </ModalOptions>
        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
}
