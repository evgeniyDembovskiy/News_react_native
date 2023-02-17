import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from "styled-components/native";

const Post = styled.View`
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`;


export default function App() {
    return (
        <View>
            <Post>
            </Post>

        </View>

    );
}
