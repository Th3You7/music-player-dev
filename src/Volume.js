import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Volume extends React.Component {
    render() {
        return(
            <div className='volume'>
                <FontAwesomeIcon className='volume-icon' icon={this.props.icon} />
                <input type="range" min='0' max='100' id='volume-control' onChange={(e) => this.props.onChange(e)}/>
            </div>
        )
    }
}

export default Volume 