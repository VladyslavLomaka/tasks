import { StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Config.NEWS_API}</Text>
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