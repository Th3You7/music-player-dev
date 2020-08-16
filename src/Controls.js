import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Controls extends React.Component {
    render() {
        return (
            <div className='controls'>
                <FontAwesomeIcon className='btn backward' icon='step-backward' />
                <FontAwesomeIcon className='btn pause' icon={this.props.icon} onClick={() => this.props.onClick()}/>
                <FontAwesomeIcon className='btn stepforwar' icon='step-forward' />
            </div>
        )
    }
}

export default Controls 