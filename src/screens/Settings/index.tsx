import { FlatList } from "react-native";
import { Container, Header, IconButton, OptionButton } from "./styles";
import { Text } from "@components/Text";
import * as WebBrowser from "expo-web-browser";
import { ThemeContext } from "styled-components";
import SelectDropdown from "react-native-select-dropdown";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function Settings() {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const languages = i18n.languages.map((item) => {
    return {
      label: t(`langCodes:${item}`),
      code: item,
    };
  });

  const settings = [
    {
      title: t("Common:Language"),
      options: languages,
      fun: () => {},
    },
    {
      title: t("Common:PrivacyPolicys"),
      options: undefined,
      fun: () =>
        WebBrowser.openBrowserAsync(
          "https://lucaslinardapps.blogspot.com/2023/07/daily-diet-privacy-and-security.html"
        ),
    },
  ];
  console.log(languages);
  return (
    <Container>
      <Header>
        <IconButton
          style={{ position: "absolute", left: 10, top: 0 }}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={32} />
        </IconButton>
        <Text fontFamily="BOLD" fontSize="XL2">
          {t("Common:Settings")}
        </Text>
      </Header>
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <OptionButton onPress={item.fun}>
            <Text fontFamily="BOLD">{item.title}</Text>
            {item.options && (
              <SelectDropdown
                data={item.options}
                defaultValue={item.options[0]}
                onSelect={(selectedItem) => {
                  i18n.changeLanguage(selectedItem.code);
                  moment.locale(selectedItem.code);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem.label;
                }}
                rowTextForSelection={(item) => {
                  return item.label;
                }}
                buttonStyle={{ backgroundColor: "transparent" }}
                buttonTextStyle={{
                  fontSize: 16,
                  textAlign: "right",
                  color: theme.COLORS.GREEN_DARK,
                }}
              />
            )}
          </OptionButton>
        )}
        style={{ width: "100%" }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      />
    </Container>
  );
}
