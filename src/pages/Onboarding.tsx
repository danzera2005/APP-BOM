import react, {useEffect,useRef,useState} from "react"
import { LinearGradient } from "expo-linear-gradient"
import {View,ImageBackground,StyleSheet,Text,Image,TouchableOpacity} from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";
import Styles from "../styles/onboardingStyle";
import { Button_component } from "../components/Button";
const slides = [
    {
      key: 1,
      title: <Text>Ônibus por {'\n'} demanda</Text>,
      descricao: <Text>Avise ao motorista que você está {'\n'}           no ponto esperando</Text>
    },
    {
      key: 2,
      title: "Comodidade",
      descricao: <Text>Escolha seu destino, selecione {'\n'}  o QR Code correspondente {'\n'}        e aguarde o ônibus</Text>
    },
    {
      key: 3,
      title: "Segurança",
      descricao: <Text>Adeus atraso! Seu ônibus vai sempre {'\n'}  parar no ponto onde você solicitar!</Text>
    }
  ];


export const Tela = ({navigation}) =>{


    const slideRef = useRef(null)
  const [cont,SetCont] = useState(0)

  
  function GetValue(){
    navigation.navigate("Home")
  }
  
  const passarSlide = (cont) =>{
     slideRef.current.goToSlide(cont)
  }

  function renderSlide({ item }) {
    return (
      <View style={Styles.container}>
        <Text style={Styles.titulos}>{item.title}</Text>
        <Text style={Styles.descricao}>{item.descricao}</Text>
      </View>
    );  
  }
  
   useEffect(() => {
    const intervalId = setTimeout(() => { 
      const novoCont = cont < 2 ? cont + 1 : 0;
      passarSlide(novoCont);
      SetCont(novoCont);
    }, 2000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [cont, slideRef]);

    return (
        <View style={Styles.containePrincipal}>
          <ImageBackground
            source={require('../../assets/onibus.png')}
            style={Styles.imgx}
            imageStyle={{ resizeMode: 'cover' }}
          >

            <TouchableOpacity onPress={GetValue} style={Styles.fechar}>
              <ImageBackground source={require("../Assets/botao-fechar.png")}
                imageStyle ={{resizeMode: "cover",height: 30,width:30}}
              />
            </TouchableOpacity>
            
            <LinearGradient
              colors={['transparent', '#fff']}
              style={{ flex: 1, justifyContent: 'flex-end'}}
            >
            </LinearGradient>
          </ImageBackground>

          <View style={{backgroundColor: "transparent",height: 200, width: "100%",position:"absolute",top: 450,display: "flex"}}>
                  <AppIntroSlider
                    renderItem={renderSlide}
                    ref = {slideRef}
                    data={slides}
                    activeDotStyle={{backgroundColor: "#C5D0E6",width: 30,top: 70}}
                    dotStyle={{backgroundColor : "#C5D0E6",top: 70}}
                    showNextButton = {false}
                    showDoneButton= {false}
                    />
          </View>      

          <View style={Styles.centeredContainer}>
                        <Button_component title="Começar a usar" onPress={GetValue}  altura={44} largura={220}/>
            </View>
        </View>
      );

}

