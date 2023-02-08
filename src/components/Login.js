import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, Alert } from "react-native";




export default function LoginScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <modula
            style={style.loginContainer}>
            <TextInput
                style={style.textFieldStyle}
                placeholder="Användarnamn"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={style.textFieldStyle}
                placeholder="Lösenord"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)} />

            <Button
                style={style.loginButton}
                title="Logga in"
                onPress={() => console.log("login attempt")}
            ></Button>

        </modula>
    );
}

const style = StyleSheet.create({
    textFieldStyle: {
        flexDirection: "row",
        backgroundColor: "#afafaf",
        marginTop: 5,
        width: "80%",
        alignSelf: "center",
        padding: 15,
    },
    loginButton: {
        maxWidth: 40,
        backgroundColor: "yellow",
        color: "black"
    },
    loginContainer: {
        alignSelf: "center",
        alignContent: "center",
        width: 250,
        backgroundColor: "yellow"
    }
})