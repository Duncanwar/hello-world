import React from 'react'
// inline if with logical expression &&
function MailBox(props){
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}
export default MailBox;