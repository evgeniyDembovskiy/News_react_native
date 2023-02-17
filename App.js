import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from "styled-components/native";
import Post from './components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => { 
        axios.get("https://63efb5e7c59531ccf1757333.mockapi.io/Posts")
            .then(({ data }) => {
                setItems(data);
            }).catch(err => {
                console.log(err);
                alert("Something went wrong!");
            })
    }, []);

    return (
        <View>
            <Post 
                title="Title" 
                imgUrl="https://i.pinimg.com/originals/6f/51/2a/6f512a0d315da8bc7dec0b7b94e921f9.jpg"
                createdAt="17/02/2023"/>
            {/* <StatusBar theme="auto"/> */}
        </View>

    );
}
