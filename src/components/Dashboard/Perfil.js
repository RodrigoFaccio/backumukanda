import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions, } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

import PerfilItens from "./PerfilItens";

const screenHeight = Dimensions.get("window").height;


class Perfil extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  togglePerfil = () =>{
    Animated.spring(this.state.top, {
      toValue: screenHeight
    }).start();
  }

 

  render() {
    return (
      <AnimatedContainer style={{top: this.state.top,}}>
        <Cover>
          <Image source={require('../../../assets/images/background3.orig.jpg')} />
          <Title>Yuri Antonio</Title>
          <Subtitle>Conta Joven</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.togglePerfil}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
        <CloseView>
            <Entypo name="circle-with-cross" size={44} color="#964ff0" />
          </CloseView>
          </TouchableOpacity>
        <Content>
        {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.handlePerfil(index);
              }}
            >
              <PerfilItens icon={item.icon} title={item.title} text={item.text} />
            </TouchableOpacity>
          ))}

          <PerfilItens/>
        </Content>
      </AnimatedContainer>
    );
  }
}

export default Perfil;

const Container = styled.View`
position: absolute;
background: white;
width: 100%;
height: 100%;
z-index: 100;


`;
const Cover = styled.View`
height: 142px;
background: black;
justify-content: center;
align-items: center;
 
`; 

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.View`
 height: ${screenHeight};
 background:#f0f3f5`;

 const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;


const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
  font-weight: 600;
`;

const items = [
  {
    icon: "cog",
    title: "Conta",
    text: "definições"
  },
  {
    icon: "ios-card",
    title: "Meu Qr Cod ",
    text: "gerar Qr Cod"
  },
  {
    icon: "reply",
    title: "Sair",
    text: "vejo você em breve!"
  },
  {
    icon: "trash",
    title: "Apagar Conta",
    
  },
  
];

