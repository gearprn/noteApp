import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Note from '../components/Note'

const Home = () => {
    const noteArray = [
        {
            "text": 'sample note'
        }
    ]

    const [noteValue, onChangeText] = React.useState('');
    const [notes, setNotes] = useState(noteArray);

    const addNote = () => {
        console.log("add: " + noteValue)
        setNotes([...notes, { text: noteValue }])

    }

    const deleteNote = (id) => {
        console.log("delete id: " +id)
        setNotes(notes.filter((note, index) => index != id))
    }

    const componentNotes = notes.map((note, index) => {
        return (
            <Note id={index} note={note} onpress={deleteNote} />
        )
    })

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/it_logo.png')}
            />
            <Text>Note</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={noteValue}
                placeholder="Add new note here"
            />
            <TouchableOpacity
                title="add note"
                style={styles.button}
                onPress={addNote}
            >
                <Text>Add Note</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scrollView}>
                {componentNotes}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginTop: 5
    },
    button: {
        width: '100%',
        color: '#fff',
        padding: 10,
        marginTop: 5,
        backgroundColor: '#5ec4ff'
    },
    tinyLogo: {
        position: 'absolute',
        right: 15,
        bottom: 15,
        width: 50,
        height: 50,
      },
    scrollView: {
        width: '100%',
    }
});

export default Home