import { SafeAreaView, StyleSheet, Text, ScrollView, Image, StatusBar } from "react-native";
import Checkbox from "../components/Checkbox";
import Header from "../components/header";
import { FlatList } from "react-native";
import FlyttstadKokArray from "../Lists/FlyttstadKokArray";
import FlyttstadRumArray from "../Lists/FlyttstadRumArray";
import FlyttstadBadrumArray from "../Lists/FlyttstadBadrumArray";
import { View } from "react-native";



export default function ChecklistView() {

    
    return(
        
        <SafeAreaView  style={styles.background} >
            <Header />
            <Text style={styles.checklistName}>FLYTTSTÄDNING</Text>
            <View style={styles.warningView}>
            <Image style={styles.warningImage} source={require('../../assets/warning.png')} />
            <Text style={styles.warning}>Observera att även om du följer denna checklista, har du ansvar att städa detaljer som eventuellt inte finns med på listan</Text>
            </View>
            <ScrollView style={styles.scrollView}>

                <View style={styles.checklistBlock}>
                    <Text style={styles.arrayHeader}>RUM</Text>

                    <FlatList  data={FlyttstadRumArray} renderItem={({ item }) => {
                        return <Checkbox
                         text={item.text}
                        /> 
                         }}
                
                     keyExtractor={(item, index) => index.toString()}
                     />
                 </View>

                 <View style={styles.checklistBlock}>
            <Text style={styles.arrayHeader}>KÖK</Text>

            <FlatList  data={FlyttstadKokArray} renderItem={({ item }) => {
            return <Checkbox 
                    text={item.text}  
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>
<View style={styles.checklistBlock}>
         <Text style={styles.arrayHeader}>BADRUM/WC</Text>

        <FlatList data={FlyttstadBadrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

<View style={styles.checklistBlock}>
        <Text style={styles.arrayHeader}>FÖNSTERPUTS</Text>
        <Text style={styles.windows}>Samtliga fönster tvättas på alla sidor, färg och tejprester avlägsnas om möjlighet finns.
            {"\n"}
            {"\n"}Inget rakblad eller liknande används om det inte finns en överenskommelse.
            {"\n"}
            {"\n"}Fönsterbågar och 
            snickerier avtorkas, avtorkning av alla berörda ytor, både vågräta och lodräta. </Text>
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
        width:300,
        paddingLeft:10,
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