import { Tabs } from "expo-router"

export default function TabsComidasLayout(){
     return(
          <Tabs screenOptions={{headerShown: false}}>
               <Tabs.Screen name='salgados' />
               <Tabs.Screen name='doces' />
               <Tabs.Screen name='bebidas' />
          </Tabs>
     )
}