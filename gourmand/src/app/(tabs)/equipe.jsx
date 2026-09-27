import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Cores } from "@/constants/Cores"
import { Fontes } from '@/constants/Fontes';
import { Cabecalho } from "@/components/cabecalho"

export default function Equipe() {

     return(
          <SafeAreaView>
               <View style={estilos.conteiner}>
                    <ScrollView>
                         <Cabecalho titulo='Equipe' />

                         <View style={estilos.corpo}>

                              <Text style={estilos.titulo}>A Equipe</Text>

                              <Text style={estilos.texto}>
                                   Nossa equipe de desenvolvedores é composta pelos integrantes Miquéias e 
                                   Yohana que foram responsáveis pelo desenvolvimento do cardápio e restaurante 
                                   online fictício "Gourmand" que foi inspirado na cultura francesa para um 
                                   trabalho acadêmico sem fins lucrativos.
                              </Text>

                              <Image style={estilos.imagem} source={require('@/assets/images/dev-1.jpg')} />
                              
                              <Text style={estilos.rotulo}>Desenvolvedor 1 - Miquéias</Text>

                                   <Image style={estilos.imagem} source={require('@/assets/images/dev-2.webp')} />
                              <Text style={estilos.rotulo}>Desenvolvedor 2 - Yohana</Text>
                         
                         </View>
                    </ScrollView>
               </View>
          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({

     conteiner: {
          height: '100vh',
          backgroundColor: Cores.secundariaClara
     },

     corpo: {
          paddingTop: 20,
          paddingHorizontal: 30,
          alignItems: 'center',
     },

     titulo: {
          marginTop: 15,
          fontSize: Fontes.enorme,
          color: Cores.primariaEscura,
          fontFamily: Fontes.logo
     },

     texto: {
          marginTop: 15,
          fontSize: Fontes.medio2,
          color: Cores.secundariaEscura,
          fontFamily: Fontes.texto,
          textAlign: 'justify'
     },
     rotulo: {
          marginTop: 22,
          fontSize: Fontes.medio2,
          color: Cores.primariaEscura,
          fontFamily: Fontes.tituloNegrito
     },

     imagem: {
          marginTop: 30,
          width: 190,
          height: 190,
          borderRadius: '100%',
          borderWidth: 8,
          borderColor: Cores.primaria
     }
})