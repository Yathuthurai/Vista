import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Linking,
} from "react-native";
import { Avatar } from "react-native-paper";
import moment from "moment";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CommentCard = (props) => {
  return (
    <View style={{ paddingHorizontal: 8 }}>
      <View style={styles.comment_section}>
        <Avatar.Image
          size={50}
          source={{
            uri:
              "https://www.nicepng.com/png/full/522-5226533_get-beyond-the-usual-suspects-profile-pic-icon.png",
          }}
        />
        <View style={styles.comment_txt}>
          <View>
            <Text
              style={[
                styles.text_comment_avatar_name,
                { paddingHorizontal: 7 },
              ]}
            >
              {props.userName}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingRight: 5,
                paddingHorizontal: 7,
              }}
            >
              {moment(props.time).fromNow()}
            </Text>
          </View>
          <Text style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}>
            {props.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  article_card: {
    //flex: 1,
    //width: "100%",
    //aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  comment_section: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  comment_txt: {
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
  },
  text_comment_avatar_name: {
    color: "dimgrey",
    fontSize: 16,
    fontWeight: "700",
  },
  text_comment_moment: {
    fontSize: 14,
    color: "black",
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
