import { PressableProps } from "react-native";
import { Container, Dot } from "./styles";
import { Text } from "@components/Text";

export type isOnDietSelectType = 'YES' | 'NO';
type Props = PressableProps & {
  title: string;
  date: Date;
  isOnDiet:isOnDietSelectType;
};
export function Meal({ title, date, isOnDiet, ...rest }: Props) {
  date = new Date(date);
  const timeString = date.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit"});
  
  return (
    <Container {...rest}>
      <Text>{timeString}</Text>
      <Text color="GRAY400" fontSize="SM">
        |
      </Text>
      <Text style={{ width: "70%" }} color="GRAY200" numberOfLines={1}>
        {title}
      </Text>
      <Dot isOnDiet={isOnDiet} />
    </Container>
  );
}
