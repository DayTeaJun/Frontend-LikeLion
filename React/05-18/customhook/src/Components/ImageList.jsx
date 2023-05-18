/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList({ photos }) {
    // console.log(photos)
    return (
        <ul>
            {photos.map((item) => {
                return (
                    <li key={item.id}>
                        <ImageItem img={item} />
                    </li>
                )
            })}
        </ul>
    )
}
