import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Page() {
  return (
    <>
      <View>
        <Text>Hi</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
