import { useNavigation } from "@react-navigation/native";
import { Container, BackButton, ArrowLeftIcon } from "./styles";

import { Text } from "@components/Text";

type HeaderProps = {
  title: string;
};
export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={navigation.goBack}>
        <ArrowLeftIcon />
      </BackButton>

      <Text fontFamily="BOLD" fontSize="LG">
        {title}
      </Text>
    </Container>
  );
}
