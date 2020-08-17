import React from 'react';
import {View, Text} from 'react-native';

export default function User({
    id='None',
    name='John Doe',
    username='Not Found',
    phone='+91-9711924492'
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
                    {name}
            </Text>
            <Text>
                {username}
            </Text>
            <Text>
                Phone Number : {phone}
            </Text>
            <Text
                style={{
                    marginTop:5,
                    alignSelf:'flex-end',
                    color:'#f7f7f7'
                }}
            >
                ID of user: {id}
            </Text>
        </View>  
    )
}