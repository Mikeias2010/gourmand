import { View, Pressable, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from  'expo-router'

import { Cabecalho } from "@/components/cabecalho"

export default function Cardapio() {

     return(
          <SafeAreaView>
               
               <View>
                    <Cabecalho titulo='Equipe' />

                    <View>
                         <Text>Equipe</Text>
                    </View>

               </View>

          </SafeAreaView>
     )
}