import { StyleSheet, View, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

import { Fontes } from '@/constants/Fontes'
import { Botao } from '@/constants/Botao'

export default function Salgados() {

     const retornar = () => {
          router.replace('/')
     }

     return(
          <View>
               <Pressable onPress={retornar} style={estilos.botao}>Voltar</Pressable>
               <Text style={estilos.titulo}>Salgados</Text>
          </View>
     )
}

const estilos = StyleSheet.create({
     conteiner: {

     },
     titulo: {
          fontSize: Fontes.grande2
     },
     botao: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          borderWidth: 2,
          borderRadius: 5
     }
})
