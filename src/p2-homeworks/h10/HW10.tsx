import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {initStateType, loadingOffAC, loadingOnAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loading from './loading.gif'
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch

    const dispatch = useDispatch()
    let state = useSelector<AppStoreType, initStateType>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingOnAC())
        // setTimeout
        setTimeout( () => {
            dispatch(loadingOffAC())
        }, 2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            <div  className={s.hw10}>
                {state.isLoading
                    ? (
                        <div><img  className={s.loading} src={loading} alt="loading img"/></div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
