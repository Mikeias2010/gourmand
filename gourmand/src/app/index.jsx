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

    const abrirCategoria = (pagina) => {
        router.push(`./${pagina}`)
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

                    <Image  source={require('@/assets/images/bandeira-da-franca.webp')} 
                            style={[estilos.imagemAdereco, {borderRadius:'100%'}]} 
                    />
                    
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
                            style={estilos.imagemPrincipal}
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
                    <Text style={estilos.nota}>(Clique nas imagens para ir direto para a categoria desejada!)</Text>


                    <ScrollView style={estilos.scroll} contentContainerStyle={estilos.scrollConteiner} horizontal>
                        <View style={estilos.imagensConteiner}>

                            <Pressable onPress={() => abrirCategoria('salgados')}>
                                <View style={estilos.card}>
                                    <Image  style={estilos.imagemAdereco}
                                            source={require('@/assets/images/croissant.jpg')} 
                                            />
                                    <Text style={estilos.texto}>Croissant - Salgado</Text>
                                </View>
                            </Pressable>
                                
                            <Pressable onPress={() => abrirCategoria('doces')}>
                                <View style={estilos.card}>
                                    <Image  style={estilos.imagemAdereco}
                                            source={require('@/assets/images/petit-gateau.jpg')} 
                                        />
                                    <Text style={estilos.texto}>Petit Gâteau - Doce</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={() => abrirCategoria('bebidas')}>
                                <View style={estilos.card}>
                                    <Image  style={estilos.imagemAdereco}
                                            source={require('@/assets/images/chocolat-chaud.jpg')} 
                                        /> 
                                    <Text style={estilos.texto}>Chocolat Chaud - Bebida</Text>
                                </View>
                            </Pressable>

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
        paddingBottom: 55,
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
        fontFamily: Fontes.texto,
        textAlign: 'justify'
    },
    
    nota: {
        marginTop: 10,
        fontSize: Fontes.pequena,
        color: Cores.primariaEscura,
        fontFamily: Fontes.texto,
        textAlign: 'center'
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

    imagemPrincipal: {
        marginTop: 20,
        margin: 10,
        width: 350,
        height: 240,
        borderRadius: 5
    },
    
    imagemAdereco: {
        marginVertical: 6,
        borderRadius: 15,
        width: 160,
        height: 160,
    },

    scroll: {
        width: '90%',
    },
    
    scrollConteiner: {
        marginVertical: 10,
        width: 0,
        height: 250,
    },
    
    imagensConteiner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 20,
        padding: 10,
        backgroundColor: '#ffffffc7',
        borderRadius: 5
    },

    card: {
        width: 180,
        height: 220,
        backgroundColor: Cores.terciaria,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#d4b865'
    }
    
})
