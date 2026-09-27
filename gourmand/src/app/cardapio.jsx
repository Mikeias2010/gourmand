
import { View, Pressable, StyleSheet, Text } from "react-native"
import { router } from 'expo-router'

import { Cores } from "@/constants/Cores"
import { Fontes } from '@/constants/Fontes'
import { Cabecalho } from "@/components/cabecalho"
import { Subcabecalho } from "@/components/subcabecalho"


export default function Cardapio() {
     return(
          <View style={estilos.conteiner}>
               <Cabecalho titulo='Cardápio' />
               <Subcabecalho telaAtual='cardapio' />

               <View style={estilos.conteudo}>
                    <View style={estilos.tituloContainer}>
                       <Text style={estilos.titulo}>
                         A culinária francesa
                       </Text>
                    </View>

                    <Text style={estilos.texto}>
                         A culinária francesa é conhecida por sua variedade,
                         tradição e atenção aos detalhes. Ao longo dos séculos,
                         ela influenciou a gastronomia de diversos países e
                         desenvolveu uma grande diversidade de pratos, doces e
                         bebidas.
                    </Text>

                    <Text style={estilos.texto}>
                         Neste cardápio, você encontrará diferentes elementos
                         da gastronomia francesa. Os salgados representam os
                         pratos e preparações tradicionais, enquanto os doces
                         destacam a importância da pâtisserie, famosa por seus
                         bolos, tortas e outras sobremesas.
                    </Text>

                    <Text style={estilos.texto}>
                         As bebidas também fazem parte dessa tradição, incluindo
                         cafés, chocolates e outras opções presentes na cultura
                         gastronômica francesa. Assim, cada categoria apresenta
                         uma parte diferente da riqueza e da diversidade da
                         culinária da França.
                    </Text>

               </View>

          </View>
     )
}

const estilos = StyleSheet.create({
     conteiner: {
          height: '100%',
          alignItems: 'center',
          backgroundColor: Cores.secundariaClara
     },

     conteudo: {
          width: '90%',
          alignItems: 'center',
          marginTop: 10
     },

     titulo: {
          fontFamily: 'PlayfairDisplayBold',
          fontSize: Fontes.media2,
          color: Cores.secundariaEscura,
          marginBottom: 15
     },

     texto: {
          width: '100%',
          fontFamily: Fontes.texto,
          fontSize: Fontes.media1,
          color: Cores.secundariaEscura,
          textAlign: 'justify',
          lineHeight: 24,
          marginBottom: 12
     }
})

