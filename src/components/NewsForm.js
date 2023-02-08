import { SafeAreaView,
    Text, 
    StyleSheet,
    ScrollView, 
    View, 
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    TextInput, } 
    from "react-native";
import Header from "../components/header";
import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
import { Formik } from "formik";

export default function NewsForm({addArticle}) {

    return(
       
        <View >
            <Formik 
                initialValues={{title:'', fulltext:''}}
                onSubmit={(values, action)=>{
                    addArticle(values);
                    action.resetForm();
                }}>
                    {(props)=>(
                        <View>
                            <TextInput multiline
                                style={styles.title}
                                value={props.values.title}
                                placeholder='Titel'
                                onChangeText={props.handleChange('title')}/>

                            <TextInput multiline
                                style={styles.fulltext}
                                value={props.values.fulltext}
                                placeholder='Text'
                                onChangeText={props.handleChange('fulltext')}/>

                            <Button 
                            title="Lägg till nyhet" 
                            onPress={props.handleSubmit}/>

                        </View>
                    )}

            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    
    title:{
        height:70,
        borderWidth:1,
        borderRadius:15,
        margin:10,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },

    fulltext:{
        height:400,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        marginRight:10,
        marginBottom:30,
        marginTop:20,
        padding:10,
        borderColor:"#4682B4",
        textAlignVertical:"top",
        backgroundColor:"#fff",
    },
   
})