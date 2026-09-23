
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

export default function RootLayout() {

  const [fontes] = useFonts({
    MontserratLight: require("@/assets/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    PermanentMarkerRegular: require("@/assets/fonts/PermanentMarker-Regular.ttf"),
  })

  if (!fontes) {
    console.log('Carregando fontes...')
    return null
  }

  return (
    <SafeAreaProvider>
      <StatusBar style='light' />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='fundamentos' />
        <Stack.Screen name='novoUsuario' />
      </Stack>
    </SafeAreaProvider>
  )
}
