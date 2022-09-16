import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = () => {
    return (
        <View style={styles.head}>
            <Text style={styles.title}>Todo App React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        backgroundColor: 'coral',
        padding: 10,
        marginTop: 70,
        width: '100%',
    },
    title: {
        textAlign:'center',
        color: '#fff',
    }
})