import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { ScrollView } from "react-native";

type Props = {
  route: RouteProp<ParamListBase>;
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Emission = ({ route, navigation }: Props) => {
  // @ts-ignore
  const { playlistUrl } = route.params;
  console.log(playlistUrl);
  const webViewScript = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify({key : "value"}));
})();`;
  return (
    <ScrollView>
      <View>
        <WebView
          source={{ uri: playlistUrl }}
          style={{
            flex: 1,
            width: width,
            height: height * 4,
            position: "relative",
            top: -40,
          }}
          onMessage={(event: WebViewMessageEvent) => {
            console.log("height", event.nativeEvent.data);
          }}
          injectedJavaScript={webViewScript}
        />
      </View>
    </ScrollView>
  );
};

export default Emission;
