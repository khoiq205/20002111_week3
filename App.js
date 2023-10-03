//gradient
//
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Image source={require('./assets/Ellipse 8.png')} style={{
          width: '100px',
          height: '100px'
        }}>

        </Image>
      </View>
      <View style={styles.style2}>
        <Text style={styles.text2}>
          GROW {'\n'}YOUR BUSINESS</Text>
      </View>
      <View style={styles.style3}>
        <Text style={styles.text3}>
          We will help you to grow your business using {'\n'} online server
        </Text>
      </View>
      <View style={styles.style4}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 204, 249, 0.36) 0%, #00CCF9 100%)',
  },
  style1: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  style2: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
 
  },
  text2:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  style3: {
    flex: 2,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  text3:{
    fontSize:15,
    textAlign:'center',
  },
  style4: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between', // Canh ngang giữa các thành phần
    paddingHorizontal:60,
  },
  button:{
    backgroundColor:'yellow',
    width:'100px',
    height:'50px',
    borderRadius:5,
    justifyContent:'center'
  },
  buttonText:{
    fontWeight:'bold',
    textAlign:'center'
  }
});
