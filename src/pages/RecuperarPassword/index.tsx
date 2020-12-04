import React from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

function RecuperarPassWord(){
    const navigation = useNavigation();

 

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#FFF" />
            </BorderlessButton>
           </View>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
       <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText} 
               placeholder="E-mail"
               placeholderTextColor="#535353"
               />
               <TouchableOpacity  style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Enviar</Text>
               </TouchableOpacity>
           </View>
       </View>
    </KeyboardAvoidingView >
    </ImageBackground>
   
    </>
    )
}

export default RecuperarPassWord;