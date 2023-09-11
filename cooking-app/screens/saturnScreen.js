import { useState } from "react";
import { Camera, CameraType } from 'expo-camera';
import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  FlatList,
  SafeAreaView,
} from "react-native";

export default function SaturnScreen({navigation}) {
  const [permission, setPermission] = Camera.useCameraPermissions();

  if (!permission){
    Camera.requestCameraPermissionsAsync()
    .then((response) => setPermission(response));
  }
  else if (!permission.granted){
    return <Text>Access Denied</Text>;
  }
  else{
    return (
      <SafeAreaView style={{height: '95%'}}>
        <Camera style={{flex: 1}} type={CameraType.back}/>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
});