import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'OpenSans-Regular'}}>Hello World!</Text>
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Hello World!</Text>
      <Text style={{fontFamily: 'OpenSans-Italic'}}>Hello World!</Text>
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