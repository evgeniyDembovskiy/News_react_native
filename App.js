import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import styled from "styled-components/native";
import Post from './components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = () => {
        setIsLoading(true);
        axios.get("https://63efb5e7c59531ccf1757333.mockapi.io/Posts")
        .then(({ data }) => {
            setItems(data);
        }).catch(err => {
            console.log(err);
            alert("Something went wrong!");
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(fetchPosts, []);

    if (isLoading) {
        return <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <ActivityIndicator size="large"></ActivityIndicator>
            <Text style={{marginTop: 10}}>Загрузка...</Text>
        </View>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({ item }) => <Post title={item.title} createdAt={item.createdAt} imgUrl={item.imageUrl}/>}
            />
            {/* {
                items.map(obj => (
                    <Post 
                        key={obj.title}
                        title={obj.title}
                        createdAt={obj.createdAt}
                        imgUrl={obj.imageUrl}
                    />
                ))
            } */}
            {/* <StatusBar theme="auto"/> */}
        </View>

    );
}
