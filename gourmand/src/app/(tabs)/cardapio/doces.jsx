import { StyleSheet, Text, View } from 'react-native'

export default function Doces() {

    return(
        <View style={estilos.conteiner}>
          <Text>DOCES</Text>
        </View>

    )
}

const estilos = StyleSheet.create ({

    conteiner: {
        flex: 1,
        backgroundColor: '#EF4139'
    }
})