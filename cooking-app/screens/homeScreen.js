import { 
  StyleSheet, 
  TextInput, 
  View, 
  SafeAreaView,
} from "react-native";

import RecipeModule from "../../cooking-app/components/recipeModule";

export default function HomeScreen({navigation}) {
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