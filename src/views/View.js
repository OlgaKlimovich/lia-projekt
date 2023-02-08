import React from 'react'
import {
    Text,
    Button,
    View,
    SafeAreaView,
    Alert,
    Image,
    TouchableHighlight,
    FlatList,
    StyleSheet
} from 'react-native'
import TESTarrayImg from '../components/TESTarrayImg'
import Buttons from '../components/Buttons'
import Header from '../components/header'

export default function Index() {
    return (
        <SafeAreaView style={styles.rStyle}>
            <Header />

            <FlatList data={TESTarrayImg} renderItem={({ item }) => {
                return <Buttons
                    title={item.title}
                    image={item.img}
                    navigation={item.navigation}
                />
            }}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rStyle: {
        flex: 1,
        height: "100%",
        overflow: 'scroll'
    },

    btnContainer: {
        //  justifyContent: "center"
    }


})


