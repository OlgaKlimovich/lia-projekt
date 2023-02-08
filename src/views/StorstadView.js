import { SafeAreaView, StyleSheet, Text, Image,ScrollView, } from "react-native";
import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { FlatList } from "react-native";
import StorstadKokArray from "../Lists/StorstadKokArray"
import StorstadBadrumArray from "../Lists/StorstadBadrumArray";
import StorstadAllaRumArray from "../Lists/StorstadAllaRumArray";
import StorstadTillaggArray from "../Lists/StorstadTillaggArray";
import { View } from "react-native";

export default function StorstadView() {

    return (
        <SafeAreaView  style={styles.background} >
        <Header />
        <Text style={styles.checklistName}>STORSTÄDNING</Text>
       
        <ScrollView style={styles.scrollView}>

            <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>KÖK</Text>

            <FlatList data={StorstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />  
        </View>


<View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>BADRUM</Text>
        
         <FlatList data={StorstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>ALLA RUM</Text>

        <FlatList data={StorstadAllaRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>EXTRA TILLÄGG</Text>

        <FlatList data={StorstadTillaggArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>


</ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    background:{
        //overflow:"scroll",
        
    },

    checklistName:{
        height: 55,
        margin:3,
        //borderRadius: 15,
        textAlign:"center",
        textAlignVertical: "center",
        //margin:3,
        fontSize: 25,
        fontWeight: "normal",
        //backgroundColor: "#4682B4",
        color: "#2faeeb",
        //borderRadius:15,
        borderTopWidth:1,
        borderColor:"#2faeeb",
        //marginLeft:5,

    },

    scrollView:{
        height:620,
    },

    checklistBlock: {
        borderWidth:1,
        borderColor:"#4682B4",
        borderRadius: 15,
        padding: 3,
        marginLeft: 5,
        marginRight:5,
        marginBottom:15,
        marginTop:15,

    },
   
    arrayHeader:{
       height: 40,
        //borderRadius: 15,
        textAlign:"center",
        textAlignVertical: "center",
        
        fontSize: 20,
        fontWeight: "normal",
        color: "#4682B4",
    },

    windows:{
        height: 250,
        textAlignVertical: "center",
        textAlign:"left",
        borderWidth: 1,
        borderColor: "#4682B4",
        borderRadius: 15,
        padding: 10,
        margin: 3,
        backgroundColor: "#d9f1ff",
        fontSize: 17,
        color: "#757575",
    },
  
})

