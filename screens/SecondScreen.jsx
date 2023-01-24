import {View,Text,TouchableOpacity, StyleSheet} from 'react-native'

export default function FirstScreen({navigation}) {
    return (
    <View style={styles.container}>
        <Text style ={{fontSize: 24, letterSpacing: 2, marginBottom: 16}}>this is the SecondScreen</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('FirstScreen')}} >
            <Text style={{color:'grey', letterSpacing:1}}>press on me for FirstScreen</Text>
        </TouchableOpacity>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });