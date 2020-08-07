import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
} from "react-native";

import { Avatar } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CommentCard from "../shared/CommentCard";
import Feather from "react-native-vector-icons/Feather";
import ArticleCardFullView from "../shared/ArticleCardFullView";
import { useSelector, useDispatch } from "react-redux";
import { postComments, setComment } from "../Store/Actions/comments";
const ArticleFullView = ({ navigation, route }) => {
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

  const articleId = route.params.id;
  const article = useSelector((state) =>
    state.article.allPosts.find((article) => article.id === articleId)
  );
  useEffect(() => {
    const fetchComments = async () => {
      await dispatch(setComment(articleId));
    };
    fetchComments();
  }, []);
  const comment = useSelector((state) => state.comment.allComments);

  const dispatch = useDispatch();

  const postCommentHandler = async () => {
    await dispatch(postComments(articleId, data.comment));
    setData({
      ...data,
      comment: "",
    });
  };
  //console.log(article);
  return (
    <View style={{ paddingTop: 10, flex: 1 }}>
      <TouchableOpacity
        style={{ paddingHorizontal: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.back_txt}>Back</Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ArticleCardFullView
            avatar={article.avatar}
            name={article.owner}
            time={article.moment}
            title={article.title}
            image={article.imgUrl}
            description={article.description}
            referenceLink={article.referenceLink}
          />

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
                <View style={styles.action}>
                  <TextInput
                    value={data.comment}
                    placeholder="Write a comment..."
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={(val) => textInputChange(val)}
                    multiline
                  />
                  {data.check_textInputChange ? (
                    <TouchableOpacity
                      onPress={postCommentHandler}
                      style={{ paddingRight: 5 }}
                    >
                      <Animatable.View animation="bounceIn">
                        <Feather
                          name="message-circle"
                          color="dodgerblue"
                          size={20}
                        />
                      </Animatable.View>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
          {comment.map((comment) => (
            <CommentCard
              key={comment.id}
              userName={comment.owner}
              time={comment.moment}
              comment={comment.comment}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleFullView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 2,
  },
  back_txt: {
    paddingVertical: 25,
    color: "dodgerblue",
    fontWeight: "bold",
    fontSize: 16,
  },
  comment_txt: {
    //flex: 1,
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
  comment_section: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    width: "100%",
  },
});
