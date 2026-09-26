import { View, Pressable, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from  'expo-router'

import { Cabecalho } from "@/components/cabecalho"
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Cardapio() {

     return(
          <SafeAreaView>
               
               <View style={estilos.conteiner}>
                    <Cabecalho titulo='Equipe' />

                    <View style={estilos.corpo}>

                         <Text style={estilos.texto}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, lorem eu sollicitudin venenatis, diam risus ultrices sapien, hendrerit accumsan risus erat vitae ante. Sed ac nibh ac lorem elementum scelerisque. Duis id tortor quis dolor dapibus commodo. Nunc vitae dolor id leo blandit euismod quis eu ligula. Sed laoreet magna arcu, at bibendum sem malesuada eget. Pellentesque augue est, mollis id ipsum non, gravida ultricies tortor. Sed odio sapien, cursus sit amet tempor eget, vestibulum vel dolor. Pellentesque eu turpis ut turpis ornare molestie vel et elit.
                         </Text>

                         <Text>
                              Proposta. Tipo de Culinária. Itens principais e cardápio. Ambiente.  Cliente / Público Alvo. Origem.
                         </Text>

                    </View>

               </View>

          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({
     conteiner: {
        zIndex: -1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: Cores.secundariaClara
    },
    
    corpo: {
        marginTop: 24,
        paddingHorizontal: 30,
        alignItems: 'center'
    },

    texto: {
        marginTop: 10,
        fontSize: Fontes.medio2,
        color: Cores.secundariaEscura,
        fontFamily: Fontes.texto
    },
})