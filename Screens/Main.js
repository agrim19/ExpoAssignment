import React, {useState, useEffect} from 'react';
import { View, SafeAreaView,FlatList, Button } from 'react-native';
import Post from '../components/SinglePost';

const MainScreen = ({navigation})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        });
    },[]);
    const renderItem = ({ item }) => (
        <Post
            title={item.title}
            body={item.body}
            user_id={""+item.userId}
        />
    );
    return(
        <SafeAreaView
            style={{flex:1}}
        >
            <View
                style={{
                    marginTop:50,
                    backgroundColor:'black'
                }}
            >
                <Button
                    style={{
                        backgroundColor:'green'
                    }}
                    title='Open Drawer'
                    onPress={()=>{navigation.openDrawer()}}
                />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => ""+item.id}
            />
        </SafeAreaView>
    )
}

export default MainScreen;