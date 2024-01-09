import react, { useState,useEffect } from "react";
import { View, Text,TextInput, Image, TouchableOpacity } from "react-native";
import {styles} from "../styles/LoginStyles"
import { Button_component } from "../components/Button";
import { Dados } from "../model/Dados";
import {Ionicons} from "@expo/vector-icons"


export default function Login({ navigation }) {
  const [ValueEmail, SetValueEmail] = useState(null);
  const [ValueSenha, SetValueSenha] = useState(null);
  const [visibility, SetVisibility] = useState(false)
  const Login = new Dados
  
  const mudarVisibilidade = () =>{
    if(visibility ==  false){
      SetVisibility(true)
    }else if(visibility == true){
      SetVisibility(false)
    }
  }

  function Verificacao() {
    if(ValueEmail == Login.GetValue().email && ValueSenha == Login.GetValue().senha){
      navigation.navigate("Inicio")
    }else{
      
    }    
  }
  
  

  useEffect(()=>{
    
  })

  return (
    <View style={styles.container}>
        <View style={styles.boxInputs}>
            <View style={styles.inputs}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.textInpt} placeholder="digite seu email" onChangeText={SetValueEmail}></TextInput>
            </View>
            
            <View style={styles.inputs}>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.textInpt} placeholder="digite sua senha" onChangeText={SetValueSenha}></TextInput>
            </View>

            <View style={styles.button}>
                <Text style={{color: "#fff"}}>Entrar</Text>
            </View>
        </View>
    </View>
  );
}

