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
            <img src={props.avatar} alt=""/>
            <div className={s.dialogBody}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.textMessage}>
                    <div>
                        {props.message}
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
