import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function TabsLayout() {

  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Cores.primariaClara,
        tabBarInactiveTintColor: Cores.secundariaClara,
        tabBarStyle: {
          backgroundColor: Cores.primaria,
          borderTopWidth: 0,
          height: 60 + (insets.bottom || 0),
          paddingBottom: insets.bottom || 0,
          paddingTop: 8
        }
      }}
    >
      <Tabs.Screen 
        name='home'
        options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="home" size={Fontes.grande2} color={color} />
            ) 
        }} 
      />

      <Tabs.Screen 
        name='ideias' 
        options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="lightbulb" size={Fontes.grande2} color={color} />
            ) 
        }}          
      />

      <Tabs.Screen 
        name='perfil' 
        options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="person" size={Fontes.grande2} color={color} />
            ) 
        }}          
      />

      <Tabs.Screen 
        name='sobre' 
        options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="settings" size={Fontes.grande2} color={color} />
            ) 
        }}          
      />

    </Tabs>
  )
}
