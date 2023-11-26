import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabs from '../../common/BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard() {
  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>
        <BottomTabs></BottomTabs>
      </View>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
    
  )
}

