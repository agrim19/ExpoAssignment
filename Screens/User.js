import React, {useState, useEffect} from 'react';
import { View, Button, SafeAreaView, FlatList} from 'react-native';
import Post from '../components/SingleUser';

const MainScreen = ({navigation})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
        });
    },[]);
    const renderItem = ({ item }) => (
        <Post
            name={item.name}
            username={item.username}
            id={item.id}
            phone={item.phone}
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