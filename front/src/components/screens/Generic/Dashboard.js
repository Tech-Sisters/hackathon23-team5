import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import BottomTabs from '../../common/BottomTabs'

export default function Dashboard() {
  return (
    <SafeAreaView>
      <View>
        <Text>Dashboard</Text>
        <BottomTabs />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})