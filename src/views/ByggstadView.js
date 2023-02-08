import { SafeAreaView, Text, StyleSheet,ScrollView, View, Image } from "react-native";
import Header from "../components/header";
import Checkbox from "../components/Checkbox";
import { FlatList } from "react-native";
import ByggstadFonsterArray from "../Lists/ByggstadFonsterArray";
import ByggstadRumArray from "../Lists/ByggstadRumArray";
import ByggstadKokArray from "../Lists/ByggstadKokArray";
import ByggstadVatrumArray from "../Lists/ByggstadVatrumArray";
import ByggstadUtermBalkongArray from "../Lists/ByggstadUtermBalkongArray";
import ByggstadTrapphallArray from "../Lists/ByggstadTrapphallArray";
import ByggstadHissArray from "../Lists/ByggstadHissArray";
import ByggstadTillaggArray from "../Lists/ByggstadTillaggArray";
import ByggstadPersonalbodArray from "../Lists/ByggstadPersonalbodArray";
import ByggstadPersonalbodExtraArray from "../Lists/ByggstadPersonalbodExtraArray";
import ByggstadKontorsbodArray from "../Lists/ByggstadKontorsbodArray";
import ByggstadKontorsbodExtraArray from "../Lists/ByggstadKontorsbodExtraArray";
import ByggstadHygienbodArray from "../Lists/ByggstadHygienbodArray";


export default function ByggstadView() {

    return (
        <SafeAreaView  style={styles.background} >
        <Header />
        <Text style={styles.checklistName}>BYGGSTÄDNING</Text>
        <View style={styles.warningView}>
        <Image style={styles.warningImage} source={require('../../assets/warning.png')} />
        <Text style={styles.warning}> Generellt gäller att förekommande skyddstäckning på golv och i trappor ska tas bort,
                leverantörens städningsanvisningar för exempelvis trägolv, plastmatta, linoleum, textilmatta,
                köksinredning, vitvaror, undertak, kakel och klinker mm. ska följas!</Text>
        </View>
        <ScrollView style={styles.scrollView}>

            <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>FÖNSTERPUTSNING</Text>

            <FlatList data={ByggstadFonsterArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

 <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>RUM</Text>
        <Text style={styles.bottomHeaderText} >Avtorkning och rengöring av följande: </Text>    

        <FlatList data={ByggstadRumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>KÖK</Text>
        <Text style={styles.bottomHeaderText} >Avtorkning och rengöring av följande: </Text>    
        
        <FlatList data={ByggstadKokArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>VÅTRUM</Text>
        <Text style={styles.bottomHeaderText} >Avtorkning och rengöring av följande: </Text>    
        
        <FlatList data={ByggstadVatrumArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>INGLASAT UTERUM/BALKONG</Text>
        

        <FlatList data={ByggstadUtermBalkongArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>TRAPPHALL</Text>
        <Text style={styles.bottomHeaderText} >Avtorkning och rengöring av följande: </Text>    

        <FlatList data={ByggstadTrapphallArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>HISS</Text>
        <Text style={styles.bottomHeaderText} >Avtorkning och rengöring av följande: </Text>    

        <FlatList data={ByggstadHissArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
        <Text style={styles.bottomHeaderText} >Tillägskrav vid städning av teknikutrymmen samt förråd </Text>    

        <FlatList data={ByggstadTillaggArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>BODSTÄDNING</Text>
        <Text style={styles.bottomHeaderText} >Varje gång: </Text> 

        <FlatList data={ByggstadPersonalbodArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        

        
        <Text style={styles.bottomHeaderText} >En gång i månaden:  </Text> 

        <FlatList data={ByggstadPersonalbodExtraArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>KONTORSBOD</Text>
        <Text style={styles.bottomHeaderText} >Varje gång: </Text>    
        
        <FlatList data={ByggstadKontorsbodArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.bottomHeaderText}>En gång i månaden: </Text>

        <FlatList data={ByggstadKontorsbodExtraArray} renderItem={({ item }) => {
            return <Checkbox
                    text={item.text}
            /> 
        }}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>

        <View style={styles.checklistBlock}>
                <Text style={styles.arrayHeader}>HYGIENBOD</Text>
        <Text style={styles.bottomHeaderText} >Varje gång: </Text> 

        <FlatList data={ByggstadHygienbodArray} renderItem={({ item }) => {
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
     height: 135,
     flexDirection:"row",
     alignItems:"center",
     backgroundColor:"#4682B4",
     marginTop:5,
     marginLeft:5,
     marginRight:5,
     padding:1,
     borderRadius:15,
    },

    warningImage:{
       height:50,
       width:50,
       resizeMode: "contain",
       marginLeft:5,
    },

    warning:{
        width:290,
        paddingLeft:15,
        fontSize:15,
        fontStyle:"italic",
        color:"#fff",   
    },

    scrollView:{
        height:480,
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
       height: 30,
        //borderRadius: 15,
        textAlign:"center",
        textAlignVertical: "bottom",
        
        fontSize: 20,
        fontWeight: "normal",
        color: "#4682B4",
    },

    bottomHeaderText:{
        height: 35,
        //borderRadius: 15,
        textAlign:"center",
        textAlignVertical: "center",
        
        fontSize: 15,
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