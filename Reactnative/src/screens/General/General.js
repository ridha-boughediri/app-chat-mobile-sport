import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import { request } from '../../service/request';

const GeneralScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const socket = io('http://10.10.57.45:8888', { transports: ['websocket'] });

    useEffect(() => {
        request('messages/user', 'get', '')
            .then(response => {
                const values = response.data.map(message => {
                    
                    return { content: message.content, user_id: message.user.login }
                })
                setMessages(values)
            })
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
        
            request('messages/', 'post', { "content": message })
            setMessage('');

        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={messages}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.message}>{item.content}</Text>
                        <Text style={styles.userId}>{item.user_id}</Text>
                    </View>
                )}
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
    message: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    userId: {
        padding: 5,
        fontSize: 14,
        color: 'gray',
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
