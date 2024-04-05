import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <View className='flex-1 items-center justify-center bg-slate-700'>
      <Link
        href='/'
        className='bg-blue-500 text-white p-2 rounded-lg'

      >
        <Text>Go to index</Text>
      </Link>

    </View>
  )
}

export default home