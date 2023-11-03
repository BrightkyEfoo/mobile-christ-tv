import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../styles/Constants";
type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};
const maxHeight = Dimensions.get("window").height;
const CustomDrawer = ({ state, descriptors, navigation }: Props) => {
  // navigation.getState().
  console.log(state.index);
  return (
    <View style={{ height: maxHeight }}>
      <View
        style={{
          paddingVertical: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 150,
            height: 100,
          }}
          resizeMode="contain"
          source={require("../../assets/images/playstore-icon.png")}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: Colors.primaryBackground,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View style={{ paddingRight: 30 }}>
          <TouchableHighlight
            style={state.index === 0 ? styles.navLinkS : styles.navLink}
            underlayColor={"rgba(0,0,0,0)"}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <View style={styles.navLinkSub}>
              <Fa5Icon name="home" color="white" size={20} />
              <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
                Acceuil
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.navLink}
            underlayColor={"rgba(0,0,0,0)"}
            activeOpacity={0.9}
          >
            <View style={styles.navLinkSub}>
              <Fa5Icon name="newspaper" color="white" size={20} />
              <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
                Site Web
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={state.index === 1 ? styles.navLinkS : styles.navLink}
            underlayColor={"rgba(0,0,0,0)"}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("about");
            }}
          >
            <View style={styles.navLinkSub}>
              <Fa5Icon name="info-circle" color="white" size={20} />
              <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
                A Propos
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={{
          flexShrink: 1,
          height: 95,
          backgroundColor: "green",
          padding: 8,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableHighlight
          style={styles.socialLinks}
          underlayColor={"rgba(0,0,0,0)"}
          activeOpacity={0.9}
        >
          <Fa5Icon name="instagram" color="green" size={20} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.socialLinks}
          underlayColor={"rgba(0,0,0,0)"}
          activeOpacity={0.9}
        >
          <Fa5Icon name="facebook" color="green" size={20} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.socialLinks}
          underlayColor={"rgba(0,0,0,0)"}
          activeOpacity={0.9}
        >
          <Fa5Icon name="twitter" color="green" size={20} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.socialLinks}
          underlayColor={"rgba(0,0,0,0)"}
          activeOpacity={0.9}
        >
          <Fa5Icon name="youtube" color="green" size={20} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navLink: {
    borderWidth: 0,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 18,
  },
  navLinkS: {
    borderWidth: 0,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.primary,
    padding: 18,
  },
  navLinkSub: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    gap: 25,
  },
  socialLinks: {
    height: 30,
    width: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
  },
});

export default CustomDrawer;
