import React from "react";
import './ChatMessage.css'
import Avatar from "../../assets/avatar";

/*{
//   user: 'gpt'
//   message: 'Crie um nome de artigo'
}
*/
export const ChatMessage = ({message}) =>{
    <div className = {`chat-message ${message.user ==='gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                {
                    message.user === 'gpt' && (
                        <avatar/>
                    )}
            </div>
            <div className="message" {message.message}>
            </div>
        </div>
    </div>
}