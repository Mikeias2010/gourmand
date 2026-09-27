
import { View, Pressable, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from "@/constants/Fontes"

import { MaterialIcons } from '@react-native-vector-icons/material-icons'

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
                    style={estilos.item}
               >
                    <Text style={telaAtual != 'cardapio' ? estilos.texto : estilos.ativa}>
                         Todos
                    </Text>
                    <MaterialIcons name='restaurant' style={estilos.icone}/>
               </Pressable>

               <Pressable
                    onPress={abrirSalgados}
                    style={estilos.item}
               >
                    <Text style={telaAtual != 'salgados' ? estilos.texto : estilos.ativa}>
                         Salgados
                    </Text>
                    <MaterialIcons name='fastfood' style={estilos.icone}/>
               </Pressable>

               <Pressable
                    onPress={abrirDoces}
                    style={estilos.item}
               >
                    <Text style={telaAtual != 'doces' ? estilos.texto : estilos.ativa}>
                         Doces
                    </Text>
                    <MaterialIcons name='cake' style={estilos.icone}/>
               </Pressable>
               
               <Pressable
                    onPress={abrirBebidas}
                    style={estilos.item}
               >
                    <Text style={telaAtual != 'bebidas' ? estilos.texto : estilos.ativa}>
                         Bebidas
                    </Text>
                    <MaterialIcons name='local-cafe' style={estilos.icone}/>
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

     item: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4
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
     },

     icone: {
          color: Cores.terciaria,
          fontSize: Fontes.media1
     }
})