import React,{useState} from 'react'
import { View, Text, Image, ImageBackground, CheckBox, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native';



import Backgroud from '../../assets/backgroudmenu.png';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Pasta from '../../assets/Caminho46.png';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


function Checklist() {
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    const [isFalse, setFalse] = useState(false);

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
                        <Image style={styles.containerboxImage} source={Pasta} />
                        <Text style={styles.containerboxText} >CheckList</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Óleo do Motor</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Óleo da Rabeta</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Óleo do Gerador</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Bujões</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Âncora</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Hélice</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Estrobo</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Tanque de Água</Text>
                    </View>


                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Farol</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Luz de Navegação</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Documentação</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>GPS</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Som</Text>
                    </View>

                    <View style={styles.checkboxContainer}>
                    <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
                 />
                          <CheckBox
          value={isFalse}
          onValueChange={setFalse}
          style={styles.checkbox1}
                 />
        <Text style={styles.label}>Churrasqueira</Text>
                    </View>
                  

                </View>
              
      

                <View style={styles.footer}>
                    <Image style={styles.footerImg} source={Logo} />
                </View>
            </ImageBackground>
        </>
    )
}

export default Checklist;