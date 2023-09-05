import { 
  StyleSheet, 
  TextInput, 
  View, 
  SafeAreaView,
} from "react-native";

import RecipeModule from "../../cooking-app/components/recipeModule";

export default function HomeScreen({navigation}) {
  const images = ["https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20210223094656", "https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/1200?cb=20230803224121", "https://sportshub.cbsistatic.com/i/2021/03/18/8efc04dc-59f0-47c2-8653-4ea8d3b42da5/naruto-itachi-uchiha-anime-tribute-1239755.jpg?width=1200", "https://static.wikia.nocookie.net/naruto/images/2/20/Gaara_in_Part_I.png/revision/latest/scale-to-width-down/1200?cb=20221010023824"]

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Enter Ingredients"
        />
      </View>
      <View style={styles.body}>
        <RecipeModule
          headerTitle="Hot Recipes"
          recipes = {images}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },

  body: {
    margin: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});