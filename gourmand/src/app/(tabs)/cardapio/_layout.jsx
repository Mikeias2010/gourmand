import { Tabs } from "expo-router"

export default function comidasLayout(){
     return(
          <Tabs>
               <Tabs.Screen name='/' />
               <Tabs.Screen name='doces' />
               <Tabs.Screen name='bebidas' />
          </Tabs>
     )
}