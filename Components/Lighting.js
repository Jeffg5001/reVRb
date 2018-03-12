import React from 'react';
import { View, PointLight, AmbientLight } from 'react-vr';



export default class Lighting extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <View>
             <AmbientLight intensity={0.4} />
             <PointLight intensity={0.5}
             style={{transform:[{translate:[0,5,0.8]}]}}
             color={'#fff'}
             />
            </View>
        )
    }
}