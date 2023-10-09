import { useState, useEffect } from "react";
import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import AllRecipeFlatList from "../components/allRecipeFL";

export default function RandomRecipeScreen({navigation}) {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch('http://10.0.0.11:5000/randomPage')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.fullContainer}>
        <AllRecipeFlatList data={recipes} title="Random Recipes"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    margin: 12,
    flexDirection: 'column',
  },
});