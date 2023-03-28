import { Container , Box } from "./styles";

import { Text } from "@components/Text";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Button } from "@components/Button";
import { Meal } from "@components/Meal";
export default function Home() {
  return (
    <Container>
      <Header />
      <Percent percent={90.86}/>
      <Box style={{marginTop: 40}}>
        <Text>Refeições</Text>
        <Button title="Nova refeição" Icon="Plus"/>
      </Box>
      <Box style={{marginTop: 32}}>
        <Text fontFamily="BOLD" fontSize="LG">12.08.22</Text>
        </Box>
      <Meal />
    </Container>
  );
}
