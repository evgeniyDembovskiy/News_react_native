import React, { useEffect, useState } from 'react';
import { View, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import Loading from '../components/Loading';


const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 16px;
    line-height: 22px;
    padding-bottom: 55px;
`;

const PostTitle = styled.Text`
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const FullPostScreen = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const {id, title} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title,
        });
        setIsLoading(true);
        axios.get("https://63efb5e7c59531ccf1757333.mockapi.io/Posts/" + id)
        .then(({ data }) => {
            setData(data);
        }).catch(err => {
            console.log(err);
            alert("Something went wrong!");
        }).finally(() => {
            setIsLoading(false);
        });
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <ScrollView style={{padding: 20}}>
            <PostTitle>{title}</PostTitle>
            <PostImage source={{uri: data.imageUrl}}></PostImage>
            <PostText>{data.text}</PostText>
        </ScrollView>
    );
};
