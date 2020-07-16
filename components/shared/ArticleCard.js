import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ArticleCard = () => {
  return (
    <TouchableOpacity style={styles.article_card}>
      <View style={styles.avatar_part}>
        <Avatar.Image size={50} source={require("./assets/profile.jpg")} />
        <View style={styles.avatar_txt}>
          <Text style={styles.text_avatar_name}>Thurairajah Yathurshan</Text>
          <Text style={styles.text_avatar_moment}>2 hours ago</Text>
        </View>
      </View>
      <Text style={styles.title}>Future of Virtual Reality</Text>
      <Image source={require("./assets/card1.jpg")} style={styles.card} />
      <View style={styles.bottomRow}>
        <View style={styles.sourceContainer}>
          <FontAwesome name="comments" style={styles.comment_icon} size={30} />
          <TouchableOpacity>
            <Text style={styles.comment_text}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome style={styles.star_icon} name="star" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line_avatar} />
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
  card: {
    width: "90%",
    height: 195,
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  sourceContainer: {
    width: "50%",
    flexDirection: "row",
  },
  sourceContainero: {
    width: "50%",
    flexDirection: "row-reverse",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    color: "grey",
    fontSize: 15,
    marginVertical: 2,
    fontWeight: "700",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comment_icon: {
    color: "grey",
    paddingTop: 5,
  },
  star_icon: {
    color: "grey",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  comment_text: {
    color: "grey",
    paddingTop: 10,
    fontSize: 16,
    paddingHorizontal: 5,
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
    marginTop: 5,
    borderColor: "gainsboro",
  },
});
