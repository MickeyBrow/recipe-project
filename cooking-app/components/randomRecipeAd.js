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

const RandomRecipeAd = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Don't know what to eat?</Text>
        <Text>Generate recipe</Text>
        <Button
          title="Generate"
          onPress={() => navigation.navigate('Random')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'flex-start',
    padding: 12
  },
});

export default RandomRecipeAd;