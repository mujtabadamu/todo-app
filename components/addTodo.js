import { useState } from "react"
import { Text, StyleSheet, TextInput, View, Button } from "react-native"

export const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('');

    const handleChange = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
            placeholder="Add todo item..."
            style={styles.addInput}
            onChangeText={handleChange}
            value={text}
            />
           <Button onPress={ ()=> {submitHandler(text)} } title="add todo" color={'coral'} /> 
          </View>
    )
}

const styles = StyleSheet.create({
    addInput:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'#bbb',
        borderBottomWidth:1   
    }
})