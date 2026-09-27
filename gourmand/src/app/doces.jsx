
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'

import { Cabecalho } from '@/components/cabecalho'
import { Subcabecalho } from '@/components/subcabecalho'

export default function Doces() {

     const doces = [
          {
               nome: 'Crème Brûlée',
               descricao: 'Sobremesa francesa cremosa com uma fina camada de açúcar caramelizado.',
               ingredientes: 'Creme de leite, gemas, açúcar e baunilha.',
               preco: 'R$ 15,00',
               imagem: require('@/assets/images/creme-brulee.jpg')
          },
          {
               nome: 'Tarte Tatin',
               descricao: 'Torta francesa de maçãs caramelizadas assada com uma massa crocante.',
               ingredientes: 'Maçãs, açúcar, manteiga e massa folhada.',
               preco: 'R$ 20,00',
               imagem: require('@/assets/images/tarte-tatin.jpg')
          },
          {
               nome: 'Petit Gâteau',
               descricao: 'Pequeno bolo de chocolate com interior cremoso servido geralmente quente.',
               ingredientes: 'Chocolate, manteiga, ovos, açúcar e farinha.',
               preco: 'R$ 12,00',
               imagem: require('@/assets/images/petit-gateau.jpg')
          },
          {
               nome: 'Macaron',
               descricao: 'Doce francês delicado feito com duas pequenas conchas de merengue e recheio cremoso.',
               ingredientes: 'Farinha de amêndoas, açúcar, claras e ganache.',
               preco: 'R$ 4,50',
               imagem: require('@/assets/images/macaron.jpg')
          },
          {
               nome: 'Mousse au Chocolat',
               descricao: 'Mousse francesa leve e cremosa com sabor intenso de chocolate.',
               ingredientes: 'Chocolate, ovos, açúcar e creme de leite.',
               preco: 'R$ 12,00',
               imagem: require('@/assets/images/mousse-chocolat.jpg')
          }
     ]

     return(
          <SafeAreaView style={estilos.container}>

               <Cabecalho titulo='Cardápio' />

               <Subcabecalho telaAtual='doces' />

               <ScrollView>

                    <View style={estilos.corpo}>

                         {doces.map((doce, index) => (

                              <View
                                   style={estilos.card}
                                   key={index}
                              >

                                   <Text style={estilos.nome}>
                                        {doce.nome}
                                   </Text>

                                   <Image
                                        source={doce.imagem}
                                        style={estilos.imagem}
                                   />

                                   <Text style={estilos.descricao}>
                                        {doce.descricao}
                                   </Text>

                                   <Text style={estilos.ingredientes}>
                                        <Text style={estilos.destaque}>
                                             Ingredientes:
                                        </Text>{' '}
                                        {doce.ingredientes}
                                   </Text>

                                   <Text style={estilos.preco}>
                                        {doce.preco}
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
          backgroundColor: Cores.primariaClara
     },

     corpo: {
          paddingHorizontal: 12,
          paddingBottom: 20,
          paddingTop: 15,
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
