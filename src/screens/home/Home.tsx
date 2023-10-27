import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native";
import Video from "react-native-video";
import { Dimensions } from "react-native";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
const emissions = [
  {
    text: "KID/JEUNES",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
  {
    text: "DIVERTISSEMENT",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
  {
    text: "SOCIETE",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
  {
    text: "KID/JEUNES",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
  {
    text: "SOCIETE",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
  {
    text: "DIVERTISSEMENT",
    playlistUrl:
      "https://www.youtube.com/playlist?list=PLIl2EzNYri0clPh69L4z-vqOkfR7AK-To",
  },
];

const programmes = [
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
  {
    img: "https://www.journaldemickey.com/wp-content/uploads/2023/01/donjons-et-dragons-819x1024.jpg",
    text1: "Samedi & Dimanche",
    text2: "DE 16H00 A 17H30",
  },
];

const bouquets = [
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
  {
    img: "https://i0.wp.com/tech-ish.com/wp-content/uploads/2015/07/Startimes-Logo.png",
  },
];

const maxWidth = Dimensions.get("screen").width - 20;

type Props = {
  navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
};

const Home = ({ navigation }: Props) => {
  const handleCategoriePress = (
    e: GestureResponderEvent,
    element: (typeof emissions)[0]
  ) => {
    navigation.navigate("emissions", {
      playlistUrl: element.playlistUrl,
    });
  };
  return (
    <ScrollView>
      <View>
        <Video
          source={{
            uri: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
          }} // the video file
          // source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }} // the video file
          paused={true}
          controls
          style={{
            width: maxWidth,
            marginHorizontal: 10,
            height: 250,
          }}
          resizeMode="cover"
          // repeat={true}
        />
        <TouchableHighlight underlayColor={"rgba(0,0,0,0)"} activeOpacity={0.9}>
          <View
            style={{
              backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 15,
              padding: 10,
            }}
          >
            <Fa5Icon name="redo-alt" color="white" size={18} />
            <Text style={{ ...Section1Styles.whiteText }}>
              Rafraichir la Tv
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          Nos Emissions
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {emissions.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section1Styles.emissionCards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
                onPress={(event) => handleCategoriePress(event, e)}
              >
                <Text style={{ ...Section1Styles.whiteText }}>{e.text}</Text>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      {/* section 2 */}
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          La grille de nos programmes
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {programmes.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section2Styles.cards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
              >
                <View style={Section2Styles.cardView}>
                  <Image
                    source={{ uri: e.img }}
                    resizeMode="cover"
                    style={Section2Styles.image}
                  />
                  <Text style={{ ...Section2Styles.text1 }}>{e.text1}</Text>
                  <Text style={{ ...Section2Styles.text2 }}>{e.text2}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      {/* section 3 */}
      <View style={Section1Styles.section1}>
        <Text style={{ ...Section1Styles.textUpperCase, paddingHorizontal: 8 }}>
          Retrouvez Nous Sur les bouquets
        </Text>
        <ScrollView horizontal style={Section1Styles.emissionsContainer}>
          {bouquets.map((e, i) => {
            return (
              <TouchableHighlight
                key={i}
                style={Section2Styles.cards}
                underlayColor={"rgba(0,0,0,0.2)"}
                activeOpacity={0.2}
              >
                <View style={Section3Styles.cards}>
                  <Image
                    source={{ uri: e.img }}
                    resizeMode="cover"
                    style={Section2Styles.image}
                  />
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const Section3Styles = StyleSheet.create({
  cards: {
    borderRadius: 8,
    backgroundColor: "rgb(220,220,220)",
    marginRight: 10,
    marginTop: 8,
    padding: 6,
  },
});

const Section2Styles = StyleSheet.create({
  cardView: {
    marginTop: 8,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 6,
  },
  text1: {
    fontWeight: "400",
    fontSize: 13,
    textAlign: "center",
    marginVertical: 5,
  },
  text2: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
  },
  cards: {
    marginRight: 15,
  },
});

const Section1Styles = StyleSheet.create({
  section1: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  emissionCards: {
    backgroundColor: "rgb(150,185,75)",
    borderRadius: 5,
    borderWidth: 0,
    padding: 6,
    marginRight: 10,
  },
  whiteText: {
    color: "white",
  },
  textUpperCase: {
    textTransform: "uppercase",
  },
  emissionsContainer: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    padding: 8,
  },
});

export default Home;
