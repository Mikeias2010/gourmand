import { StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import { router } from 'expo-router'

import { Fontes } from '@/constants/Fontes'
import { Cores } from '@/constants/Cores'
import { Cabecalho } from '@/components/cabecalho'

export default function Doces() {

      const retornar = () => {
              router.replace('/')
     }

    return(
        <SafeAreaView>

               <Cabecalho titulo='Doces' />
        
                  <View style={estilos.corpo}>
                      <Text style={estilos.texto}>Crème Brulle</Text>
                      <Text style={estilos.texto}>Tarte Tain</Text>
                      <Text style={estilos.texto}>Petit Gateau</Text>
                  </View>
             </SafeAreaView>
    )
}

const estilos = StyleSheet.create ({

    conteiner: {
        height: '100%',
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

    cabecalho: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        backgroundColor: Cores.terciariaEscura,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2b219c'
     },

     texto: {
        marginTop: 10,
        fontSize: Fontes.medio2,
        color: Cores.secundariaEscura
     },

     corpo: {
        paddingHorizontal: 28,
        alignItems: 'center'
     }
})