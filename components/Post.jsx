import styled from "styled-components/native";

const PostView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
`;

const PostImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-right: 12px;
`;

const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

const PostDate = styled.Text`
    font-size: 12px;
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.4);
`;

const PostDetails = styled.View`
    flex-direction: column;
    justify-content: center;
`

export default function Post({title, imgUrl, createdAt}) {
    return (
        <PostView>
            <PostImage source={{uri: imgUrl}}/>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    );
}