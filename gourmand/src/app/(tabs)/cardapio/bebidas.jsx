import { View, Text, StyleSheet } from 'react-native'
import { Fontes } from '@/constants/Fontes'

export default function Salgados() {
     return(
          <View>
               <Text style={estilos.titulo}>Bebidas</Text>
          </View>
     )
}

const estilos = StyleSheet.create({
     conteiner: {

     },
     titulo: {
        fontSize: Fontes.grande2
    },
})
