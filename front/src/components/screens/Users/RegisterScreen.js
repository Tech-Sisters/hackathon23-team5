import { StatusBar, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function RegisterScreen({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar />
            
            <View style={{ width: 270, height: 70, backgroundColor: "gainsboro" }}>
                <Text style={[styles.title]}>Sign up</Text>
            </View>

            <View style={{ margin: 100 }}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                />

                <TextInput
                    style={styles.input}
                    placeholder='date'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                />
            </View>
            <Button 
                title="Sign in"
                onPress={() => navigation.navigate("Dashboard")}
            ></Button>

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
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'gainsboro',
        margin: 10,
        padding: 8,
        color: 'grey',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    }

});
