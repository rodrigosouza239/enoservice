import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';

import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Grupo59 from '../../assets/Grupo58.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

function AgendamentoPass(){
   const navigation = useNavigation();
   const { navigate } = useNavigation();
    
   const [date, setDate] = useState(new Date(1598051730000));
   const [mode, setMode] = useState('date');
   const [show, setShow] = useState(false);
 


    function hadleNavigateToSucesso(){
        navigate('Sucesso')
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
                 <Image style={styles.containerboxImage} source={Grupo59} />
                 <Text style={styles.containerboxText} >Agendamento de Passeios</Text>
            </View>
            
            <View style={styles.mainPageForm} >
                     <Text style={styles.mainText}>
                         Data :
                     </Text>
                     
                     <TextInput autoCompleteType="cc-exp-month"  style={styles.mainTextInput} />
                 </View>

                 <View style={styles.mainPageForm} >
                     <Text style={styles.mainText}>
                         Hora :
                     </Text>
                     <TextInput style={styles.mainTextInput} />
                 </View>
                 <Text style={styles.mainInputTextEsqueceuText}>*Agendamento com 2 dias de antecedência.</Text>


                 <View>
                     <Text style={styles.mainInputTextObs}  >Obs:</Text>
                        <TextInput style={styles.mainInputText}
                            />
                    </View>
                    <TouchableOpacity onPress={hadleNavigateToSucesso} style={styles.containerButton}>
                        <Text style={styles.containerButtonText}>Enviar</Text>
                    </TouchableOpacity>
           </View>

                     <View style={styles.footer}>
    <Image style={styles.footerImg} source={Logo} />
    </View>
    </ImageBackground>
    </>
    )
}

export default AgendamentoPass;