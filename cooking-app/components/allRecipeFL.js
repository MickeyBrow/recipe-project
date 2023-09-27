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
    <Text>{recipe.title}</Text>
    <View style={styles.topHalf}>
      <Image
        style={{width: 200, height: 200, flexBasis: '70%'}}
        source={{uri: recipe.image}}
      />
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
        <Text style={{fontWeight: 'bold', marginBottom: 10}}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => {
            console.log(item);
            return (<Cards recipe={item}/>);
          }}
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
    alignItems: 'flex-start',
    padding: 12
  },
  card: {
    marginBottom: 30,
    backgroundColor: 'yellow',
  },
  topHalf: {
    flexDirection: 'row',
  }
});

export default AllRecipeFlatList;