import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable, Image, View } from 'react-native'
import { router } from 'expo-router'

import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { Cabecalho } from "@/components/cabecalho";

export default function Principal() {

    const abrirCardapio = () => {
        router.push('./cardapio')
    }

    const abrirCliente = () => {
        router.push('./cliente')
    }

    return (
        <SafeAreaView style={estilos.conteiner}> 

            <Cabecalho titulo='Gourmand' inicial={true} />

            
            <View style={estilos.corpo}>
                <Text style={estilos.subtitulo}>Bienvenue au restaurant Gourmand!</Text>
                
                <Text style={estilos.texto}>
                    Trouxemos um pedacinho da França direto para o seu dia. No Gourmand, cada prato é preparado com técnicas clássicas do terroir francês, ingredientes frescos e uma pitada de carinho artesanal.

                    De croissant quentinhos no café da manhã a clássicos refinados para um jantar especial, navegue pelo nosso cardápio online e escolha suas experiências gastronômicas favoritas.

                    Bon appétit! 🍷🥐
                </Text>

                <View>
                    <Image 
                        style={estilos.imagemAdereco}
                        source={require('@/assets/images/restaurante.jpeg')} 
                    />
                </View>

                <Text style={estilos.texto}>VEJA O CARDÁPIO</Text>
                <Pressable
                    onPress={abrirCardapio}
                    style={estilos.botao}
                >
                    <Text>Cardápio</Text>
                </Pressable>

                <Text style={estilos.texto}>SAIBA UM POUCO SOBRE NÓS</Text>
                <Pressable
                    onPress={abrirCliente}
                    style={estilos.botao}
                >
                    <Text>Sobre</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        zIndex: -1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: Cores.primariaClara
    },

    corpo: {
        marginTop: 24,
        paddingHorizontal: 30,
        alignItems: 'center'
    },

    subtitulo: {
        marginBottom: 6,
        fontSize: Fontes.grande1,
        color: Cores.secundariaEscura,
        textAlign: 'center',
        fontFamily: Fontes.titulo
    },

    texto: {
        marginTop: 10,
        fontSize: Fontes.medio2,
        color: Cores.secundariaEscura,
        fontFamily: Fontes.texto
    },

    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5,
        width: 260,
        height: 36,
        borderWidth: 2,
        borderRadius: 5
    },

    imagemAdereco: {
        marginTop: 20,
        margin: 10,
        width: 350,
        height: 240
    }
})
