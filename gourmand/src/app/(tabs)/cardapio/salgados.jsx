import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function Salgados() {

     const retornar = () => {
          router.replace('/')
     }

     return(
          <View>
               <Pressable onPress={retornar}>Voltar</Pressable>
               <Text>Salgados</Text>
          </View>
     )
}