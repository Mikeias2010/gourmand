import { View, Pressable, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from "@/constants/Fontes"


export function Cabecalho({titulo, inicial}){
     const retornar = () => {
          router.replace('/')
     }

     return(
          <View style={inicial == true ? estilos.cabecalhoInicio : estilos.cabecalho}>

               {inicial==true ? <></> :
                    <Pressable onPress={retornar} style={estilos.botao}>Voltar</Pressable>
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
          height: 50,
          marginBottom: 20,
          backgroundColor: Cores.terciariaEscura, 
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#2b219c'
     },
     botao: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        padding: 3,
        borderWidth: 2,
        borderRadius: 5,
        color: '#F8F9FA'
     },
     titulo: {
        fontSize: Fontes.grande2,
        position: 'absolute',
        alignSelf: 'center',
        color: Cores.terciaria
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