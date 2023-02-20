import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

const Loading = () => {
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
    );
};

export default Loading;