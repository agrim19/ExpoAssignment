import React from 'react';
import {View, Text} from 'react-native';

export default function Post({
    title='Sample Title',
    body='This is some sample body for the text',
    user_id='None given'
}){
    return(
        <View
            style={{
                margin:'2%',
                padding: '5%',
                backgroundColor:'#9c9897'
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    marginBottom:10
                }}
            >
                    {title.toUpperCase()}
            </Text>
            <Text>
                {body}
            </Text>
            <Text
                style={{
                    marginTop:5,
                    alignSelf:'flex-end',
                    color:'#f7f7f7'
                }}
            >
                ID of user: {user_id}
            </Text>
        </View>  
    )
}