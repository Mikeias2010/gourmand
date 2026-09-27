import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable, Image, View, ScrollView } from 'react-native'
import { router } from 'expo-router'

import { MaterialIcons } from '@react-native-vector-icons/material-icons'
 
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

            <ScrollView>

                <View style={estilos.corpo}>
                    <Text style={estilos.subtitulo}>Bienvenue au restaurant Gourmand!</Text>
                    
                    {/* Introdução */}
                    <Text style={estilos.texto}>
                        Trouxemos um pedacinho da França direto para o seu dia. No Gourmand, 
                        cada prato é preparado com técnicas clássicas do terroir francês, 
                        ingredientes frescos e uma pitada de carinho artesanal.

                        De croissant quentinhos no café da manhã a clássicos refinados para 
                        um jantar especial, navegue pelo nosso cardápio online e escolha suas 
                        experiências gastronômicas favoritas.

                        Bon appétit! 🍷🥐
                    </Text>
                    

                    {/* Redirect Sobre */}
                    <View>
                        <Image 
                            style={estilos.imagemAdereco}
                            source={require('@/assets/images/restaurante.jpeg')} 
                        />
                    </View>

                    <Text style={estilos.texto}>Saiba mais sobre o restaurante!</Text>

                    <Pressable
                        onPress={abrirCliente}
                        style={estilos.botao}
                    >
                        <Text style={estilos.elementoBotao}>
                            Sobre <MaterialIcons name='arrow-outward' style={estilos.elementoBotao} />
                        </Text>
                    </Pressable>


                    {/* Cards */}
                    <Text style={estilos.subtitulo}>Confira alguns dos nossos pratos!</Text>

                    <ScrollView style={estilos.scroll} contentContainerStyle={estilos.scrollConteiner} horizontal>
                        <View style={estilos.imagensConteiner}>


                            <View style={estilos.card}>
                                <Image  style={estilos.cardImagem}
                                        source={require('@/assets/images/croissant.jpg')} 
                                    />
                                <Text style={estilos.texto}>Croissant</Text>
                            </View>
                                
                            <View style={estilos.card}>
                                <Image  style={estilos.cardImagem}
                                        source={require('@/assets/images/croissant.jpg')} 
                                    />
                                <Text style={estilos.texto}>Croissant</Text>
                            </View>

                            <View style={estilos.card}>
                                <Image  style={estilos.cardImagem}
                                        source={require('@/assets/images/croissant.jpg')} 
                                    /> 
                                <Text style={estilos.texto}>Croissant</Text>
                            </View>
                        </View>
                    </ScrollView>


                    {/* Redirect cardápio */}
                    <Pressable
                        onPress={abrirCardapio}
                        style={estilos.botao}
                    >
                        <Text style={estilos.elementoBotao}>
                            Ir para Cardápio <MaterialIcons name='arrow-outward' style={estilos.elementoBotao} />
                        </Text>
                    </Pressable>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        height: '100vh',
        maxWidth: '100%',
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
        width: 200,
        height: 36,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: Cores.primaria,
    },
    elementoBotao: {
        color: Cores.primariaClara,
        fontFamily: Fontes.tituloNegrito,
        fontSize: Fontes.media1
    },

    imagemAdereco: {
        marginTop: 20,
        margin: 10,
        width: 350,
        height: 240,
        borderRadius: 5
    },

    scroll: {
        width: '90%',
    },
    
    scrollConteiner: {
        width: 0,
        height: 250,
    },
    
    imagensConteiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: 10,
        backgroundColor: '#ffffffc7',
        borderRadius: 5
    },

    card: {
        padding: 10,
        width: 180,
        height: 220,
        backgroundColor: Cores.terciaria,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#d4b865'
    },
    
    cardImagem: {
        borderRadius: 15,
        width: 160,
        height: 160,
    }
})
