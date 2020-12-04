import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login';
import Home from '../pages/Home';
import DdEmbarcacao from '../pages/DdEmbarcacao';
import DdJetSki from '../pages/DdJetSki';
import Revisao from '../pages/Revisao';
import Transmissao from '../pages/Transmissao';
import SejaBv from '../pages/SejaBv';
import Register from '../pages/Register';
import Combustivel from  '../pages/Combustivel';
import Pagamentos from '../pages/Pagamentos';
import RecuperarPassword from '../pages/RecuperarPassword';
import Avarias from '../pages/Avarias';
import RevisaoJt from '../components/RevisaoJt';
import RevisaoLancha from '../components/RevisaoLancha';
import CombustivelJet from '../pages/CombustivelJet';
import AgendamentoPass from '../pages/AgendamentoPass';
import UserPerfil from '../pages/UserPerfil';
import  AchadosPedidos from '../pages/AchadosPedidos';
import CheckList from '../components/Checklist';
import Sucesso from '../components/Sucesso';


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
             <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="DdEmbarcacao" component={DdEmbarcacao} />
                <Screen name="DdJetSki" component={DdJetSki} />
                <Screen name="Revisao" component={Revisao} />
                <Screen name="Transmissao" component={Transmissao} />
                <Screen name="SejaBv" component={SejaBv} />
                <Screen name="Register" component={Register} />
                <Screen name="Combustivel" component={Combustivel} />
                <Screen name="Pagamentos" component={Pagamentos} />
                <Screen name="RecuperarPassword" component={RecuperarPassword} />
                <Screen name="Avarias" component={Avarias} />
                <Screen name="RevisaoJt" component={RevisaoJt} />
                <Screen name="RevisaoLancha" component={RevisaoLancha} />
                <Screen name="CombustivelJet" component={CombustivelJet} />
                <Screen name="AgendamentoPass" component={AgendamentoPass} />
                <Screen name="UserPerfil" component={UserPerfil} />
                <Screen name="AchadosPedidos" component={AchadosPedidos} />
                <Screen name="CheckList" component={CheckList} />
                <Screen name="Sucesso" component={Sucesso} />
      </Navigator>
    </NavigationContainer>
  );
}