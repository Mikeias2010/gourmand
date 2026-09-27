import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Cabecalho } from "@/components/cabecalho"
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Cliente() {

     return(
          <SafeAreaView>
               
               <View style={estilos.conteiner}>
                    <Cabecalho titulo='Cliente' />

                    <View style={estilos.corpo}>

                         <Text style={estilos.titulo}>O Restaurante</Text>

                         <Text style={estilos.texto}>
                               O Gourmand é um restaurante inspirado na cultura e na culinária francesa, 
                               criado para proporcionar uma experiência que vai além da gastronomia. 
                               Em nosso espaço, sabores, aromas e tradições se encontram para transportar 
                               nossos clientes à França por meio de pratos cuidadosamente preparados e 
                               de uma atmosfera inspirada no charme francês.
                         </Text>


                         <Image style={estilos.imagem} source={require('@/assets/images/franca.jpg')} />
                         
                         <Text style={estilos.texto}>
                              Nossa proposta é valorizar a riqueza e a diversidade da gastronomia francesa, 
                              combinando receitas tradicionais, ingredientes selecionados e um ambiente acolhedor. 
                              Seja para conhecer novos sabores ou simplesmente desfrutar de uma boa refeição, 
                              o Gourmand convida você a descobrir a França através de uma experiência gastronômica única.
                         </Text>

                    </View>

               </View>

          </SafeAreaView>
     )
}

const estilos = StyleSheet.create({
     conteiner: {
        zIndex: -1,
        height: '100vh',
        alignItems: 'center',
        backgroundColor: Cores.secundariaClara
    },
    
    corpo: {
        marginTop: 24,
        paddingHorizontal: 30,
        alignItems: 'center'
    },

     titulo: {
          marginTop: 15,
          fontSize: Fontes.enorme,
          color: Cores.primariaEscura,
          fontFamily: Fontes.logo
     },

    texto: {
        marginTop: 10,
        fontSize: Fontes.medio2,
        color: Cores.secundariaEscura,
        fontFamily: Fontes.texto,
        textAlign: 'justify'
    },

    imagem: {
          width: '80%',
          maxWidth: 280,
          height: 180,
          marginVertical: 18,
          borderRadius: 5
    }
})