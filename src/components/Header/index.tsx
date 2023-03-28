import { Container, BackButton, ArrowLeftIcon } from "./styles";

import { Text } from "@components/Text";

type HeaderProps = {
  title: string;
};
export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <BackButton>
        <ArrowLeftIcon />
      </BackButton>

      <Text fontFamily="BOLD" fontSize="LG">
        {title}
      </Text>
    </Container>
  );
}
