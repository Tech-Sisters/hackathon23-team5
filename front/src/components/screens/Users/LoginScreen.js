import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Button } from 'react-native';
import { useState, React } from 'react';
import { useNavigation } from "@react-navigation/native"


export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.form}>
        <Image source={require("../../../assets/icons/adaptive-icon.png")} style={styles.image} />
        <Text style={styles.label}>Email</Text>
        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput 
            style={styles.input}    
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
         <Button
            title="Login"
            onPress={() => navigation.navigate("Dashboard")}
        />
    </View>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "f5f5f5"
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height:2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5
    }, 
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold",
    }, 
    input: {
        height: 40,
        borderColor: "grey",
        borderWidth: 0.5,
        marginBottom: 15,
        padding: 10,
        borderRadius: 8,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 50,
    }
})
