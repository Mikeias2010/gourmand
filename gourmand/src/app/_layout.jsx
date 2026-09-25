
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

export default function RootLayout() {

  const [fontes] = useFonts({
    NotoSerif: require('@/assets/fonts/NotoSerif-Regular.ttf'),
    NotoSerifBold: require('@/assets/fonts/NotoSerif-Bold.ttf'),
    NotoSerifItalic: require('@/assets/fonts/NotoSerif-Italic.ttf'),

    PlayfairDisplay: require('@/assets/fonts/PlayfairDisplay-Regular.ttf'),
    PlayfairDisplayBold: require('@/assets/fonts/PlayfairDisplay-Bold.ttf'),

    PinyonScript: require('@/assets/fonts/PinyonScript-Regular.ttf')
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
        <Stack.Screen name='cardapio' />
        <Stack.Screen name='sobre' />
      </Stack>
    </SafeAreaProvider>
  )
}
