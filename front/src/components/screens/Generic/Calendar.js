import { StatusBar, StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell , faCalendarDays, faUser} from '@fortawesome/free-regular-svg-icons';

export default function Calendar() {
  /* var height = Dimensions.get('window').height; */
var width = Dimensions.get('window').width;
  return (
    // remplacer par listheadercomponents ??
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <ScrollView></ScrollView>
        <View
        style={[styles.homeHeader]}
        >
          {/* row, height, space between, */}
          <FontAwesomeIcon icon={faBell} />
          <View
            style={{flexDirection: 'row'}}>
            <Text> Month 2023</Text>
            <FontAwesomeIcon icon={faCalendarDays} />
          </View>
          <FontAwesomeIcon icon={faUser} />
        </View>
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
  homeHeader: {
    backgroundColor: "pink",
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});


