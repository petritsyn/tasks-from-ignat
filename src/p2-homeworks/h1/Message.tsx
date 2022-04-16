import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.angle}>asdf</div>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageBody}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
