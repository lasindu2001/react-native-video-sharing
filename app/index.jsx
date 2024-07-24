import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Link
        href='/profile'
        style={{ color: 'blue' }}
      >
        Go to Profile
      </Link>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})