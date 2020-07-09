import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const ArticleCard = () => {
  return (
    <TouchableOpacity style={styles.article_card}>
      <Animatable.View animation="fadeInUpBig" style={styles.avatar_part}>
        <Avatar.Image size={50} source={require("./assets/profile.jpg")} />
        <View style={styles.avatar_txt}>
          <Text style={styles.text_avatar_name}>Thurairajah Yathurshan</Text>
          <Text style={styles.text_avatar_moment}>2 hours ago</Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={styles.line_avatar} />
    </TouchableOpacity>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  article_card: {
    flex: 1,
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    color: "black",
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeAgo: {
    color: "grey",
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },
  sourceContainer: {
    width: "50%",
    flexDirection: "row",
  },
  sourceContainero: {
    width: "50%",
    flexDirection: "row-reverse",
  },
  avatar_part: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  avatar_txt: {
    marginLeft: 10,
    marginTop: 5,
  },
  text_avatar_name: {
    color: "dimgrey",
    fontSize: 18,
    fontWeight: "bold",
  },
  text_avatar_moment: {
    fontSize: 14,
    color: "grey",
  },
  line_avatar: {
    borderWidth: 1,
    width: 300,
    marginLeft: 20,
    borderColor: "gainsboro",
  },
});
