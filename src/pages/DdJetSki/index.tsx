import React from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo121 from '../../assets/Grupo139.png';
import Pasta from  '../../assets/Caminho46.png';


function DdJetSki(){
   const navigation = useNavigation();

   const { navigate } = useNavigation();

   function hadleNavigateToAvarias(){
      navigate('Avarias')
      }
      function hadleNavigateToAchadosPerdidos(){
         navigate('AchadosPedidos')
         }
         function hadleNavigateToCheckList(){
            navigate('CheckList')
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
            <View style={styles.containerbox}>
                 <Image source={Grupo121} />
                 <Text style={styles.containerboxText} >Dados do Jet Ski</Text>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Nome:</Text>
               <TextInput style={styles.mainInput1}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Proprietário:</Text>
               <TextInput style={styles.mainInput2}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Marca:</Text>
               <TextInput style={styles.mainInput3}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Ano:</Text>
               <TextInput style={styles.mainInput4}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Comprimento total:</Text>
               <TextInput style={styles.mainInput}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Motor:</Text>
               <TextInput style={styles.mainInput5}/>
            </View>
            <View style={styles.main}>
               <Text style={styles.mainInputText}>Combustível Capacidade:</Text>
               <TextInput style={styles.mainInput6}/>
            </View>

            <TouchableOpacity style={styles.containerButton}>
                        <Text style={styles.containerButtonText}>Salvar</Text>
                    </TouchableOpacity>
            <View style={styles.mainpastas}>
               <View style={styles.mainpastas}>
               <Image source={Pasta} />
                  <Text onPress={hadleNavigateToAvarias} style={styles.mainpastasText}>
                  Avarias
                  </Text>
               </View>

               <View style={styles.mainpastas}>
               <Image source={Pasta} />
                  <Text onPress={hadleNavigateToAchadosPerdidos} style={styles.mainpastasText} >
                  Achados
                  </Text>
               </View>

               <View style={styles.mainpastas}>
               <Image source={Pasta} />
               <Text onPress={hadleNavigateToCheckList} style={styles.mainpastasText} >
                  CheckList
                  </Text>
               </View>
            </View>
            <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default DdJetSki;