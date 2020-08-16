import React from 'react';

import img1 from './img.jpg';
import mp3 from './music.mp3'
class Info extends React.Component {
    render(){
        return(
                <div className='track-info' onTimeUpdate={() => this.props.onTimeUpdate()}>
                    <div className='track-img'>
                        <img src={img1} alt='song img'/>
                    </div>
                    <h2 className='track-title'>The Box</h2>
                    <p className='singer'>Roddy Ricch</p>
                
                    <div className='track-time'>
                        <span className='track-current-time'>{this.props.currentTime}</span>
                        <div className='track-length-bar'>
                            <div className="track-current-time-bar" style={{width: this.props.width + 'px'}}></div>
                        </div>
                        <span className='track-length'>{this.props.duration}</span>
                    </div>
                    <audio className='audio' id='audio' onEnded={()=> this.props.onEnded()}>
                        <source src={mp3} type='audio/mp3'></source>
                    </audio>
                </div>
        )
    }
}


export default Info