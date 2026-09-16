import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from 'react-native'

export default function index() {
    return (
        <SafeAreaView style={estilos.conteiner}> 
            <Text>
                Teste
            </Text>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        backgroundColor: '#EF4139'
    }
})
