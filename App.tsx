import { StyleSheet, Text, View } from 'react-native';
import GradientText from './components/GradientText';

export default function App() {
  return (
    <View style={styles.container}>
 <GradientText>Hello World!</GradientText>
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