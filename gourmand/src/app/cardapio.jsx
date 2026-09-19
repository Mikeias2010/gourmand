import { View, Pressable } from "react-native"
import { router } from  'expo-router'

export default function Cardapio() {
     const abrirSalgados = () => {
          router.push('./(tabs)/cardapio/salgados')
     }

     return(
          <View>
               <Pressable onPress={abrirSalgados}>
                    Abrir Salgados
               </Pressable>
          </View>
     )
}