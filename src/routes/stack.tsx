import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Feed from "../pages/Feed"
import Home from "../pages/Home"

const Stack = createNativeStackNavigator()


export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Feed" component={Feed}/>
        </Stack.Navigator>
    )
}

