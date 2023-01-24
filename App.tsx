import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#ff009d','white', 'red']} style={{height: '100%', width: '100%', flex: 1}}>
    </LinearGradient>

  );
}
