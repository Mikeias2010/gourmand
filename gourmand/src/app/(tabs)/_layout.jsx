
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@react-native-vector-icons/material-icons'

import { Cores } from "@/constants/Cores";
import { Fontes } from "@/constants/Fontes";

export default function TabsSobreLayout(){

     const insets = useSafeAreaInsets()

     return (
          <Tabs 
               screenOptions={{
                    headerShown: false,

                    tabBarStyle: {
                         backgroundColor: Cores.terciariaEscura,
                         paddingTop: 6,
                         height: 70 + (insets.bottom || 0),
                         paddingBottom: insets.bottom || 0
                    }
               }}
          >
               <Tabs.Screen name='cliente' 
                    options={{
                         tabBarIcon: ({color}) => (
                              <MaterialIcons name="info-outline" size={Fontes.grande1} color={color} />
                         ) 
                    }}  
               />
               <Tabs.Screen name='equipe' 
                    options={{
                         tabBarIcon: ({color}) => (
                              <MaterialIcons name="groups" size={Fontes.grande1} color={color} />
                         ) 
                    }}  
               />
          </Tabs>
     )
}
