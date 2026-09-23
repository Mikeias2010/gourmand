import { useState } from 'react'
import { router } from 'expo-router'
import { Text, StyleSheet, TextInput, Pressable, Alert, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function index() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const verificarUsuario = () => {
    router.push('/(tabs)/home')
  }

  const abrirFundamentos = () => {
    router.push('/fundamentos')
  }

  const abrirNovoUsuario = () => {
    router.push('/novoUsuario')
  }

  return (
    <SafeAreaView style={estilos.conteiner}>

      <Image 
          style={estilos.fundo}
          source={require('@/assets/images/layout/fundo.jpg')}
      />

      <Text style={estilos.titulo}>Eureca!</Text>

      <TextInput 
        style={estilos.campo}
        placeholder='E-mail'
        placeholderTextColor={Cores.secundariaClara}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput 
        style={estilos.campo}
        placeholder='Senha'
        placeholderTextColor={Cores.secundariaClara}
        value={senha}
        onChangeText={setSenha}
      />

      <Pressable 
        style={estilos.botao}
        android_ripple={{color: Cores.primariaClara}}
        onPress={verificarUsuario}
      >
        <Text style={estilos.rotulo}>Entrar</Text>
        <MaterialIcons name="login" size={Fontes.grande1} color={Cores.primariaClara} />
      </Pressable>

      <Pressable 
        style={estilos.botao}
        android_ripple={{color: Cores.primariaClara}}
        onPress={abrirNovoUsuario}
      >
        <Text style={estilos.rotulo}>Novo usuário</Text>
        <MaterialIcons name="person-add" size={Fontes.grande1} color={Cores.primariaClara} />
      </Pressable>

      <Pressable                
          style={ ({ pressed }) => [
              estilos.botaoFundamentos, 
              ({ opacity: pressed ? 0.5 : 1 }) 
          ] }
          onPress={abrirFundamentos}
      >
          <MaterialIcons name="menu-book" size={Fontes.grande2} color={Cores.primariaClara} />
      </Pressable>

    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.primariaEscura,
    },
    titulo: {
      marginTop: -50,
      marginBottom: 30,
      fontFamily: Fontes.logo,
      fontSize: Fontes.extraGrande,
      color: Cores.primariaClara,
    },
    campo: {
      backgroundColor: Cores.secundaria,
      color: Cores.secundariaClara,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      height: 50,
      width: 300,
      marginVertical: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    botao: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Cores.primariaEscura,
      borderColor: Cores.primariaClara,
      height: 50,
      width: 300,        
      borderWidth: 1,
      borderRadius: 5,
      marginVertical: 10,
    },
    rotulo: {
      color: Cores.secundariaClara,
      fontFamily: Fontes.baseRegular,
      fontSize: Fontes.medio1,
      marginEnd: 10,
    },
    fundo: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      objectFit: 'fill',    
      zIndex: -1
    },
    botaoFundamentos: {
      backgroundColor: Cores.primariaEscura,
      borderColor: Cores.primariaClara,
      padding: 25,
      borderRadius: 100,
      borderWidth: 1,
      marginTop: 30
    }
})