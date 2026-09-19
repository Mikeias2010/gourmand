
import { Tabs } from "expo-router";

export default function TabsSobreLayout(){
     return (
          <Tabs screenOptions={{headerShown: false}}>
               <Tabs.Screen name='cliente' />
               <Tabs.Screen name='equipe' />
          </Tabs>
     )
}
