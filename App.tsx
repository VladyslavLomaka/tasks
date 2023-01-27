import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

let brand = DeviceInfo.getBrand();


export default function App() {
  console.log(brand)


  return (
    <View style={styles.container}>
      <Text>Hello World! it's {brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});