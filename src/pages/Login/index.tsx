import React,{ useState}  from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

import { firebase } from '../../service/api'

function Login(){
    const { navigate } = useNavigation();
     const navigation = useNavigation();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    // async function hadleNavigateToHomePage(){
    //     firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then((response) => {
    //         const uid = response.user?.uid
    //         const usersRef = firebase.firestore().collection('users')
    //         usersRef
    //             .doc(uid)
    //             .get()
    //             .then(firestoreDocument => {
    //                 if (!firestoreDocument.exists) {
    //                     alert("O usuário não existe mais.")
    //                     return;
    //                 }
    //                 const user = firestoreDocument.data()
    //                 navigation.navigate('SejaBv', {user})
    //             })
    //             .catch(error => {
    //                 alert(error)
    //             });
    //     })
    //     .catch(error => {
    //         alert(error)
    //     })
    //     }
    

    function hadleNavigateToRegisterPage(){
        navigate('Register')
        }

        function hadleNavigateToRecuperarPassword(){
            navigate('RecuperarPassword')
            }
            function hadleNavigateToSeja(){
                navigate('SejaBv')
                }
    

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
       <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText} 
               placeholder="Usuário/E-mail"
               placeholderTextColor="#535353"
               value={email}
               autoCapitalize="none"
               keyboardType="email-address"
               underlineColorAndroid="transparent"
               autoCorrect={false}
                onChangeText={setEmail}
               />
               <TextInput style={styles.mainInputText}
               placeholder="Senha"
               placeholderTextColor="#535353"
               underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    secureTextEntry={true}
               value={password}
               onChangeText={setPassword}
               />
               <View style={styles.mainInputTextEsqueceu}>
               <Text onPress={hadleNavigateToRecuperarPassword} style={styles.mainInputTextEsqueceuText}>Esqueceu a senha?</Text>
               </View>
               <TouchableOpacity onPress={hadleNavigateToSeja} style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Entrar</Text>
               </TouchableOpacity>
               <View style={styles.footercadastro}>
                  <Text style={styles.footercadastroText}>Não possui uma conta?</Text>
                  <Text onPress={hadleNavigateToRegisterPage} style={styles.footercadastroText1}>REGISTRAR-SE</Text>
               </View>
           </View>
       </View>
    </KeyboardAvoidingView >
    <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por <Text style={styles.footerTextBold}>AgenciaRC</Text></Text>
    </View>
    </ImageBackground>
   
    </>
    )
}

export default Login;