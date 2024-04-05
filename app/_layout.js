import { View, Text } from 'react-native'
import React from 'react'
import { TamaguiProvider } from '@tamagui/core'
import config from '../tamagui.config'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'

const Layout = () => {

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    React.useEffect(() => {
        if (loaded) {
            // can hide splash screen here
        }
    }, [loaded])

    if (!loaded) {
        return null;
    }


    return (
        <TamaguiProvider config={config}>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />

        </TamaguiProvider>

    )
}

export default Layout