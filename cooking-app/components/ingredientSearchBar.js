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

const IngredientSearchBar = ({ingredientsList, removeIngredient}) => {
  const textInputRef = {};

  const deleteTextBubble = (location) => {
    removeIngredient(ingredientsList.slice(0, location).concat(ingredientsList.slice(location + 1))); 
  };
  
  const TextBubble = ({content, index}) => (
    <Pressable style={styles.bubblePressable} onPress={() => deleteTextBubble(index)}>
      <Text style={styles.textBubble}>{content}</Text>
    </Pressable>
  );

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Ingredients"
          ref={input => { this.textInput = input }}
          onEndEditing={obj => {
            this.textInput.clear();
            return removeIngredient((oldArray) => [obj.nativeEvent.text, ...oldArray]);
          }}
        />
        <FlatList
          data={ingredientsList}
          renderItem={(item) => {
            return <TextBubble content={item.item} index={item.index}/>;
        }}
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