import { StyleSheet, Text, Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function novoUsuario(){

    const abrirLogin = () => {
        router.push('/')
    }

    return(
        <SafeAreaView style={estilos.conteiner}>
            <Cabecalho titulo={'Novo usuário'} />

            <View style={estilos.conteinerFormulario}>
                <Pressable 
                    style={estilos.botao}
                    android_ripple={{color: Cores.primariaClara}}
                    onPress={abrirLogin}
                >
                    <Text style={estilos.rotulo}>Cancelar</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura
    },
    conteinerFormulario: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10        
    },
    botao: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.primariaEscura,
      borderColor: Cores.primariaClara,
      height: 50,
      width: 300,        
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
    },
    rotulo: {
      color: Cores.secundariaClara,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      marginEnd: 10,
    },
})
