import { View, Pressable, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from  'expo-router'

import { Cores } from "@/constants/Cores"
import { Cabecalho } from "@/components/cabecalho"

export default function Cardapio() {

     return(
          <SafeAreaView>

               <View style={estilos.conteiner}>

                    <Cabecalho titulo='Cliente' />


                    <Text>Cliente</Text>
               </View>

          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({
     conteiner: {
          height: '100%'
     }
})
