import React from 'react'
import loadingImg from '../image/loading.gif'
import styles from './Loding.module.css'

export default function Loading() {
    return (
        <img src={loadingImg} alt="" className={styles.imgLoading} />
    )
}
