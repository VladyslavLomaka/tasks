import { StyleSheet,  View } from 'react-native';
import TwitterSvg from './components/TwitterSvg'
import TwitterPixelSvg from './components/TwitterPixelSvg'

export default function App() {
  return (
    <View style={styles.container}>
<TwitterSvg
        width={120}
        height={40}
        fill='black'
        marginBottom={20}
      />
      <TwitterPixelSvg
        width={120}
        height={40}
        fill='blue'
      />
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