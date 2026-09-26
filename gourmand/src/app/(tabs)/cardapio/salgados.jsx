import { StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from 'expo-router'

import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'
import { Cabecalho } from '@/components/cabecalho'

export default function Salgados() {

     const retornar = () => {
          router.replace('/')
     }

     const pratos = [
          {
               nome: 'Ratatouille',
               descricao: 'Prato tradicional francês feito com legumes assados.',
               ingredientes: 'Berinjela, abobrinha, tomate, pimentão e ervas.',
               preco: 'R$ 28,00',
               imagem: require('@/assets/images/rattatouile.jpg')
          },
          {
               nome: 'Croissant',
               descricao: 'Clássico francês, crocante por fora e macio por dentro.',
               ingredientes: 'Farinha, manteiga, leite, fermento, açúcar e sal.',
               preco: 'R$ 15,00',
               imagem: require('@/assets/images/croissant.jpg')
          },
          {
               nome: 'Parmentier de Canard',
               descricao: 'Carne de pato coberta por um purê cremoso.',
               ingredientes: 'Pato, batata, manteiga, leite, cebola e temperos.',
               preco: 'R$ 42,00',
               imagem: require('@/assets/images/pardecanard.jpg')
          },
          {
               nome: 'Cassoulet',
               descricao: 'Ensopado tradicional típico do sul da França.',
               ingredientes: 'Feijão branco, linguiça, carne de porco e pato.',
               preco: 'R$ 45,00',
               imagem: require('@/assets/images/cassoulet.jpg')
          },
          {
               nome: 'Galette de Sarrasin',
               descricao: 'Crepe salgado feito com farinha de trigo-sarraceno.',
               ingredientes: 'Trigo-sarraceno, queijo, presunto e ovo.',
               preco: 'R$ 32,00',
               imagem: require('@/assets/images/galette.jpg')
          }
     ]

     return (
          <SafeAreaView style={estilos.container}>

               <Cabecalho titulo='Salgados' />

               <ScrollView>

                    <View style={estilos.corpo}>

                         {pratos.map((prato, index) => (

                              <View
                                   style={estilos.card}
                                   key={index}
                              >

                                   <Text style={estilos.nome}>
                                        {prato.nome}
                                   </Text>

                                   <Image
                                        source={prato.imagem}
                                        style={estilos.imagem}
                                   />

                                   <Text style={estilos.descricao}>
                                        {prato.descricao}
                                   </Text>

                                   <Text style={estilos.ingredientes}>
                                        <Text style={estilos.destaque}>
                                             Ingredientes:
                                        </Text>{' '}
                                        {prato.ingredientes}
                                   </Text>

                                   <Text style={estilos.preco}>
                                        {prato.preco}
                                   </Text>

                              </View>

                         ))}

                    </View>

               </ScrollView>

          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({

     container: {
          flex: 1,
          backgroundColor: Cores.secundariaClara
     },

     cabecalho: {
          width: '100%',
          height: 50,
          marginBottom: 20,
          backgroundColor: Cores.terciariaEscura,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: '#2b219c'
     },

     titulo: {
          fontSize: Fontes.grande2,
          color: '#FFE4E6'
     },

     botao: {
          position: 'absolute',
          left: 10,
          padding: 5,
          borderWidth: 2,
          borderRadius: 5
     },

     textoBotao: {
          color: '#F8F9FA'
     },

     corpo: {
          paddingHorizontal: 12,
          paddingBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
     },

     card: {
          width: '48%',
          minHeight: 300,
          marginBottom: 15,
          padding: 10,
          borderRadius: 12,
          backgroundColor: '#FFFFFF',
          elevation: 5
     },

     nome: {
          fontSize: 18,
          fontWeight: 'bold',
          color: Cores.secundariaEscura,
          textAlign: 'center',
          marginBottom: 10
     },

     imagem: {
          width: '100%',
          height: 110,
          borderRadius: 8,
          marginBottom: 10
     },

     descricao: {
          fontSize: 13,
          color: '#444',
          lineHeight: 18,
          marginBottom: 7
     },

     ingredientes: {
          fontSize: 12,
          color: '#666',
          lineHeight: 17
     },

     destaque: {
          fontWeight: 'bold',
          color: Cores.secundariaEscura
     },

     preco: {
          marginTop: 'auto',
          paddingTop: 8,
          fontSize: 15,
          fontWeight: 'bold',
          color: Cores.terciariaEscura,
          textAlign: 'right'
     }

})