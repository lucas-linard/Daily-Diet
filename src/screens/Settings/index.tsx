import { FlatList } from "react-native";
import { Container, Header, OptionButton } from "./styles";
import { Text } from "@components/Text";
import * as WebBrowser from 'expo-web-browser';
const data = [{
    title: "Language",
    fun: () => {},
},
    {
        title: "Theme",
        fun: () => WebBrowser.openBrowserAsync('https://lucaslinardapps.blogspot.com/2023/07/daily-diet-privacy-and-security.html'),
    }
];

export default function Settings() {
  return (
    <Container>
      <Header>
        <Text fontFamily="BOLD" fontSize="XL2">
          Settings
        </Text>
      </Header>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <OptionButton
          onPress={item.fun}
          >
            <Text>{item.title}</Text>
          </OptionButton>
        )}
        style={{ width: "100%" }}
      />
    </Container>
  );
}
