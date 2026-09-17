import { StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

export default function Sobre() {
    const abrirIndex = () => {
        router.push('/')
    }

    return (
        <SafeAreaView style={estilos.conteiner}>
            <View>
                <Text>Sobre</Text>


                <Pressable
                    onPress={abrirIndex}
                >
                    botao
                </Pressable>
            </View>

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

