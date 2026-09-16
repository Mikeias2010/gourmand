import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Sobre() {
    return (
        <SafeAreaView style={estilos.conteiner}>
            <Text>Sobre</Text>
        </SafeAreaView>
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

