import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const GeneralScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socket = io('http://192.168.1.79:8888', {transports: ['websocket']});

    useEffect(() => {
        socket.on('message', (data) => {
            console.log(`Received message: ${data}`);
            setMessages((prevMessages) => [...prevMessages, data]);
        });
        return () => {
            socket.disconnect();
        };
    }, []);
    const handleSend = () => {
        if (socket) {
            console.log(`Sending message: ${message}`);
            socket.emit('message', message);
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={messages}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type your message here..."
                />
                <Button title="Send" onPress={handleSend} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginRight: 10,
    },
});

export default GeneralScreen;
