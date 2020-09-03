import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Note = ({ id, note, onpress }) => {
    const onPressHandler = () => {
        onpress(id)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPressHandler}
            >
                <Text>{ note.text }</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '100%',
        borderBottomWidth: 1
    },
    text: {
        width: '100%',
    }
})

export default Note