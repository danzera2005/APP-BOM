import { StyleSheet } from "react-native";
import React from "react"


export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: "#3EA2D0",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        flexDirection: "column",
      },
      
    boxInputs : {
        height: 350,
        width: 340,
        backgroundColor: "#fff",
        borderRadius: 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap:30,
        position: "relative"
    },
    inputs:{
      height: 50,
      width: 300,
      backgroundColor : "#fff",
      border: "1px solid #3EA2D0",
      borderRadius: 10,
      position: "relative" 
    },
    text: {
      position: "absolute",
      left: 0,
      top: -20,
      color: "#3EA2D0"
    },
    textInpt: {
      height: 50,
      width: 300,
      borderRadius: 10,
      padding: 10,
      color: "grey"
    },
    button: {
      height: 50,
      width: 300,
      backgroundColor: "#3EA2D0",
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
})