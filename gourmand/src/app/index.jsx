import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable } from 'react-native'
import { router } from 'expo-router'

import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Principal() {

    const abrirCardapio = () => {
        router.push('./cardapio')
    }

    const abrirSobre = () => {
        router.push('./sobre')
    }

    return (
        <SafeAreaView style={estilos.conteiner}> 

            <Text style={estilos.titulo}>Gourmand</Text>

            <Text style={estilos.texto}>VEJA O CARDÁPIO</Text>
            <Pressable
                onPress={abrirCardapio}
                style={estilos.botao}
            >
                aaaaaaaaaa22
            </Pressable>

            <Text style={estilos.texto}>CONHEÇA A EQUIPE</Text>
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
        backgroundColor: Cores.primariaClara,
        padding: 10
    },
    titulo: {
        fontSize: Fontes.tamanhoTitulo
    },
    texto: {
        fontSize: Fontes.medio2
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        borderWidth: 2,
        borderRadius: 5
    },
})
