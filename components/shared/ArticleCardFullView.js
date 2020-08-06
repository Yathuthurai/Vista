import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Linking,
} from "react-native";
import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CardBottom from "./CardBottom";
import CommentCard from "./CommentCard";
import Feather from "react-native-vector-icons/Feather";
import moment from "moment";

const ArticleCard = (props) => {
  const [data, setData] = React.useState({
    comment: "",
    check_textInputChange: false,
  });
  const textInputChange = (val) => {
    if (val.length >= 0) {
      setData({
        ...data,
        comment: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        comment: val,
        check_textInputChange: true,
      });
    }
  };

  return (
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
      <TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Image source={{ uri: props.image }} style={styles.card} />
      </TouchableOpacity>
      <View style={styles.line_avatar} />
      <Text style={{ textAlign: "justify" }}>{props.description}</Text>
      <Text style={{ textAlign: "justify" }}>References: </Text>
      <Text
        onPress={() => Linking.openURL(props.referenceLink)}
        style={{ textAlign: "justify", color: "dodgerblue" }}
      >
        {props.referenceLink}
      </Text>
      <View style={styles.line_avatar} />
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
  comment_section: {
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
  comment_txt: {
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
  },
  text_avatar_name: {
    color: "dimgrey",
    fontSize: 18,
    fontWeight: "bold",
  },
  text_comment_avatar_name: {
    color: "dimgrey",
    fontSize: 16,
    fontWeight: "700",
  },
  text_avatar_moment: {
    fontSize: 14,
    color: "grey",
  },
  text_comment_moment: {
    fontSize: 14,
    color: "black",
  },
  line_avatar: {
    borderWidth: 1,
    width: 320,
    marginLeft: 20,
    marginTop: 5,
    borderColor: "gainsboro",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "slategray",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
});

{
  /*<View style={styles.sourceContainer}>
          <FontAwesome name="comments" style={styles.comment_icon} size={30} />
          <TouchableOpacity>
            <Text style={styles.comment_text}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome style={styles.star_icon} name="star" size={25} />
          </TouchableOpacity>
        </View>*/
}

{
  /*<View style={styles.comment_section}>
            <Avatar.Image size={50} source={{ uri: props.avatar }} />
            <View style={styles.comment_txt}>
              <Text
                style={[
                  styles.text_comment_avatar_name,
                  { paddingHorizontal: 7 },
                ]}
              >
                Mr Bean
              </Text>
              <Text
                style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}
              >
                Thank you for sharing this artcile Thank you for sharing this
                sharing this artcile and cool 😊
              </Text>
            </View>
          </View>
          <View style={styles.comment_section}>
            <Avatar.Image
              size={50}
              source={{
                uri:
                  "https://i1.sndcdn.com/avatars-000001694032-utrffl-t500x500.jpg",
              }}
            />
            <View style={styles.comment_txt}>
              <Text
                style={[
                  styles.text_comment_avatar_name,
                  { paddingHorizontal: 7 },
                ]}
              >
                Mr Vadivelu
              </Text>
              <Text
                style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}
              >
                Ippa naa enna solrathu
              </Text>
            </View>
          </View>
          <View style={styles.comment_section}>
            <Avatar.Image
              size={50}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/proxy/3TxK8CjVz4VMp-d0Jg6mBHNwiQnAtC8-PlIYmg_lF1VKcoT-qDbg46L9679WRoZhdxDbOg1TSuu9rgrhe-GcHENKevL3FlYiC_KU0XdJWIJ2kgISnS7bUHxugkGkkXPhKUkahCb9tp_JcpsND1Z0Qns",
              }}
            />
            <View style={styles.comment_txt}>
              <Text
                style={[
                  styles.text_comment_avatar_name,
                  { paddingHorizontal: 7 },
                ]}
              >
                Mr Vivek
              </Text>
              <Text
                style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}
              >
                Ivanukala ellaam paaththa rompa nallavunka maari theriyalaye
              </Text>
            </View>
          </View>
          <View style={styles.comment_section}>
            <Avatar.Image size={50} source={{ uri: props.avatar }} />
            <View style={styles.comment_txt}>
              <Text
                style={[
                  styles.text_comment_avatar_name,
                  { paddingHorizontal: 7 },
                ]}
              >
                Mr Bean
              </Text>
              <Text
                style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}
              >
                Thank you for sharing this artcile
              </Text>
            </View>
          </View>
          <View style={styles.comment_section}>
            <Avatar.Image
              size={50}
              source={{
                uri:
                  "https://sourcefb.com/assets/memes/picture/senthil-photos-pictures-stills.jpg",
              }}
            />
            <View style={styles.comment_txt}>
              <Text
                style={[
                  styles.text_comment_avatar_name,
                  { paddingHorizontal: 7 },
                ]}
              >
                Mr Bean
              </Text>
              <Text
                style={[styles.text_comment_moment, { paddingHorizontal: 7 }]}
              >
                Thank you for sharing this artcile
              </Text>
            </View>
          </View>
        </View>*/
}
