import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

interface propsBotao{
    title: string;
    onPress: () => void
    altura : number
    largura: number
}


export function Button_component({title,onPress,altura, largura}: propsBotao){
    return(
        <TouchableOpacity onPress={onPress} style={[styles.containerButton,{height: altura, width: largura }]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton:{
        backgroundColor: "#3EA2D0",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        color: "#fff"
    }
})