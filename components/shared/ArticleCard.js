import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CardBottom from "./CardBottom";
import moment from "moment";

const ArticleCard = (props) => {
  return (
    <View>
      <View style={styles.article_card}>
        <View style={styles.avatar_part}>
          <Avatar.Image size={50} source={{ uri: props.avatar }} />
          <View style={styles.avatar_txt}>
            <Text style={styles.text_avatar_name}>{props.name}</Text>
            <Text style={styles.text_avatar_moment}>
              {moment(props.time).fromNow()}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.clickHandler}>
          <Text style={styles.title}>{props.title}</Text>
          <Image source={{ uri: props.image }} style={styles.card} />
        </TouchableOpacity>
        <CardBottom />
        <View style={styles.line_avatar} />
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  article_card: {
    //flex: 1,
    //width: "100%",
    //aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  card: {
    width: "100%",
    height: 195,
    //aspectRatio: 16 / 9,
    borderRadius: 5,
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
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
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

/*
<View style={styles.sourceContainer}>
          <FontAwesome name="comments" style={styles.comment_icon} size={30} />
          <TouchableOpacity>
            <Text style={styles.comment_text}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome style={styles.star_icon} name="star" size={25} />
          </TouchableOpacity>
        </View>
*/
