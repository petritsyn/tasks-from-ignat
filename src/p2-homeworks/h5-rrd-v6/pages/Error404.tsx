import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <h2>Error 404</h2>
            <h2>The page does not exist!</h2>
            <img src="https://sun9-86.userapi.com/impf/c836737/v836737862/192bc/Y2K6DZjo-io.jpg?size=604x463&quality=96&sign=cbf3dd11b6bdcfeddbbe7eb9b5223791&c_uniq_tag=qbVTOnUfGylfR2TVeY3onr5F50kY60Cavo0O6my74bo&type=album"/>
        </div>
    )
}

export default Error404
