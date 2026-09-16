import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function index() {

    const abrirSobre = () => {
        router.push('./(tabs)/sobre')
    }

    return (
        <SafeAreaView style={estilos.conteiner}> 
            <Text>Teste</Text>

            <Pressable
                onPress={abrirSobre}
                style={estilos.botao}
            >
                aaaaaaaaaa
            </Pressable>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        backgroundColor: '#EF4139'
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        borderWidth: 2,
        borderRadius: 1
    }
})
