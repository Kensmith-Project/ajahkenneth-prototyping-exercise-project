import React from 'react';

function Sidebar(props) {
    return (
        <div className='links-container show-container'>
            <ul className='links'>
                {links}
            </ul>
            
        </div>
    );
}

export default Sidebar;