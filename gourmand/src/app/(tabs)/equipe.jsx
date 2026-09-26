import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Cores } from "@/constants/Cores"
import { Fontes } from '@/constants/Fontes';
import { Cabecalho } from "@/components/cabecalho"

export default function Equipe() {

     return(
          <SafeAreaView>
               <ScrollView>
                    <Cabecalho titulo='Equipe' />

                    <View style={estilos.conteiner}>

                         <Text style={estilos.texto}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, lorem eu sollicitudin
                              venenatis, diam risus ultrices sapien, hendrerit accumsan risus erat vitae ante. Sed ac nibh ac
                              lorem elementum scelerisque. Duis id tortor quis dolor dapibus commodo. Nunc vitae dolor id leo
                              blandit euismod quis eu ligula. Sed laoreet magna arcu, at bibendum sem malesuada eget. Pellentesque
                              augue est, mollis id ipsum non, gravida ultricies tortor. Sed odio sapien, cursus sit amet tempor
                              eget, vestibulum vel dolor. Pellentesque eu turpis ut turpis ornare molestie vel et elit.
                         </Text>

                         <Image style={estilos.imagem} source={require('@/assets/images/restaurante.jpeg')} />

                         <Image style={estilos.imagem} source={require('@/assets/images/restaurante.jpeg')} />
                         
                         <Text style={estilos.texto}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, lorem eu sollicitudin
                              venenatis, diam risus ultrices sapien, hendrerit accumsan risus erat vitae ante. Sed ac nibh ac
                              lorem elementum scelerisque. Duis id tortor quis dolor dapibus commodo. Nunc vitae dolor id leo
                              blandit euismod quis eu ligula. Sed laoreet magna arcu, at bibendum sem malesuada eget. Pellentesque
                              augue est, mollis id ipsum non, gravida ultricies tortor. Sed odio sapien, cursus sit amet tempor
                              eget, vestibulum vel dolor. Pellentesque eu turpis ut turpis ornare molestie vel et elit.
                         </Text>

                    </View>
               </ScrollView>

          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({

     conteiner: {
          paddingTop: 24,
          paddingHorizontal: 30,
          alignItems: 'center',
          height: '100vh',
          backgroundColor: Cores.secundariaClara
     },

     texto: {
          marginTop: 10,
          fontSize: Fontes.medio2,
          color: Cores.secundariaEscura,
          fontFamily: Fontes.texto
     },

     imagem: {
          marginVertical: 30,
          width: 200,
          height: 200,
          borderRadius: '100%'
     }
})