import { useState } from "react";
import { 
  StyleSheet, 
  View,
  TextInput,
  FlatList,
  Button,
  Text,
  Pressable,
} from "react-native";

import {
  Card,
  Icon,
} from "react-native-elements";

const TextBubble = ({content}) => (
  <Pressable style={styles.bubblePressable}>
    <Text style={styles.textBubble}>{content}</Text>
  </Pressable>
);

const IngredientSearchBar = () => {
  const [currentSearch, setCurrent] = useState("");
  const [ingredientsList, setIngredientsList]= useState([]);

  const textInputRef = {};

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Ingredients"
          ref={input => { this.textInput = input }}
          onEndEditing={obj => {
            this.textInput.clear();
            return setIngredientsList((oldArray) => [...oldArray, obj.nativeEvent.text]);
          }}
        />
        <FlatList
          data={ingredientsList}
          renderItem={({item}) => <TextBubble content={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: '3%'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '3%'
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 1,
  },

  bubblePressable:{
    width: 50,
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 2,
    justifyContent: 'center',
    marginRight: 20,
  },
  textBubble: {
    textAlign: 'center',
  }
});

export default IngredientSearchBar;