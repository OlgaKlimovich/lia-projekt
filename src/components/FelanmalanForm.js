import { SafeAreaView,
    Text, 
    StyleSheet,
    ScrollView, 
    View, 
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    TextInput,
    Linking, } 
    from "react-native";
import Header from "./header";
import{Ionicons} from '@expo/vector-icons';
import React, { useState } from "react";
import { Formik } from "formik";

export default function FelanmalanForm() {

    return(
       
        <View >
            <Formik 
                initialValues={{fulltext:''}}
                onSubmit={(values, action)=>{
                    
                    action.resetForm();
                }}>
                    {(props)=>(
                        <View>
                    
                            <TextInput multiline
                                style={styles.fulltext}
                                value={props.values.fulltext}
                                placeholder='Text'
                                onChangeText={props.handleChange('fulltext')}
                                />

                            <Button 
                            title="Skicka felanmälan" 
                            onPress={() => Linking.openURL(`mailto:oklimovich37@gmail.com?subject=Felanmälan&body=${props.values.fulltext}`)}
                             />

                        </View>
                    )}

            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    
    fulltext:{
        height:450,
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