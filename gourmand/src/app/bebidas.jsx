import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'

import { Cabecalho } from '@/components/cabecalho'
import { Subcabecalho } from '@/components/subcabecalho'

export default function Bebidas() {

     const bebidas = [
          {
               nome: 'Café au Lait',
               descricao: 'Café francês tradicional combinado com leite quente e cremoso.',
               ingredientes: 'Café espresso e leite quente.',
               preco: 'R$ 10,00',
               imagem: require('@/assets/images/cafe-au-lait.jpg')
          },
          {
               nome: 'Chocolat Chaud',
               descricao: 'Chocolate quente francês, cremoso e intenso, perfeito para dias frios.',
               ingredientes: 'Chocolate, leite, açúcar e creme de leite.',
               preco: 'R$ 12,00',
               imagem: require('@/assets/images/chocolat-chaud.jpg')
          },
          {
               nome: 'Citronnade',
               descricao: 'Bebida refrescante de limão, muito apreciada na França.',
               ingredientes: 'Limão, água e açúcar.',
               preco: 'R$ 8,00',
               imagem: require('@/assets/images/citronnade.jpg')
          },
          {
               nome: 'Orangina',
               descricao: 'Refrigerante francês refrescante feito à base de laranja.',
               ingredientes: 'Suco de laranja, água gaseificada e açúcar.',
               preco: 'R$ 6,00',
               imagem: require('@/assets/images/orangina.jpg')
          },
          {
               nome: 'Vin Chaud',
               descricao: 'Bebida quente tradicional preparada com vinho e especiarias.',
               ingredientes: 'Vinho tinto, canela, laranja, açúcar e cravo.',
               preco: 'R$ 16,00',
               imagem: require('@/assets/images/vin-chaud.jpg')
          }
     ]

     return (
          <SafeAreaView style={estilos.container}>

               <Cabecalho titulo='Cardápio' />

               <Subcabecalho telaAtual='bebidas' />

               <ScrollView>

                    <View style={estilos.corpo}>

                         {bebidas.map((bebida, index) => (

                              <View
                                   style={estilos.card}
                                   key={index}
                              >

                                   <Text style={estilos.nome}>
                                        {bebida.nome}
                                   </Text>

                                   <Image
                                        source={bebida.imagem}
                                        style={estilos.imagem}
                                   />

                                   <Text style={estilos.descricao}>
                                        {bebida.descricao}
                                   </Text>

                                   <Text style={estilos.ingredientes}>
                                        <Text style={estilos.destaque}>
                                             Ingredientes:
                                        </Text>{' '}
                                        {bebida.ingredientes}
                                   </Text>

                                   <Text style={estilos.preco}>
                                        {bebida.preco}
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
          backgroundColor: Cores.primariaMaisClara
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