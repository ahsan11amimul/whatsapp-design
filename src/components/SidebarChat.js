import { Avatar } from '@material-ui/core'
import React from 'react';
import './sidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebar__chat">
            <Avatar />
            <div className="sidebar__chatInfo">
                <h2>Anika</h2>
                <p>I love yoou</p>
            </div>
        </div>
    )
}

export default SidebarChat
