import { useState, useRef, useEffect } from "react";
import { Camera, CameraType } from 'expo-camera';
import { Icon } from 'react-native-elements';
import { 
  StyleSheet, 
  TextInput, 
  View,
  Text, 
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";

export default function SaturnScreen({navigation}) {
  const [permission, setPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState();

  const cameraRef = useRef();

  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (!permission){
    Camera.requestCameraPermissionsAsync()
    .then((response) => setPermission(response));
  }
  else if (!permission.granted){
    return <Text>Access Denied</Text>;
  }

  if (photo) {
    // Send the photo to the backend for image segmentation
    return <Text>Picture Taken</Text>
  }
  else {
    return (
      <SafeAreaView style={{height: '100%'}}>
        <Camera style={{flex: 1}} type={CameraType.back} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Icon
              size={70}
              color="white"
              name="radio-button-on-outline"
              type="ionicon"
              onPress={takePic}
            />
          </View>
        </Camera>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});