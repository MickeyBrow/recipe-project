import { 
  StyleSheet, 
  View,
  Text,
  FlatList,
  Button,
  Image,
} from "react-native";

import {
  Card,
  Icon,
} from "react-native-elements";

const Cards = ({recipe}) => (
  <View style={styles.card}>
    <View style={styles.topHalf}>
      <Image
        style={{width: 200, height: 200, flexBasis: '50%'}}
        source={{uri: recipe.imageUri}}
      />
      <Text style={{flex: 1, flexBasis: '50%'}}>{recipe.name}</Text>
    </View>
    <View>
      <Text>Description Here Maybe</Text>
    </View>
  </View>
);

const AllRecipeFlatList = ({data, title}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Cards recipe={item}/>}
          showsVerticalScrollIndicator={false}
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
  card: {
    backgroundColor: 'green',
    marginBottom: 30,
  },
  topHalf: {
    flexDirection: 'row'
  }
});

export default AllRecipeFlatList;