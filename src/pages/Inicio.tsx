import React from "react";
import { View, Text } from "react-native"

export default function Inicio(){
    return(
        <View style={{display:"flex", alignItems:"center", justifyContent: "center",flex: 1}}>
            <Text style={{color: "#003778", fontSize: 22}}>SEJA BEM VINDO {'\n'} AO APP B.O.M </Text>
        </View>
    )
}