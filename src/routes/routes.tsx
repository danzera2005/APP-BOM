import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from "../pages/Login"
import Login from "../pages/Inicio"
import { Tela } from "../pages/Onboarding"

const Stack = createNativeStackNavigator()

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="splah" component={Tela} options={{headerShown:false}}/>
            <Stack.Screen name="Inicio" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

