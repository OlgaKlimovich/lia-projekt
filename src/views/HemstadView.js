import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { SafeAreaView, StyleSheet, Text,View, ScrollView, Image } from "react-native";
import HemstadAllaRumArray from "../Lists/HemstadAllaRumArray"
import HemstadKokArray from "../Lists/HemstadKokArray"
import HemstadBadrumArray from "../Lists/HemstadBadrumArray"
import HemstadSovrumArray from "../Lists/HemstadSovrumArray";
import HemstadAllVardagsrumArray from "../Lists/HemstadAllVardagsrumArray";
import HemstadHallArray from "../Lists/HemstadHallArray";
import { FlatList } from "react-native";


export default function HemstadView() {

    return (
        <SafeAreaView  style={styles.background} >
            <Header />
            <Text style={styles.checklistName}>HEMSTÄDNING</Text>
            <View style={styles.warningView}>
            <Image style={styles.warningImage} source={require('../../assets/warning.png')} />
            <Text style={styles.warning}>Försök se vad kunden ser. T.ex. En dammig lampa, tvålkopp, dörrmatta, fingeravtryck i barnhöjd!</Text>
            </View>
            <ScrollView style={styles.scrollView}>

                <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>ALLA RUM</Text>

        <FlatList data={HemstadAllaRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>KÖK</Text>

        <FlatList data={HemstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>BADRUM/WC</Text>

        <FlatList data={HemstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>SOVRUM</Text>

        <FlatList data={HemstadSovrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>ALLRUM/VARDAGSRUM</Text>

        <FlatList data={HemstadAllVardagsrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>HALL</Text>

        <FlatList data={HemstadHallArray} renderItem={({ item }) => {
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

    warningView:{
     height: 80,
     flexDirection:"row",
     alignItems:"center",
     backgroundColor:"#4682B4",
     marginTop:5,
     marginLeft:5,
     marginRight:5,
     padding:10,
     borderRadius:15,
    },

    warningImage:{
       height:50,
       width:50,
       resizeMode: "contain",
    },

    warning:{
        width:280,
        paddingLeft:20,
        fontSize:15,
        fontStyle:"italic",
        color:"#fff",   
    },

    scrollView:{
        height:530,
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