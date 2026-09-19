import { StyleSheet, Text, View, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function Sobre() {

    const abrirCliente = () => {
        router.push('./(tabs)/sobre/cliente')
    }

    const retornar = () => {
        router.replace('/')
    }

    return (
        <View>
            <Text>Sobre</Text>

            <Pressable
                onPress={abrirCliente}
            >
                Cliente
            </Pressable>
                
            <Pressable
                onPress={retornar}
            >
                Retornar
            </Pressable>
        </View>

    )
}


const estilos = StyleSheet.create({
    conteiner: {
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cecece'
    }
})

