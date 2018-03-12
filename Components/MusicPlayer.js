import React from 'react';
import { View, Sound, VideoControl, asset } from 'react-vr';



export default class MusicPlayer extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return (
            <View>
            <Sound 
            source={{mp3: this.props.currentSong}} 
            playerState = {this.props.playerState}
            style={{transform:[{translate:[0,0,-1]}]}}
            onTimeUpdate={this.props.onTimeUpdate}
            />
            <VideoControl 
            style={{height:0.2, width:4, transform:[{translate:[-2,0,-3]}]}}
            playerState = {this.props.playerState}
            />
            </View>
        )
    }
}