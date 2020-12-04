import React,{useState} from 'react'
import { View,Text,Image,ImageBackground,TextInput,Platform,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import Logo from '../../assets/logo.png';
import Backgroud from '../../assets/backgroudhome.png';
import styles from './styles';

import { firebase } from '../../service/api';

function Register(){
    const navigation = useNavigation();
    const { navigate } = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')




    function hadleNavigateToHomePage(){
        if (password != confirmPassword ) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user?.uid
                const data = {
                    id: uid,
                    email,
                    name,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('SejaBv', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <>
        <ImageBackground style={styles.container} resizeMode="cover" source={Backgroud}>
        <View style={styles.containerBack}> 
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="arrow-left" size={24} color="#000" />
            </BorderlessButton>
            <BorderlessButton onPress={navigation.goBack}>
               <Feather name="menu" size={24} color="#FFD246" />
            </BorderlessButton>
           </View>
        <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
       <View style={styles.main}>
           <Image style={styles.mainlogo} source={Logo} />
           <View style={styles.mainInput} >
               <TextInput style={styles.mainInputText} 
               placeholder="Usuário"
               placeholderTextColor="#535353"
               value={name}
               onChangeText={setName}
               />
               <TextInput style={styles.mainInputText}
               placeholder="E-mail"
               placeholderTextColor="#535353"
               value={email}
               onChangeText={setEmail}
               />
               <TextInput style={styles.mainInputText}
               placeholder="Senha"
               placeholderTextColor="#535353"
               value={password}
               secureTextEntry={true}
               onChangeText={ setPassword}
               />
                <TextInput style={styles.mainInputText}
               placeholder="Confirma senha"
               placeholderTextColor="#535353"
               value={confirmPassword}
               secureTextEntry={true}
               onChangeText={setConfirmPassword }
               />
               <View style={styles.mainInputTextEsqueceu}>
               <Text style={styles.mainInputTextEsqueceuText}>Pelo menos 6 caracteres*</Text>
               </View>
               <TouchableOpacity onPress={hadleNavigateToHomePage} style={styles.mainInputButton} >
                   <Text style={styles.mainInputButtonText}>Criar cadastro</Text>
               </TouchableOpacity>
           </View>
       </View>
    </KeyboardAvoidingView >
    </ImageBackground>
    </>
    )
}

export default Register;