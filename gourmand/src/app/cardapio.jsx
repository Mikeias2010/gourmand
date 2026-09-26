import { View, Pressable, StyleSheet, Text } from "react-native"
import { router } from  'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from '@/constants/Fontes'
import { Cabecalho } from "@/components/cabecalho"
import { Subcabecalho } from "@/components/subcabecalho"

export default function Cardapio() {
     const abrirSalgados = () => {
          router.push('./salgados')
     }

     const abrirDoces = () => {
          router.push('./doces')
     }

     return(
          <View style={estilos.conteiner}>
               
               <Cabecalho titulo='Cardápio' />

               <Subcabecalho telaAtual='cardapio' />

               <Pressable onPress={abrirSalgados}>
                    <Text>Abrir Salgados</Text>
               </Pressable>
               
               <Pressable onPress={abrirDoces}>
                    <Text>Abrir Doces</Text>
               </Pressable>

               <Text>
                    Principais pratos:
               </Text>
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
