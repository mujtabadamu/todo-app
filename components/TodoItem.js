import { Text, StyleSheet, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'

export const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity>
            <View style={styles.list}>
            <MaterialIcons onPress={() => pressHandler(item.id)} color='red' size={18}  name="delete"/>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    list: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },
    text:{
        marginLeft:20,
    }
})