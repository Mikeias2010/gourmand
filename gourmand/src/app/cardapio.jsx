import { View, Pressable, StyleSheet } from "react-native"
import { router } from  'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from '@/constants/Fontes'

export default function Cardapio() {
     const abrirSalgados = () => {
          router.push('./(tabs)/cardapio/salgados')
     }

     const abrirDoces = () => {
          router.push('./(tabs)/cardapio/doces')
     }

     return(
          <View style={estilos.conteiner}>
               <Pressable onPress={abrirSalgados}>
                    Abrir Salgados
               </Pressable>
               
               <Pressable onPress={abrirDoces}>
                    Abrir Doces
               </Pressable>
          </View>
     )
}

const estilos = StyleSheet.create({
     conteiner: {
             height: '100%',
             alignItems: 'center',
             backgroundColor: Cores.secundariaClara
     },
})
