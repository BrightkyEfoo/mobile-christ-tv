import { View, Text } from "react-native";
import React from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import WebView from "react-native-webview";
import { ScrollView } from "react-native";

type Props = {
  route: RouteProp<ParamListBase>;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};
const Emission = ({ route, navigation }: Props) => {
  // @ts-ignore
  const { playlistUrl } = route.params;
  console.log(playlistUrl);
  return (
    <ScrollView>
      <WebView source={{ uri: playlistUrl }} style={{ flex: 1 }} />
    </ScrollView>
  );
};

export default Emission;
