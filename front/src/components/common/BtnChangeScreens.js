import { View, StyleSheet, TouchableOpacity, Text} from "react-native";

export default function Button({ text }) {

  return (
    <View>
    <TouchableOpacity 
        style={[styles.clickButton]}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  </View>
  );
}



const styles = StyleSheet.create({
  clickButton: {
    backgroundColor: "lightgrey",
    paddingVertical: 13, 
    paddingHorizontal: 30,
    borderRadius: 17,
    shadowColor: 'gainsboro', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  }
});
