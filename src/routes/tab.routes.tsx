import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Feed from "../pages/Feed"
import New from "../pages/New"

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="feed" component={Feed}/>
            <Tab.Screen name="New" component={New}/>
        </Tab.Navigator>
    )
}