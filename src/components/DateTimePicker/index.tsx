import DateTimePickerModal, {
  DateTimePickerProps,
} from "react-native-modal-datetime-picker";

import { Container, Button } from "./styles";

import { Text } from "@components/Text";

type Props = DateTimePickerProps & {
  label: string;
  value: Date;
  onPress?: () => void;
};

export const DateTimePicker = ({ label, value, mode, onPress, ...rest }: Props) => {
  
  return (
    <Container>
      <Text fontSize="SM" fontFamily="BOLD" color="GRAY200">
        {label}
      </Text>
      <Button onPress={onPress}>
        <Text>
          {mode === "date"
            ? value.toLocaleDateString()
            : new Intl.DateTimeFormat([], { hour: 'numeric', minute: 'numeric'}).format(value)}
        </Text>
      </Button>
      <DateTimePickerModal mode={mode} {...rest} />
    </Container>
  );
};
