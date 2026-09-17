import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Doces() {

    return(
       <SafeAreaView style={estilos.conteiner}> 
         <View>
           <Text>DOCES</Text>
         </View>
       </SafeAreaView>

    )
}

const estilos = StyleSheet.create ({

    conteiner: {
        flex: 1,
        backgroundColor: '#EF4139'
    }
})