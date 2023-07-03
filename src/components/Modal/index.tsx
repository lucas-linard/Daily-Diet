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
  ConfirmButtonTitle?: string;
  CancelButtonTitle?: string;
};

export function Modal({ title, onCancel, onConfirm, ConfirmButtonTitle, CancelButtonTitle, ...rest }: Props) {
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
            <Button type="OUTLINE" title={CancelButtonTitle} onPress={onCancel} />
            <Button title={ConfirmButtonTitle} onPress={onConfirm} />
          </ModalOptions>
        </ModalContainer>
      </ModalBackground>
    </ModalWrapper>
  );
}
