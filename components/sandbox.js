import { useState } from "react"
import { Text, StyleSheet, TextInput, View, Button } from "react-native"

export const SandBox = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>SandBox</Text>
            <Text style={styles.box2}>SandBox</Text>
            <Text style={styles.box3}>SandBox</Text>
            <Text style={styles.box4}>SandBox</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        // flex: 1,
        paddingTop:40,
        flexDirection:'row',
        backgroundColor:'#ddd',
        justifyContent:"space-around",
        alignItems:'center'
    },
    box1:{
        backgroundColor:'green',
        padding: 10,
        flex: 2,
    },
    box2:{
        backgroundColor:'blue',
        padding: 20,
        flex: 1,

    },
    box3:{
        backgroundColor:'coral',
        padding: 30,
        flex: 1,

    },
    box4:{
        backgroundColor:'gold',
        padding: 40,
        flex: 8,

    },
})