import React from 'react';
import {
  Animated,
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Sound,
  VideoControl,
  VrSoundEffects,
  DirectionalLight,
  MediaPlayerState
} from 'react-vr';
import AudioContext from './UsefulGlobals'
import MusicPlayer from './Components/MusicPlayer.js'
import Lighting from './Components/Lighting'

// window.navigator.mediaDevices.getUserMedia({audio:true}).then(
//   stream => {
//     var audioContext = new AudioContext;
//     var source = audioContext.createMediaStreamSource(stream)
//     var analyser = audioContext.createAnalyser()
//     source.connect(analyser)
//     analyser.fftSize = 64
//     var frequencyData = new Uint8Array(analyser.frequencyBinCount)
//     var timeData = new Uint8Array(analyser.fftSize)
//     analyser.connect(audioContext.destination)
//   }
// ).catch(console.error.bind(console))


export default class stackathon_reVRb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerState: new MediaPlayerState({ autoplay: true, muted: false }),
      currentSong: 'funProject.mp3',
      bounceValue: new Animated.Value(0),
      currentTime:0
    }
    this.animate = this.animate.bind(this)
  }



  animate(event) {
    this.setState({currentTime:event.nativeEvent.currentTime})
    // this.state.bounceValue.setValue(2)
    Animated.spring(this.state.bounceValue,
      {
        toValue:event.nativeEvent.currentTime / 5,
        friction:.5,
        tension:8
      }
    ).start()
  }



  render() {
    return (
      <View>

        <Pano source={asset('21230969582_9c5d9fbf54_h.jpg')} />
        <Lighting />
        <Animated.View 
        style={{transform:[{translateY:this.state.bounceValue}]}}
        >
          {[{ x: 5, color: 'red' }, { x: 4, color: 'yellow' }, { x: 3, color: 'purple' }, { x: 2, color: 'green' }, { x: 1, color: 'blue' }].map(x => (<Sphere
            style={{
              color: x.color,
              transform: [{ translate: [2* ((this.state.currentTime/ 10)+ 1) * Math.sin((72 * x.x * Math.PI / 180) - Math.PI - this.state.currentTime*Math.PI ), -1, 2* ((this.state.currentTime/ 10)+ 1) * Math.cos(( 72 * x.x * Math.PI / 180) - Math.PI - Math.PI*this.state.currentTime)] }]
            }}
            lit={true}
            key={x.x}
            widthSegments={500}
            heightSegments={500}
            wireframe={false}

          />))}
        </Animated.View>



        <MusicPlayer
          onTimeUpdate={this.animate}
          currentSong={asset(this.state.currentSong)}
          playerState={this.state.playerState}
        />


      </View>
    );
  }
};

AppRegistry.registerComponent('stackathon_reVRb', () => stackathon_reVRb);
