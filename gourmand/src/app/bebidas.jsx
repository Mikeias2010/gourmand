import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"

import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'

import { Cabecalho } from '@/components/cabecalho'
import { Subcabecalho } from '@/components/subcabecalho'

export default function Salgados() {
     
     return(
          <SafeAreaView>
               <Cabecalho titulo='Cardápio' />

               <Subcabecalho telaAtual='bebidas' />  
               
                  
               <View style={estilos.corpo}>
                    <Text style={estilos.texto}>XXXXXX</Text>
                    <Text style={estilos.texto}>YYYYYY</Text>
                    <Text style={estilos.texto}>ZZZZZZ</Text>
               </View>
               </SafeAreaView>
     )
}

const estilos = StyleSheet.create({
    conteiner: {
        height: '100vh',
        alignItems: 'center',
        backgroundColor: Cores.primariaClara
    },
     titulo: {
        fontSize: Fontes.grande2,
        position: 'absolute',
        alignSelf: 'center',
        color: '#FFE4E6'
    },

    botao: {
        alignSelf: 'flex-start',
        marginLeft: 10,
        padding: 3,
        borderWidth: 2,
        borderRadius: 5,
        color: '#F8F9FA'
    },

     texto: {
        marginTop: 10,
        fontSize: Fontes.medio2,
        color: Cores.secundariaEscura
     },

     corpo: {
        paddingHorizontal: 28,
        paddingVertical: 20,
        alignItems: 'center'
     }
})
