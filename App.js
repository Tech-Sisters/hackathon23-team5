import { StyleSheet, Text, View, Image, Button } from 'react-native';
const logoImg = require('./assets/favicon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={{width:60, height: 60, backgroundColor: 'gainsboro', borderRadius: 50}}></Image>
        <View style={{width:270, height: 70, backgroundColor: "gainsboro", marginTop: 30, marginBottom: 30}}>

        </View>
        <Text style={{marginTop: 20, marginBottom: 40, textAlign: 'center', backgroundColor: "gainsboro" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
      <Button 
        title="Let's do this" 
        onPress={()=> console.log("Button Press")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  }
  
});
