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

const PictureFunctionalityAd = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Want to see what you can make right now?</Text>
        <Text>Project Pluto</Text>
        <Button
          title="Project Pluto"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '5%',
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'flex-start',
    padding: 12
  },
});

export default PictureFunctionalityAd;