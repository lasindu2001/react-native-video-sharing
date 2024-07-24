import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Welcome = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl'>Welcome</Text>
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