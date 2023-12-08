import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  botao: {
    backgroundColor: "#3EA2D0",
    height: 50,
    width: 250,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    
  },
  centeredContainer: {
    
    // backgroundColor: "red",
    display:"flex",
    alignItems: "center",
    height:100,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    bottom: 20
  },
  containePrincipal: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    
  },
  imgx: {
    width: "100%",
    height: 544,
  },
  slide: {
    marginBottom: 500,
  },
  text: {
    color: "#fff",
  },
  imagem: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
  titulos: {
    fontSize: 36,
    color: "#003778",
  
  },
  descricao: {
    fontSize: 18,
    color: "#3E3E3E",
    lineHeight: 24,
    marginTop: 20
  },
  fechar: {
    position: "absolute",
    top: 35,
    right: 35,
    zIndex: 9
  },
  intro:{
      
  },
  boxButton:{
    backgroundColor: "red",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
  }
  
});

export default Styles;
