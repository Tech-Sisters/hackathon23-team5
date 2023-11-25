import { StatusBar, StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LaunchScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <StatusBar style="auto" /> 
        <Image source={require("../../screens/Generic/LaunchScreen")} style={styles.image} />
        <View style={{ width: 270, height: 70, backgroundColor: "gainsboro", marginTop: 30, marginBottom: 30 }}>
            <Text style={styles.title}>LunarFlow</Text>
        </View>
        <Text style={styles.textContainer}>
            LunarFlow est une application qui vous permettra de suivre votre cycle menstruel, mais surtout vos humeurs et vos symptômes menstruels et prémenstruels.

            Cette application vous aidera à maintenir votre foi même lorsque vous serez au plus bas. En fonction de vos humeurs, LunarFlow vous enverra des notifications de divers rappels et messages bienveillants et positifs pour vous aider à aller mieux et garder de bonnes habitudes religieuses même lorsque vous ne priez pas.
        </Text>
        <Button
            title="Let's do this"
            onPress={() => navigation.navigate("Register")}
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
        margin: 40,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    },
    textContainer: {
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: "lightpink"
    },
});
