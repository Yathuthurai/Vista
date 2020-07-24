import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CardBottom from "./CardBottom";

const ArticleCard = () => {
  return (
    <View>
      <View style={styles.article_card}>
        <View style={styles.avatar_part}>
          <Avatar.Image
            size={50}
            source={{
              uri:
                "https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip",
            }}
          />
          <View style={styles.avatar_txt}>
            <Text style={styles.text_avatar_name}>Thurairajah Yathurshan</Text>
            <Text style={styles.text_avatar_moment}>a moment ago</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.title}>Future of Artificial Inteligence</Text>
          <Image
            source={{
              uri:
                "https://enterprisetalk.com/wp-content/uploads/2019/06/Human-Intelligence-Can-Fix-AI-Shortcomings-1.jpg",
            }}
            style={styles.card}
          />
        </TouchableOpacity>
        <View style={styles.line_avatar} />
        <ScrollView>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
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
    width: 320,
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
