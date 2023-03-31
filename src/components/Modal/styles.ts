import styled from "styled-components/native";

export const ModalWrapper = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.24);
`;

export const ModalContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  gap:32px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ModalHeader = styled.View`
  padding: 0px 24px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ModalOptions = styled.View`
  flex-direction: row;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalCloseButton = styled.TouchableOpacity``;

export const ModalCloseButtonText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ModalContent = styled.View`
  margin-bottom: 10px;
`;
