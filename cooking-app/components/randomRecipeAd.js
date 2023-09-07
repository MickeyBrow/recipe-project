import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
  Button,
} from "react-native";

import {
  Card,
  Icon,
} from "react-native-elements";

const RandomRecipeAd = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Don't know what to eat?</Text>
        <Text>Generate recipe</Text>
        <Text>*based on your preferences</Text>
        <Button
          title="Generate"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%',
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'flex-start',
    padding: 12
  },
});

export default RandomRecipeAd;