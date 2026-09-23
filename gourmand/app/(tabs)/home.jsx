import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'

export default function Home(){

    return(
        <SafeAreaView style={estilos.conteiner}>
            <Cabecalho titulo={'Eureca!'} />
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.primariaEscura
    }
})
