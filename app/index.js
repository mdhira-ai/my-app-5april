import { View, Text } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'
import { Button } from 'tamagui'

const index = () => {



  return (
    <View className='flex-1 justify-center items-center bg-red-400 gap-5'>


      <Button size="$3" theme="blue_active">
          Active
        </Button>

        <Button size="$3" variant="outlined">
          Outlined
        </Button>


    </View>
  )
}

export default index