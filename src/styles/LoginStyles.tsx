import { StyleSheet } from "react-native";
import React from "react"


export const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: "#fff",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        flexDirection: "column",
      },
      containerImg: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
      },
      box: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        position: "relative",
      },
      text1: {
        color: "#003778",
        fontSize: 22,
        marginLeft: 19,
        
      },
      text2: {
        color: "#003778",
        fontSize: 12,
        marginLeft: 19,
      },
      textBtn: {
        color: "#fff",
      },
      email: {
        fontSize: 16,
        color: "#003778",
        marginBottom: 16,
      },
      senha: {
        fontSize: 16,
        color: "#003778",
        marginBottom: 16,
      },
      button: {
        height: 50,
        width: 336,
        backgroundColor: "#3EA2D0",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      esqueciMinhaSenha: {
        fontSize: 12,
        start: 30,
        marginTop: 15,
        color: "#003778"
      },
      container_button:{
        position: "absolute",
        bottom: 30
      },
      container_textos: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },
      colorText: {
        color: "#3E3E3E",
        fontSize: 12,
      },
      Image: {
        height: 30,
        width: 30,
      },
      titulos: {
        end: 40,
      },
      con:{
        height: 297,
        width: 332,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#C5D0E6",
        position: "absolute",
        zIndex:20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btn:{
        backgroundColor: "#3EA2D0",
        height: 44,
        width: 249,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color: "#fff"
    },inputs1:{
        backgroundColor: "#fff",
        height: 46,
        width: 336,
        borderRadius: 8,
        
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#C5D0E6",
        padding: 10
    },
    inputs2:{
      width: 290,
      height: 50,
      borderRadius: 8,
    },
    inputs:{
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#fff",
      alignItems: "center",
      height: 46,
      width: 336,
      borderRadius: 8,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#C5D0E6",
      padding: 10
    },
    texts:{
        fontSize: 30
    },
    caixaTexto:{
      display: "flex", flexDirection: "row"
    },
    linha:{
      width:105, height: 1, backgroundColor: "#C5D0E6" 
    },
    loginAlternativo:{
      width: 150, textAlign: "center",color: "#2A3563" 
    },
    boxLoginAlternativo:{
      flexDirection: "row", alignItems: "center", marginTop: 50 
    }
})