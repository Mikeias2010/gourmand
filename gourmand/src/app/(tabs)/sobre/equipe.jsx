import { View, Pressable, Text } from "react-native"
import { router } from  'expo-router'

export default function Cardapio() {
     const retornar = () => {
          router.replace('/')
     }

     return(
          <View>
               <Pressable onPress={retornar}>
                    Retornar
               </Pressable>

               <Text>Equipe</Text>
          </View>
     )
}