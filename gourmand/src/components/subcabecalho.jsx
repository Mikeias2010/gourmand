import { View, Pressable, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from "@/constants/Fontes"


export function Subcabecalho({telaAtual}){
     
     const abrirCardapio = () => {
          router.push('./cardapio')
     }

     const abrirSalgados = () => {
          router.push('./salgados')
     }
     
     const abrirDoces = () => {
          router.push('./doces')
     }
     
     const abrirBebidas = () => {
          router.push('./bebidas')
     }


     return(
          <View style={estilos.cabecalho}>

               <Pressable
                    onPress={abrirCardapio}
               >
                    <Text style={telaAtual != 'cardapio' ? estilos.texto : estilos.ativa}>Todos</Text>
               </Pressable>

               <Pressable
                    onPress={abrirSalgados}
               >
                    <Text style={telaAtual != 'salgados' ? estilos.texto : estilos.ativa}>Salgados</Text>
               </Pressable>

               <Pressable
                    onPress={abrirDoces}
               >
                    <Text style={telaAtual != 'doces' ? estilos.texto : estilos.ativa}>Doces</Text>
               </Pressable>
               
               <Pressable
                    onPress={abrirBebidas}
               >
                    <Text style={telaAtual != 'bebidas' ? estilos.texto : estilos.ativa}>Bebidas</Text>
               </Pressable>


          </View>
     )
}

const estilos = StyleSheet.create({
     cabecalho: {
          width: '100%',
          height: 35,
          marginBottom: 20,
          backgroundColor: Cores.secundariaEscura, 
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly'
     },

     texto: {
          fontSize: Fontes.media1,
          color: Cores.secundariaClara,
          fontFamily: Fontes.titulo
     },

     ativa: {
          fontSize: Fontes.media1,
          color: Cores.terciaria,
          fontFamily: Fontes.tituloNegrito
     }

})