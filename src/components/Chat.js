import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@material-ui/icons';
import React from 'react';
import './chat.css';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Anika</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Anika
                    </span>
                    I love you
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Amimul
                    </span>
                    I love you too
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input placeholder="Send a message"
                        type="text" />
                    <button type="submit">Send a Message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
