import * as React from "react";
import { TextInput } from "react-native-paper";

const TextInputArticle = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={(text) => setText(text)}
      underlineColor="dodgerblue"
      mode="outlined"
      dense="true"
    />
  );
};

export default TextInputArticle;
