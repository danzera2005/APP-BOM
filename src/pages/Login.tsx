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
      SetStatus(true)
    }    
  }
  
  
  const [statusErro,SetStatus]= useState(false)

  const StatusErro = () =>{
    return(
        <View style={styles.con}>
            <Text>Email ou senha incorretos!</Text>
            <View style={styles.container_button}>
            <Button_component title="OK" onPress={()=>{SetStatus(false)}} altura={44} largura={249}/>  
            </View>
        </View>
    )
}



  useEffect(()=>{
    statusErro
  })

  return (
    <View style={styles.container}>
      {statusErro == true ? <StatusErro/> : "" }
      <View style={styles.titulos}>
        <Text style={styles.text1}>Que bom ter você por aqui</Text>
        <Text style={styles.text2}>preencha os dados para continuar</Text>
      </View>

      <View>
        <Text style={styles.email}>Email</Text>
        <TextInput
          placeholder="digite seu email"
          style={styles.inputs1}
          onChangeText={SetValueEmail}
          value={ValueEmail}
          keyboardType="email-address"
          
        ></TextInput>
      </View>

      <View>
        <Text style={styles.senha}>Senha</Text>

        <View style={styles.inputs}>
        <TextInput
          placeholder="digite sua senha"
          style={styles.inputs2}
          onChangeText={SetValueSenha}
          value={ValueSenha}
          secureTextEntry= {visibility}
        ></TextInput>
        <TouchableOpacity onPress={mudarVisibilidade}>
          <Ionicons name="eye" color="#C5D0E6" size={25} />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.box}>
      
        <Button_component title="Entrar" onPress={Verificacao} altura={44} largura={336}/>
        <View style={styles.esqueciMinhaSenha}>
          <Text style={styles.esqueciMinhaSenha}>Esqueceu sua senha? clique aqui</Text>
        </View>
      </View>

      <View style={styles.boxLoginAlternativo}>
        <View style={styles.linha} />
        <View style={styles.caixaTexto}>
          <Text style={styles.loginAlternativo}>ou faça login com </Text>
        </View>
        <View style={styles.linha} />
      </View>

      <View style={styles.containerImg}>
        <Image source={require("../Assets/google.png")} style={styles.Image} />
        <Image source={require("../Assets/instagram.png")} style={styles.Image} />
        <Image source={require("../Assets/facebook.png")}style={styles.Image}/>
        <Image source={require("../Assets/linkedin.png")} style={styles.Image} />
      </View>

      <View style={styles.container_textos}>
        <Text style={styles.colorText}>Não tem uma conta?</Text>
        <Text style={styles.colorText}> Cadastre-se agora!</Text>
      </View>
    </View>
  );
}

