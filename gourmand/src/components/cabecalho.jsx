import { View, Pressable, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from "@/constants/Fontes"

import { MaterialIcons } from '@react-native-vector-icons/material-icons'


export function Cabecalho({titulo, inicial}){
     const retornar = () => {
          router.replace('/')
     }

     return(
          <View style={inicial == true ? estilos.cabecalhoInicio : estilos.cabecalho}>

               {inicial==true ? <></> :
                    <Pressable onPress={retornar} style={estilos.botao}><MaterialIcons name='exit-to-app' style={estilos.icone} /></Pressable>
               }

               <Text style={titulo == 'Gourmand' ? estilos.logo : estilos.titulo}>
                    {titulo}
               </Text>

          </View>
     )
}

const estilos = StyleSheet.create({
     cabecalhoInicio: {
          width: '100%',
          height: 65,
          backgroundColor: Cores.primaria,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 4,
          borderColor: '#c93530'
    },

     cabecalho: {
          width: '100%',
          height: 60,
          backgroundColor: Cores.terciariaEscura, 
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: '#2b219c'
     },
     botao: {
        alignSelf: 'flex-start',
        width: 30,
        height: 30,
        marginLeft: 18
     },
     icone: {
          color: Cores.terciaria,
          fontSize: Fontes.grande1
     },
     titulo: {
        fontSize: Fontes.grande2,
        position: 'absolute',
        alignSelf: 'center',
        color: Cores.terciaria,
        fontFamily: Fontes.titulo
     },

     logo: {
        fontSize: Fontes.enorme,
        position: 'absolute',
        alignSelf: 'center',
        color: Cores.terciaria ,
        fontFamily: Fontes.logo
     },
     texto: {
          marginTop: 10,
          fontSize: Fontes.medio2,
          color: Cores.secundariaEscura
     }
})