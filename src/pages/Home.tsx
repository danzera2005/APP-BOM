import react from "react"
import {View,Text,StyleSheet,Button} from "react-native"


export default function Home({navigation}){

    return(
        <View style={styles.container}>
            <Button title="Entrar" onPress={()=>navigation.navigate('Feed')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})