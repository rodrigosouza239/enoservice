import React from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo122 from '../../assets/Grupo122.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


function CombustivelJet(){
    const navigation = useNavigation();
   const { navigate } = useNavigation();

    function hadleNavigateToCombustivelJet(){
        navigate('Avarias')
        }
    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#FFD246" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
           <View style={styles.mainPage}>
           <View style={styles.containerbox}>
                 <Image style={styles.containerboxImage} source={Grupo122} />
                 <Text style={styles.containerboxText} >Combustível / Hora Motor</Text>
            </View>
            <View style={styles.mainPageForm} >
                     <Text style={styles.mainText}>
                         JET:
                     </Text>
                     <TextInput style={styles.mainTextInput} />
                 </View>
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default CombustivelJet;