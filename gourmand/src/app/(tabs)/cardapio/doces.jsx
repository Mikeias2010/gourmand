import { StyleSheet, Text, View } from 'react-native'

import { Fontes } from '@/constants/Fontes'

export default function Doces() {

    return(
        <View style={estilos.conteiner}>
          <Text style={estilos.titulo}>DOCES</Text>
        </View>

    )
}

const estilos = StyleSheet.create ({

    conteiner: {
        flex: 1,
        backgroundColor: '#EF4139'
    },
     titulo: {
        fontSize: Fontes.grande2
    },
})