import React from 'react';
import Info from './Info';
import Controls  from './Controls';
import Volume from './Volume'

import { faPause, faPlay, faStepBackward, faStepForward, faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

import './index.css'


library.add(faPause, faPlay, faStepBackward, faStepForward, faVolumeUp, faVolumeMute)

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            icon: 'play',
            volumeIcon: 'volume-up',
            currentTime: '00:00',
            duration: '00:00',
            currentTimeBar: 0            
        }

        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.handleVolume = this.handleVolume.bind(this)
        this.handleEnd = this.handleEnd.bind(this)
    }

    

    componentDidMount() {
        const audioElement = document.getElementsByClassName('audio')[0];
        

        audioElement.onloadedmetadata = () => {
            const duration = Math.trunc(audioElement.duration)
            
            let secs = duration % 60;
            let mins = (duration - secs) / 60;

            if(secs < 10){ secs = '0' + secs};
            if(mins < 10){ mins = '0' + mins};
        
            this.setState({
                duration: mins + ':' + secs,
            })
        
        }

    }

    handleEnd() {
        const audioElement = document.getElementsByClassName('audio')[0];

        if(audioElement.ended) {
            audioElement.currentTime = 0;
            this.setState({
                icon: 'play'
            })
            this.audioElement.pause()
        } 
    }

    handleVolume(e) {
        const audioElement = document.getElementsByClassName('audio')[0];

        audioElement.volume = e.target.value / 100;
        
        audioElement.volume === 0 ? this.setState({volumeIcon: 'volume-mute'}) 
        : this.setState({volumeIcon: 'volume-up'})
    }

    handleClick() {       
        this.state.icon === 'play' ? this.play() : this.pause();
    }

    handleTimeUpdate() {
        const barLength = document.getElementsByClassName('track-length-bar')[0];
        const audioElement = document.getElementsByClassName('audio')[0];
        
        const currentTime = Math.trunc(audioElement.currentTime);
        const duration = Math.trunc(audioElement.duration)

        const currentTimeBar = barLength.clientWidth / duration;

        let secs = currentTime % 60;
        let mins = (currentTime - secs) / 60;

        if(secs < 10 ){ secs = '0' + secs };
        if(mins < 10 ){ mins = '0' + mins };

        this.setState({
            currentTime: mins + ':' + secs,
            currentTimeBar: currentTimeBar * currentTime
        })
    }

    pause() {
        const audioElement = document.getElementsByClassName('audio')[0];
        audioElement.pause()
        this.setState({
            icon: 'play'
        })
    }

    play() {
        const audioElement = document.getElementsByClassName('audio')[0]; 
        audioElement.play()
        this.setState({
            icon: 'pause'
        })
    }

    render() {
        return (
            <div className='app'>

                <Volume 
                    onChange={(e) => this.handleVolume(e)}
                    icon={this.state.volumeIcon}
                />
                <Info
                    onTimeUpdate={()=> this.handleTimeUpdate()}
                    onEnded={()=> this.handleEnd()}
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    width={this.state.currentTimeBar}
                 />
                <Controls 
                    onClick={()=> this.handleClick()}
                    icon={this.state.icon}
                />
            </div>
        )
    }
}


export default App 