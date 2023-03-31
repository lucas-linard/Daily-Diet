import { Container , Header, Profile ,Box } from "./styles";

import ProfileImage from '@assets/Profile.png';
import { Text } from "@components/Text";
import { Logo } from "@components/Logo";

import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
export default function Home() {
  return (
    <Container>
      <Header>
      <Logo />
      <Profile source={ProfileImage} />
      </Header>
      <Percent percent={90.86}/>
      <Box style={{marginTop: 40}}>
        <Text>Refeições</Text>
        <Button title="Nova refeição" Icon="Plus" fullWidth/>
      </Box>
      <Box style={{marginTop: 32}}>
        <Text fontFamily="BOLD" fontSize="LG">12.08.22</Text>
        </Box>
      <Meal />
    </Container>
  );
}
