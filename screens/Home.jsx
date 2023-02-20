import { 
    Text, 
    View, 
    FlatList, 
    ActivityIndicator, 
    RefreshControl, 
    TouchableOpacity
} from 'react-native';
import Post from '../components/Post';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const HomeScreen = ({navigation}) => {
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
        return (
        <View style={
            {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center", 
                alignItems:"center"
            }}>
            <ActivityIndicator size="large"></ActivityIndicator>
            <Text style={{marginTop: 10}}>Загрузка...</Text>
        </View>
        )
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({ item }) => 
                    <TouchableOpacity onPress={() => navigation.navigate("FullPost", {id: item.id, title: item.title})}>
                        <Post title={item.title} createdAt={item.createdAt} imgUrl={item.imageUrl}/>
                    </TouchableOpacity>
                }
            />       
        </View>

    );
}
