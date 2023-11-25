import { StyleSheet, Text, View } from 'react-native';

export default function QuizzSubscription() {
  return (
    <View style={styles.container}>
      <Text>Subscription</Text>
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
  title:{
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
