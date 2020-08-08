import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Avatar, Divider } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CardBottom from "./CardBottom";
import moment from "moment";
import { deleteArtricles } from "../Store/Actions/articles";
import { useDispatch } from "react-redux";

const ArticleCard = (props) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteArtricles(id));
  };

  const { id } = props;
  return (
    <View style={styles.article_card}>
      <View style={styles.avatar_part}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Avatar.Image size={50} source={{ uri: props.avatar }} />
          <View style={styles.avatar_txt}>
            <Text style={styles.text_avatar_name}>{props.name}</Text>
            <Text style={styles.text_avatar_moment}>
              {moment(props.time).fromNow()}
            </Text>
          </View>
        </View>
        {props.editable ? (
          <View style={{ justifyContent: "flex-end" }}>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 12,
              }}
            >
              <TouchableOpacity onPress={props.updateHandler}>
                <FontAwesome name="edit" color="grey" size={23} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: 20 }}
                onPress={() =>
                  Alert.alert(
                    "Confirm",
                    "Are you going to delete this Article ?",
                    [
                      {
                        text: "Delete",
                        onPress: () => deleteHandler(props.id),
                      },
                      { text: "Cancel" },
                    ]
                  )
                }
              >
                <FontAwesome name="trash" color="grey" size={23} />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <TouchableOpacity onPress={props.clickHandler}>
        <Text style={styles.title}>{props.title}</Text>
        {props.image ? (
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.card}
          />
        ) : (
          <Text style={styles.text_avatar_moment}>Read more...</Text>
        )}
        {/* <Image source={{ uri: props.image }} style={styles.card} /> */}
      </TouchableOpacity>
      <CardBottom id={id} />
      <Divider style={styles.line} />
      {/*<View style={styles.line_avatar} />*/}
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
    paddingTop: 10,
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
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
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
  line: {
    marginTop: 5,
    height: 1,
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

/*
onPress={() => navigation.navigate("Profile")}
*/
