import React, {useState} from 'react'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
} from 'react-native'
import{Ionicons} from '@expo/vector-icons';
import Buttons from '../components/Buttons';
import Header from '../components/header';
import FelanmalanForm from "../components/FelanmalanForm";

export default function MinaSidorView() {

   

    const [modalWindow, setModalWindow]=useState(false);

    
    return (
        <SafeAreaView >
            <Header />

        <Modal visible={modalWindow} >
            <View style={styles.modal}>
                <Ionicons name="close-circle" 
                          style={styles.icon}
                          onPress={()=>setModalWindow(false)}/>
                <FelanmalanForm/>
            </View>
        </Modal>

        <TouchableOpacity>
                <View style={styles.buttonView}>
                    <Image style={styles.image} source={require("../../assets/calender.png" )}/> 
                    <Text style={styles.textStyle}>KALENDER</Text>  
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.buttonView}>
                    <Image style={styles.image} source={require("../../assets/checklist.png" )}/> 
                    <Text style={styles.textStyle}>CHECKLISTOR</Text>  
                </View>
            </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>setModalWindow(true)}
            >
                <View style={styles.buttonView}>
                    <Image style={styles.image} source={require("../../assets/word-icon.png" )}/> 
                    <Text style={styles.textStyle}>FELANMÄLAN</Text>  
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgrundStyle:{
       /* height:"100%",
        justifyContent:"flex-end",
        backgroundColor:"#d9f1ff",*/

        },

    buttonView: {
        backgroundColor: "#4682B4",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 10,   
    },

    image: {
        margin:10,
        width: 80,
        height: 60,
        resizeMode: "contain"
    },

    textStyle: {
        margin:20,
        fontSize: 20,
        fontWeight: "normal",
        color: "#fff"

    },

    icon:{
        color: "#4682B4",
        fontSize: 50,
        textAlign:"center"
    },

    modal:{
        height:"95%",
        borderRadius:15,
        margin:20,
        padding:10,
        backgroundColor: "#d9f1ff",
    },
   
})